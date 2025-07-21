import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ismoil – Full-Stack Developer",
    description:
        "I'm Ismoil, a Full-Stack Developer specializing in building modern web applications using JavaScript, TypeScript, NestJS, React, Fastify, and Prisma.",
    keywords: [
        "Ismoil",
        "Full-Stack Developer",
        "Portfolio",
        "JavaScript Developer",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "NestJS",
        "Fastify",
        "HonoJS",
        "Prisma",
        "Backend Developer",
        "Frontend Developer",
        "Web Developer",
        "API Developer",
        "SQL",
        "PostgreSQL",
        "MongoDB",
    ],
    openGraph: {
        title: "Ismoil – Full-Stack Developer",
        description:
            "Explore Ismoil's portfolio, featuring full-stack projects using JavaScript, TypeScript, React, NestJS, Fastify, HonoJS, and Prisma.",
        url: "https://muhiddinovismoil.uz",
        siteName: "Ismoil Portfolio",
        images: [
            {
                url: "/hero/my-image.svg",
                width: 1200,
                height: 630,
                alt: "Ismoil portfolio preview image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ismoil – Full-Stack Developer",
        description:
            "Check out Ismoil's full-stack web development projects and skills in NestJS, Fastify, React, and more.",
        images: ["/hero/my-image.svg"],
    },
    metadataBase: new URL("https://muhiddinovismoil.uz"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uz" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen justify-between">
                        <div>
                            <Header />
                            {children}
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
