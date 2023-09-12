/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true
    },
    distDir: 'dist',
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
