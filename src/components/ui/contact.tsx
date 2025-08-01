import React from "react";
import Link from "next/link";
import { CustomIcon } from "./icon-dark-light";
import { ContactI } from "@/data";

export const ContactsUi = ({
    id,
    link,
    title,
    iconView,
    iconContact,
    iconViewDark,
    iconContactDark,
}: ContactI) => {
    return (
        <div className="flex items-center min-[850px]:w-[768px] justify-between sm:border sm:border-[#666666] sm:rounded-[26px] sm:px-[10px] sm:py-[15px] sm:hover:border-2  md:py-[20px] md:px-[15px] lg:py-[20px] lg:px-[20px]">
            <div className="flex items-center gap-[10px] min-[375px]:gap-[25px] lg:gap-[70px]">
                <div className="bg-[#cecece] dark:bg-[#404040] w-[65px] h-[60px] min-[375px]:w-[85px] min-[375px]:h-[80px] rounded-[28px] flex items-center justify-center">
                    <CustomIcon
                        iconDark={iconContactDark}
                        iconLight={iconContact}
                        h={40}
                        w={41}
                    />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[20px] font-bold leading-[120%] md:text-[22px] lg:text-[29px]">
                        {title}
                    </h3>
                    <Link
                        className="underline leading-[42%] text-[10px] min-[375px]:text-[12px] tracking-[0.03em] font-bold md:text-[14px] lg:[16px]"
                        href={link}
                    >
                        {!link.includes("https://t.me")
                            ? link?.split(":")[1]
                            : "@" + link.split("https://t.me/")[1]}
                    </Link>
                </div>
            </div>
            <div className="hidden sm:flex">
                <Link href={link}>
                    <CustomIcon
                        iconDark={iconViewDark}
                        iconLight={iconView}
                        w={34}
                        h={34}
                    />
                </Link>
            </div>
        </div>
    );
};
