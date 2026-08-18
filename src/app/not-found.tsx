import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 px-6 py-24 text-center text-white">
      <div className="max-w-md space-y-6">
        <span className="text-7xl font-semibold tracking-tight text-orange-400 block">404</span>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Page not found</h1>
        <p className="text-navy-100 text-lg leading-relaxed font-normal">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Button href="/" variant="orange" size="lg">
            Return to homepage →
          </Button>
        </div>
      </div>
    </div>
  );
}
