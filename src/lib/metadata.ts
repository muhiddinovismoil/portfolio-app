import type { Metadata } from "next";

export const BASE_URL = "https://muhiddinovismoil.uz";
export const SITE_NAME = "Mukhiddinov Ismoil's Portfolio";

export function generateBaseMetadata(
    title: string,
    description: string,
    pathname?: string
): Metadata {
    const url = pathname ? `${BASE_URL}${pathname}` : BASE_URL;

    return {
        metadataBase: new URL(BASE_URL),
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: "image/png",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: "@muhiddinovdev",
            images: ["/og-image.png"],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export function generateStructuredData(
    type: "Person" | "WebSite" | "BreadcrumbList",
    data: Record<string, any>
) {
    return {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };
}

export const SCHEMA_PERSON = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ismoil Mukhiddinov",
    jobTitle: "Full-Stack Developer",
    url: BASE_URL,
    sameAs: [
        "https://github.com/muhiddinovismoil",
        "https://t.me/mukhiddinov_ismoil",
        "mailto:mukhiddinovvismoil@gmail.com",
    ],
    description:
        "Full-Stack Developer specializing in Node.js and React.js. Expert in building scalable web applications, APIs, and modern user interfaces.",
    knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "REST API",
        "GraphQL",
        "Docker",
        "Git",
        "CI/CD",
        "TailwindCSS",
        "Web Development",
    ],
};
