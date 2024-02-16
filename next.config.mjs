/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.kku.edu.sa',
          // pathname: '/sites/default/files/2024-01/',
          pathname: "/sites/default/files/**",
        },
        {
          protocol: 'https',
          hostname: 'kku.edu.sa',
          // pathname: '/sites/default/files/2024-01/',
          pathname: "/sites/default/files/**",
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
        },
        {
          protocol: 'https',
          hostname: 'kkudr.kku.edu.sa',
          // pathname: '/sites/default/files/2024-01/',
          
        },
      ],
    },
};

export default nextConfig;
