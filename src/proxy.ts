import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Known vulnerability scanner probes & sensitive files to block immediately
const BLOCKED_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/wp-(admin|login|includes|content)/i,
  /\/xmlrpc\.php/i,
  /\/php(myadmin|info)/i,
  /\/\.aws/i,
  /\/\.ds_store/i,
  /\/etc\/passwd/i,
  /\.\.\//, // Directory traversal
];

// In-memory sliding window rate limiter for edge middleware
interface ClientRecord {
  count: number;
  resetAt: number;
}

const edgeRateLimitMap = new Map<string, ClientRecord>();

// Clean up stale entries every 3 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of edgeRateLimitMap.entries()) {
      if (record.resetAt < now) {
        edgeRateLimitMap.delete(key);
      }
    }
  }, 180000);
}

function isRateLimited(ip: string, limit: number = 30, windowSeconds: number = 60): boolean {
  const now = Date.now();
  const record = edgeRateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    edgeRateLimitMap.set(ip, {
      count: 1,
      resetAt: now + windowSeconds * 1000,
    });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Block common malicious scanner probes and path traversals
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse('Access Denied', { status: 403 });
    }
  }

  // 2. Global Rate Limiting for API routes (/api/*)
  if (pathname.startsWith('/api/')) {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    // 20 requests per minute limit per IP on API routes
    if (isRateLimited(ip, 20, 60)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait before making more requests.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': '20',
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }
  }

  // 3. Continue request and attach baseline security headers
  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, fonts (public assets)
     */
    '/((?!_next/static|_next/image|images|favicon.ico).*)',
  ],
};
