/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns:[new URL('https://flagcdn.com/**'),new URL('http://127.0.0.1:8000/**'),new URL('https://5aab0d13279d.ngrok-free.app/**'),new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/**`)]
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        // port: "8001", // use 8000 or 8001 depending on your server
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname,
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname,
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "154.53.46.133",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
