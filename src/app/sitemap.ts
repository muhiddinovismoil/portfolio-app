import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://muhiddinovismoil.uz",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://muhiddinovismoil.uz/#about",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://muhiddinovismoil.uz/#skills",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://muhiddinovismoil.uz/#projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://muhiddinovismoil.uz/#contacts",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
