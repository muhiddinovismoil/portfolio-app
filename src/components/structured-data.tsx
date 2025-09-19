export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ismoil Mukhiddinov",
        jobTitle: "Full-Stack Developer",
        url: "https://muhiddinovismoil.uz",
        description:
            "Ismoil Mukhiddinov — Full-Stack Developer specializing in Node.js and React.js. Passionate about building fast, scalable, and user-friendly web applications with modern technologies.",
        alternateName: [
            "muhiddinov-dev",
            "codingwithismoil",
            "ismoilcoder",
            "developwithismoil",
            "mukhiddinovdev",
            "mukhiddinovismoil",
            "FullStack Developer",
            "FullStack Developer Node.js + React.js",
            "FullStack Development",
            "Full Stack Programming",
            "Full-Stack Coding",
        ],
        keywords: [
            "Ismoil Mukhiddinov",
            "Full-Stack Developer",
            "Node.js Developer",
            "React.js Developer",
            "Next.js Developer",
            "JavaScript Developer",
            "TypeScript Developer",
            "Uzbek Developer",
            "Web Developer Portfolio",
            "Frontend and Backend Development",
        ],
        sameAs: [
            "https://github.com/muhiddinovismoil",
            "https://t.me/mukhiddinov_ismoil",
            "mailto:mukhiddinovvismoil@gmail.com",
        ],
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "NestJS",
            "Hono.js",
            "Fastify.js",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Mongoose",
            "Prisma",
            "TypeORM",
            "Sequelize",
            "Knex.js",
            "REST API",
            "GraphQL Basics",
            "WebSocket",
            "Docker",
            "Git",
            "GitHub",
            "GitLab",
            "CI/CD",
            "Basic Testing",
            "Tailwind CSS",
            "SCSS",
            "HTML",
            "CSS",
            "Ant Design",
            "MUI",
            "Shadcn UI",
            "Swiper.js",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
