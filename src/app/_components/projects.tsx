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
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="flex flex-col border rounded-xl shadow-sm hover:shadow-md transition p-4"
                    >
                        <div className="w-full flex justify-center overflow-hidden rounded-md bg-muted aspect-video">
                            <Image
                                src={project.image}
                                alt={`${project.title} - ${project.description}`}
                                width={400}
                                height={200}
                                priority={index === 0 || index === 1}
                                loading={index < 2 ? "eager" : "lazy"}
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect fill='%23f0f0f0' width='400' height='200'/%3E%3C/svg%3E"
                                className="rounded-md object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                        rel="noopener noreferrer"
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
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
