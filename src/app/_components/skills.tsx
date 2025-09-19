import React from "react";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import {
    Braces,
    Code2Icon,
    LucideGitBranch,
    LucideVerified,
} from "lucide-react";

export const Skills = () => {
    return (
        <div
            id="skills"
            className="flex flex-col justify-center pt-[125px] gap-10"
        >
            <div className="flex flex-col justify-center items-center gap-5 text-center px-4">
                <Badge variant="default">
                    <LucideVerified className="mr-1" /> Verified
                </Badge>
                <TypographyH2 className="text-3xl md:text-4xl font-bold">
                    My Skills in Web Development
                </TypographyH2>
                <TypographyP className="max-w-2xl text-md text-muted-foreground">
                    Here are the technologies and tools I have worked with over
                    the years.
                </TypographyP>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
                <div className="flex flex-col items-center border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <div className="bg-primary/15 rounded-full p-3 mb-3">
                        <Code2Icon className="h-7 w-7 text-primary" />
                    </div>
                    <TypographyP className="font-bold text-lg">
                        Frontend
                    </TypographyP>
                    <p className="text-muted-foreground mt-3 text-center">
                        HTML, CSS, SCSS, TailwindCSS, JavaScript, TypeScript,
                        React.js, Vite, Next.js, ShadcnUI, MUI, Antd, etc.
                    </p>
                </div>

                <div className="flex flex-col items-center border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <div className="bg-primary/15 rounded-full p-3 mb-3">
                        <Braces className="h-7 w-7 text-primary" />
                    </div>
                    <TypographyP className="font-bold text-lg">
                        Backend
                    </TypographyP>
                    <p className="text-muted-foreground mt-3 text-center">
                        Node.js, Express.js, Hono.js, Fastify.js, Nest.js,
                        PostgreSQL, MySQL, MongoDB, Prisma, TypeORM, Sequelize,
                        Knex.js, etc.
                    </p>
                </div>

                <div
                    className="flex flex-col items-center border rounded-xl p-6  pb-8 shadow-sm hover:shadow-md transition
                  sm:col-span-2 lg:col-span-1 sm:justify-self-center"
                >
                    <div className="bg-primary/15 rounded-full p-3 mb-3">
                        <LucideGitBranch className="h-7 w-7 text-primary" />
                    </div>
                    <TypographyP className="font-bold text-lg">
                        Others
                    </TypographyP>
                    <p className="text-muted-foreground mt-3 text-center">
                        Git, GitHub, GitLab, WebSocket, RESTful API, Docker,
                        Docker Compose, GitHub Actions, etc.
                    </p>
                </div>
            </div>
        </div>
    );
};
