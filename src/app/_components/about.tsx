import { TypographyH2 } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { calculateAge } from "./func";

export const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24 pt-24 sm:pt-32 lg:pt-40 px-6 sm:px-6 lg:px-14 pb-[125px]"
        >
            <div className="flex flex-col gap-6 max-w-2xl text-start lg:text-left">
                <TypographyH2 className="max-[768px]:text-center">
                    About me
                </TypographyH2>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Hi, I'm Ismoil, a {calculateAge("2007-08-21")}-year-old
                    Full-Stack Developer specializing in Node.js and React.js. I
                    love building fast and user-friendly web apps. With
                    experience in C and Python, I’ve strengthened my
                    fundamentals and stay passionate about learning and creating
                    impactful digital solutions.
                </p>

                <div className="space-y-2 text-muted-foreground text-base sm:text-lg">
                    <p>
                        <span className="font-semibold">Full Name:</span> Ismoil
                        Muhiddinov
                    </p>
                    <p>
                        <span className="font-semibold">Age:</span>{" "}
                        {calculateAge("2007-08-21")}
                    </p>
                    <p>
                        <span className="font-semibold">Languages:</span> Uzbek
                        (native), English (intermediate), Russian (basic)
                    </p>
                    <p>
                        <span className="font-semibold">Location:</span>{" "}
                        Tashkent, Uzbekistan
                    </p>
                </div>
            </div>

            <div className="flex-shrink-0">
                <Image
                    src="/my-image.jpg"
                    width={300}
                    height={300}
                    alt="My Image"
                    className="rounded-xl shadow-lg object-cover border-3"
                />
            </div>
        </div>
    );
};
