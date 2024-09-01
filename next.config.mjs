/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // google images
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  }
}

export default nextConfig
