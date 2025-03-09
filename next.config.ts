/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/57459541",
        search: "?v=4",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com/**",
      },
      {
        protocol: "https",
        hostname: "udemy-certificate.s3.amazonaws.com",
        port: "",
        pathname: "/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg",
        search: "?v=1715619564000",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
        port: "",
        pathname: "/docs/images/blog/image-1.jpg",
        search: "",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
