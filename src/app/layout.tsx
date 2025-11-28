import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { StructuredData, ThemeProvider } from "@/components";
import { Footer, Header } from "@/components/layout";
import { generateBaseMetadata, SCHEMA_PERSON } from "@/lib/metadata";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--font-sans",
});

export const metadata: Metadata = {
    ...generateBaseMetadata(
        "Ismoil Mukhiddinov | Full-Stack Developer",
        "Full-Stack Developer specializing in Node.js & React.js. I build high-performance web applications, APIs, and modern UIs. Check out my projects and skills."
    ),
    keywords: [
        "Full-Stack Developer",
        "Node.js Developer",
        "React.js Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Web Developer",
        "Portfolio",
        "Web Development",
        "JavaScript",
        "API Development",
        "Frontend",
        "Backend",
    ],
    authors: [
        { name: "Ismoil Mukhiddinov", url: "https://muhiddinovismoil.uz" },
    ],
    creator: "Ismoil Mukhiddinov",
    publisher: "Ismoil Mukhiddinov",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "https://muhiddinovismoil.uz",
    },
    verification: {
        google: "google-site-verification-code", // Replace with actual verification code
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5"
                />
                <meta
                    name="theme-color"
                    content="#ffffff"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    name="theme-color"
                    content="#0a0a0a"
                    media="(prefers-color-scheme: dark)"
                />
                <meta name="format-detection" content="telephone=no" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />

                {/* Preconnect to Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                {/* DNS Prefetch for external services */}
                <link
                    rel="dns-prefetch"
                    href="https://www.googletagmanager.com"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.google-analytics.com"
                />

                {/* Google Analytics */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GA_MEASUREMENT_ID', {
                                page_path: window.location.pathname,
                                page_title: document.title,
                                anonymize_ip: true,
                            });
                        `,
                    }}
                />

                <StructuredData />
            </head>
            <body
                className={`${inter.variable} antialiased min-h-screen flex flex-col`}
            >
                <ThemeProvider>
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
