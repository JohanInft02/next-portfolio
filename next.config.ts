/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  domains: ["avatars.githubusercontent.com", "images.unsplash.com", "udemy-certificate.s3.amazonaws.com"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
