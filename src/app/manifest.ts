import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DBS-Express | Official Criminal Record Check Services',
    short_name: 'DBS-Express',
    description: 'Fast, compliant Basic, Standard, and Enhanced DBS criminal record checks in the UK.',
    start_url: '/',
    display: 'standalone',
    background_color: '#101029',
    theme_color: '#27276E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
