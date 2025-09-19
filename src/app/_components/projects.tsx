import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { ExternalLink, Github } from "lucide-react";
import { projects, Status } from "./projects/data";

export function Projects() {
    return (
        <div id="projects" className="pt-[120px] flex flex-col gap-[40px]">
            <div className="flex flex-col justify-center items-center text-center px-4">
                <TypographyH2>Projects</TypographyH2>
                <TypographyP className="max-w-2xl text-md text-muted-foreground">
                    Some of the projects I’ve built to turn ideas into
                    functional digital experiences.
                </TypographyP>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col border rounded-xl shadow-sm hover:shadow-md transition p-4"
                    >
                        <div className="w-full flex justify-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={200}
                                className="rounded-md object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            <div className="flex items-center justify-between">
                                <TypographyP className="font-semibold">
                                    {project.title}
                                </TypographyP>
                                <Badge
                                    className={
                                        project.projectStatus ===
                                        Status.completed
                                            ? "bg-green-500 text-white"
                                            : project.projectStatus ===
                                              Status.in_process
                                            ? "bg-yellow-500 text-black"
                                            : "bg-gray-400 text-white"
                                    }
                                >
                                    {project.projectStatus}
                                </Badge>
                            </div>

                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.badges.map((badge) => (
                                    <Badge key={badge} variant="secondary">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4">
                            {project.liveLink ? (
                                <Button asChild>
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />{" "}
                                        Live
                                    </Link>
                                </Button>
                            ) : (
                                <Button disabled>
                                    <ExternalLink className="w-4 h-4 mr-2" />{" "}
                                    Live
                                </Button>
                            )}

                            <Button asChild variant="outline">
                                <Link href={project.githubLink} target="_blank">
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
