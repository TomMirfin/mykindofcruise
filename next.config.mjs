/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "*",
        pathname: "https://images.ctfassets.net/**",
      },
    ],
  },
};

export default nextConfig;
