/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://sauditritons.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
