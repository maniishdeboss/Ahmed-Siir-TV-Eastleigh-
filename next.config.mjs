/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4dar91ffoetct2nu.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
