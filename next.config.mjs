/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ===== SECURITY HEADERS ===== */
  async headers() {
    return [
      {
        // Terapkan ke semua route
        source: "/(.*)",
        headers: [
          // Mencegah clickjacking — web tidak bisa di-embed di iframe situs lain
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Mencegah MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Aktifkan XSS protection di browser lama
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Kontrol informasi referer yang dikirim
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Strict Transport Security — paksa HTTPS selama 1 tahun
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Permissions Policy — blokir akses ke fitur sensitif
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          // Content Security Policy — keamanan paling ketat
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self'",
              "frame-src 'self' https://www.google.com https://maps.google.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Mencegah DNS prefetch ke domain lain
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Cross-Origin policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },

  /* ===== PRODUCTION OPTIMIZATION ===== */
  poweredByHeader: false, // Hilangkan header "X-Powered-By: Next.js"
};

export default nextConfig;
