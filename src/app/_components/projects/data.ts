export interface ProjectsI {
    id: string;
    title: string;
    image: string;
    badges: string[];
    liveLink: string | undefined;
    githubLink: string;
    projectStatus: Status;
    description: string;
}
export enum Status {
    completed = "completed",
    in_process = "in-process",
    planned = "planned",
}

export const projects: ProjectsI[] = [
    {
        id: "61ed0c24-8c6f-4aff-b71f-b3fad07c33ab",
        title: "Gadgets bot",
        image: "/projects/gadgets-bot.jpg",
        badges: [
            "Nest.js",
            "Telegraf",
            "TypeScript",
            "Telegram Bot",
            "Prisma",
            "PostgreSQL",
        ],
        githubLink: "https://github.com/muhiddinovismoil/gadgets_bot",
        liveLink: undefined,
        projectStatus: Status.in_process,
        description:
            "A Telegram bot for buying and selling gadgets (Android, iOS, Laptop, PC). Users submit a short form with photos/videos of their device, which is reviewed by admins before being published to the main channel.",
    },
    {
        id: "6071a0d7-c218-4855-ba16-528f3bb68a75",
        title: "Cho'ntak bot clone",
        image: "/projects/chontak-bot.jpg",
        badges: [
            "Nest.js",
            "Telegraf",
            "TypeScript",
            "Telegram Bot",
            "Mongoose",
            "MongoDB",
        ],
        githubLink: "https://github.com/muhiddinovismoil/chontak_bot",
        liveLink: undefined,
        projectStatus: Status.completed,
        description:
            "A smart note-taking Telegram bot: save texts, media, and more with keywords, then quickly retrieve them via search or inline queries. Clone of the official version.",
    },
    {
        id: "9be8d1c7-6253-477f-ad45-76626748df34",
        title: "Nasiya API",
        image: "/projects/nasiya-api.png",
        badges: [
            "Nest.js",
            "TypeORM",
            "TypeScript",
            "PostgreSQL",
            "JWT Auth",
            "REST API",
        ],
        githubLink: "https://github.com/muhiddinovismoil/nasiyasavdo_app",
        liveLink: undefined,
        projectStatus: Status.completed,
        description:
            "A backend API for sellers to manage halal installment (nasiya) sales. Record products, track payments, view monthly stats, and simplify the pay-later process with fairness, transparency, and security.",
    },
    {
        id: "225cc635-44ad-4851-8ec6-5faec7ee2c23",
        title: "Cinevia API",
        image: "/projects/cinevia-api.png",
        badges: [
            "Nest.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "JWT Auth",
            "REST API",
        ],
        githubLink: "https://github.com/muhiddinovismoil/cinevia-api",
        liveLink: undefined,
        projectStatus: Status.completed,
        description:
            "Backend API powering Cinevia — a free online movie streaming platform. Handles authentication, movie data, user management, and secure transactions.",
    },
    {
        id: "8391f604-62be-4356-97b4-f625d0b1b035",
        title: "Cinevia Admin Panel",
        image: "/projects/cinevia-admin.png",
        badges: [
            "React.js",
            "TypeScript",
            "Ant Design",
            "Vite",
            "Dashboard",
            "Tanstack Query",
            "Flexible UI",
            "Auth",
        ],
        githubLink: "https://github.com/muhiddinovismoil/cinevia-admin-panel",
        liveLink: undefined,
        projectStatus: Status.completed,
        description:
            "Admin dashboard for managing Cinevia content. Provides movie CRUD operations, user control, and platform statistics in a clean UI.",
    },
    {
        id: "8cc58997-9e79-401c-94ca-91b9b7ec86c0",
        title: "Cinevia Web App",
        image: "/projects/cinevia-app.png",
        badges: [
            "React.js",
            "TypeScript",
            "TailwindCSS",
            "Vite",
            "Framer-Motion",
            "Flexible UI",
            "Responsive design",
            "Tanstack Query",
        ],
        githubLink: "https://github.com/muhiddinovismoil/cinevia-app",
        liveLink: undefined,
        projectStatus: Status.completed,
        description:
            "Frontend for Cinevia — a free online movie streaming platform. Users can browse, search, and watch movies with a fast and responsive interface.",
    },
];
