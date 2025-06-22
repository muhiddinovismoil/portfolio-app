import { StackTechnoI } from "@/data";
import Image from "next/image";
import React from "react";

export const StackTechnoUi = ({ id, techIcon, title, alt }: StackTechnoI) => {
    return (
        <div>
            <div
                className={
                    alt === "ReactjsIcon"
                        ? "flex flex-col items-center gap-[18px]"
                        : "flex flex-col items-center gap-[10px]"
                }
            >
                <Image src={techIcon} width={69} height={69} alt={alt} />
                <p className="text-[18px] font-bold">{title}</p>
            </div>
        </div>
    );
};
