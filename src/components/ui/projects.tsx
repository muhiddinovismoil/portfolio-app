import Link from "next/link";
import React from "react";
import { ProjectI } from "@/data";
import { CustomIcon } from "./icon-dark-light";

export const ProjectsUi = ({
    id,
    title,
    liveLink,
    githubLink,
    technoIcons,
    description,
}: ProjectI) => {
    return (
        <div className="flex flex-col border rounded-[21px] gap-[15px] py-[16px] px-[15px] sm:py-[20px] sm:px-[18px]">
            <div className="flex justify-between items-center">
                <h3 className="text-[19px] font-medium leading-[126%] sm:text-[22px]">
                    {title}
                </h3>
                <div className="flex gap-[4px] sm:gap-[8px]">
                    {technoIcons.map((item, index) => (
                        <img
                            key={index}
                            className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                            src={item}
                            alt="tech"
                        />
                    ))}
                </div>
            </div>
            <p className="text-[9px] leading-[167%] min-[375px]:text-[12px] sm:text-[14px]">
                {description}
            </p>
            <div className="flex justify-between pt-[10px] px-[10px]">
                <Link
                    className={`flex items-center gap-[5px] text-[12px] leading-[200%] font-medium sm:text-[14px] sm:gap-[8px] ${
                        liveLink === "disabled"
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    href={liveLink !== "disabled" ? liveLink : "#"}
                >
                    <CustomIcon
                        iconDark={"/project/livedemo.dark.svg"}
                        iconLight={"/project/livedemo.light.svg"}
                        className="sm:w-[20px] sm:h-[20px]"
                        h={18}
                        w={18}
                    />
                    Live Demo
                </Link>
                <Link
                    className="flex items-center gap-[5px] text-[12px] leading-[200%] font-medium sm:text-[14px] sm:gap-[8px]"
                    href={githubLink}
                >
                    <CustomIcon
                        iconDark={"/footer/github.light.svg"}
                        iconLight={"/footer/github.dark.svg"}
                        className="sm:w-[20px] sm:h-[20px]"
                        h={18}
                        w={18}
                    />
                    GitHub
                </Link>
            </div>
        </div>
    );
};
