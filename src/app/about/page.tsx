import React from "react";
import { calculateAge } from "@/func";
import { CustomIcon } from "@/components";

const AboutMe = () => {
    const myAge = calculateAge("2007-08-21");
    return (
        <>
            <section className="pt-[175px] px-[35px]">
                <div className="container">
                    <div className="flex flex-col gap-[75px]">
                        <div className="flex flex-col gap-[45px]">
                            <h2 className="text-[29px] font-bold text-center">
                                About Me
                            </h2>
                            <p className="text-[12px] leading-[200%]">
                                Hi, I'm{" "}
                                <span className="font-bold">Ismoil</span>, an{" "}
                                <span className="font-bold">
                                    {myAge}-year-old Full-Stack Developer
                                </span>{" "}
                                with a focus on{" "}
                                <span className="font-bold">Node.js</span> and{" "}
                                <span className="font-bold">React.js</span>. I
                                enjoy building{" "}
                                <span className="font-bold">
                                    fast, scalable
                                </span>
                                , and{" "}
                                <span className="font-bold">user-friendly</span>{" "}
                                web applications. Alongside my full-stack
                                expertise, I also have a solid understanding of{" "}
                                <span className="font-bold">C</span> and{" "}
                                <span className="font-bold">Python</span>, which
                                has helped me strengthen my programming
                                fundamentals. I'm{" "}
                                <span className="font-bold">passionate</span>{" "}
                                about technology, always{" "}
                                <span className="font-bold">
                                    eager to learn
                                </span>
                                , and <span className="font-bold">driven</span>{" "}
                                by the goal of turning ideas into{" "}
                                <span className="font-bold">
                                    impactful digital experiences.
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[95px] h-[90px] bg-[#c1c1c1] rounded-full flex items-center justify-center dark:bg-[#404040]">
                                <CustomIcon
                                    iconDark="/about/dev-tool.dark.svg"
                                    iconLight="/about/dev-tool.light.svg"
                                    w={55}
                                    h={48}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
