import React from "react";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { ArrowRight, DownloadIcon, Github } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6 animate-fade-in text-center pb-[120px]">
                <TypographyH1 className="mx-auto leading-snug text-xl sm:text-4xl lg:text-6xl animate-slide-up">
                    Hi, I am Ismoil - a Full-Stack Developer
                    <span className="block mt-2">
                        specialized in Node.js & React.js
                    </span>
                </TypographyH1>

                <p className="max-w-xl mx-auto text-balance text-sm sm:text-lg lg:text-lg text-gray-600 dark:text-gray-300 animate-fade-in delay-300">
                    I build <span className="font-semibold">Telegram Bots</span>
                    , <span className="font-semibold">Web Applications</span>,
                    and <span className="font-semibold">Admin Dashboards</span>{" "}
                    with modern and responsive UI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                    <Button variant="outline">
                        <Link
                            className="flex items-center gap-2"
                            href={"/cv/Muhiddinov-Ismoil's CV.pdf"}
                        >
                            Download CV <DownloadIcon size={18} />
                        </Link>
                    </Button>
                    <Button
                        variant="default"
                        className="flex items-center gap-2"
                    >
                        <Github size={18} />
                        <a
                            href="https://github.com/muhiddinovismoil"
                            target="_blank"
                        >
                            Github
                        </a>
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        </>
    );
};
