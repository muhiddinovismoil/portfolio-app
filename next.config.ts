import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Image Optimization
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

    // Performance & Optimization
    compress: true,

    // Headers for Security & Performance
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "geolocation=(), microphone=(), camera=()",
                    },
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/cv/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                    {
                        key: "Content-Type",
                        value: "application/pdf",
                    },
                    {
                        key: "Content-Disposition",
                        value: "inline; filename='CV.pdf'",
                    },
                ],
            },
            {
                source: "/fonts/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Redirects
    async redirects() {
        return [
            {
                source: "/sitemap",
                destination: "/sitemap.xml",
                permanent: true,
            },
        ];
    },

    // Webpack configuration for optimization
    webpack: (config, { isServer }) => {
        if (!isServer) {
            if (!config.optimization) {
                config.optimization = {};
            }
            if (!config.optimization.splitChunks) {
                config.optimization.splitChunks = {};
            }
            if (!config.optimization.splitChunks.cacheGroups) {
                config.optimization.splitChunks.cacheGroups = {};
            }

            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                ui: {
                    test: /[\\/]src[\\/]components[\\/]ui/,
                    name: "ui",
                    priority: 10,
                    minSize: 0,
                },
                layout: {
                    test: /[\\/]src[\\/]components[\\/]layout/,
                    name: "layout",
                    priority: 10,
                    minSize: 0,
                },
            };
        }
        return config;
    },
};

export default nextConfig;
