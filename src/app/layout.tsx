import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData, ThemeProvider } from "@/components";
import { Footer, Header } from "@/components/layout";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});
export const metadata: Metadata = {
    metadataBase: new URL("https://muhiddinovismoil.uz"),
    title: "Ismoil | Full-Stack Developer",
    description:
        "Portfolio of Ismoil, a Full-Stack Developer specializing in Node.js and React.js. Explore projects, skills, and contact details.",
    keywords: [
        "Full-Stack Developer",
        "Node.js",
        "React.js",
        "Next.js",
        "TailwindCSS",
        "Portfolio",
        "Web Development",
    ],
    authors: [{ name: "Ismoil", url: "https://muhiddinovismoil.uz" }],
    openGraph: {
        title: "Ismoil | Full-Stack Developer",
        description:
            "Turning ideas into impactful digital experiences with Node.js & React.js.",
        url: "https://muhiddinovismoil.uz",
        siteName: "Mukhiddinov Ismoil's Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ismoil's Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ismoil | Full-Stack Developer",
        description:
            "Turning ideas into impactful digital experiences with Node.js & React.js.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
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
