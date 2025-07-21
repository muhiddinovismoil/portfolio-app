import React from "react";
import { ProjectData } from "@/data";
import { ProjectsUi } from "@/components";

export const metadata = {
    title: "Projects – Ismoil, Full-Stack Developer",
    description:
        "Explore full-stack projects developed by Ismoil using NestJS, TypeScript, Node.js, Python, and PyQt5. Projects include Telegram bots, web APIs, and games.",
    keywords: [
        "Ismoil",
        "Full-Stack Projects",
        "NestJS",
        "TypeScript",
        "Node.js",
        "Python",
        "Telegram Bots",
        "Backend Developer",
        "GitHub Portfolio",
        "Web Developer Projects",
        "PyQt5 Game",
        "Portfolio Projects",
    ],
    openGraph: {
        title: "Projects – Ismoil, Full-Stack Developer",
        description:
            "Take a look at software projects created by Ismoil using modern technologies like NestJS, Node.js, and Python. Open-source GitHub links included.",
        url: "https://muhiddinovismoil.uz/projects",
        siteName: "Ismoil Portfolio",
        images: [
            {
                url: "/preview/projects.png",
                width: 1200,
                height: 630,
                alt: "Ismoil's Projects Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects – Ismoil",
        description:
            "Browse full-stack projects built by Ismoil using NestJS, Python, Node.js, and more.",
        images: ["/preview/projects.png"],
    },
};

const Projects = () => {
    return (
        <>
            <section className="pt-[150px] pb-[150px] min-[1440px]:pb-[130px]">
                <div className="container">
                    <div className="px-[30px] flex flex-col gap-[49px]">
                        <h2 className="text-[29px] font-bold leading-[83%]">
                            Projects
                        </h2>
                        <div className="grid gap-[50px] lg:grid-cols-2 lg:gap-[20px] xl:gap-[50px]">
                            {ProjectData.map((item) => (
                                <ProjectsUi
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    liveLink={item.liveLink}
                                    githubLink={item.githubLink}
                                    technoIcons={item.technoIcons}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
