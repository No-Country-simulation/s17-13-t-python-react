/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn3.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn2.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.cdn3.buscalibre.com',
      },
      {
        protocol: 'https',
        hostname: 'images.cdn2.buscalibre.com',
      },
      {
        protocol: 'https',
        hostname: 'images.cdn1.buscalibre.com',
      }
    ],
  },
};

export default nextConfig;
