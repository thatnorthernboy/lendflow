// next.config.mjs (ESM)
import createNextIntlPlugin from 'next-intl/plugin';

/** Use our request config in ./lib/i18n.ts */
const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**'
      }
    ]
  }
};

export default withNextIntl(nextConfig);
