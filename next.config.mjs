/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.xblock.tech/:path*", // Proxy to API
      },
    ];
  },
};

export default nextConfig;
