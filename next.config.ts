/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com", "udemy-certificate.s3.amazonaws.com"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
