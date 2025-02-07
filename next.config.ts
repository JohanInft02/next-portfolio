/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/57459541',
        search: '?v=4',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1542831371-29b0f74f9713',
        search: '?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww',
      },
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
