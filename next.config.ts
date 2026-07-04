import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization — avif first for max compression
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Gzip/Brotli compression on responses
  compress: true,

  // Never ship source maps to clients
  productionBrowserSourceMaps: false,

  // Tree-shake heavy libs properly
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'three', 'gsap'],
  },

  // Aggressive cache headers for all static assets
  async headers() {
    return [
      {
        source: '/:path*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)',
        locale: false,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*(mp4|webm|ogg)',
        locale: false,
        headers: [
          // Videos are immutable once deployed
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
      {
        source: '/:path*(js|css)',
        locale: false,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Security headers on all HTML pages
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
