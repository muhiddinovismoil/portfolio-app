import { StackTechnoI } from "@/data";
import Image from "next/image";
import React from "react";

export const StackTechnoUi = ({ id, techIcon, title, alt }: StackTechnoI) => {
    return (
        <div
            className={
                alt === "ReactjsIcon"
                    ? "flex flex-col items-center gap-[18px] xl:gap-[23px]"
                    : "flex flex-col items-center gap-[10px] xl:gap-[15px]"
            }
        >
            <Image
                src={techIcon}
                width={69}
                height={69}
                alt={alt}
                className="md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px] xl:w-[110px] xl:h-[110px]"
            />
            <p className="text-[18px] font-bold md:text-[20px] lg:text-[22px] xl:text-[26px]">
                {title}
            </p>
        </div>
    );
};
