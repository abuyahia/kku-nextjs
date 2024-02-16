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
          hostname: 'portal.aseer.gov.sa',
          // pathname: '/sites/default/files/2024-01/',
          
        },
      ],
    },
    async headers() {
      return [
          {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
              ]
          }
      ]
  }
};

export default nextConfig;
