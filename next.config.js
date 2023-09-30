/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true
    },
    distDir: "build",
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
