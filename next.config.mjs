/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.imagekit.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
