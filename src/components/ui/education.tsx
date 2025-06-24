import React from "react";
import Link from "next/link";
import { EducationI } from "@/data";

export const EductaionUi = ({
    id,
    link,
    title,
    endDate,
    subTitle,
    startDate,
}: EducationI) => {
    return (
        <div className="flex items-center justify-between border rounded-[21px] py-[18px] pl-[10px] pr-[10px] min-[375px]:px-[15px] sm:px-[20px] sm:py-[22px] lg:px-[30px]">
            <div className="flex flex-col gap-[62px] sm:gap-[42px] lg:gap-[38px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[20px] font-bold sm:text-[22px] lg:text-[24px]">
                        {title}
                    </h3>
                    <h4 className="text-[14px] font-medium text-[#767676] dark:text-[#b2b2b2] sm:text-[16px] lg:text-[18px]">
                        {subTitle}
                    </h4>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="text-[14px] font-medium sm:text-[16px] lg:text-[18px]">
                        Date:
                    </p>
                    <p className="text-[12px] font-medium text-[#767676] dark:text-[#b2b2b2] sm:text-[14px] lg:text-[16px]">
                        {startDate} — {endDate}
                    </p>
                </div>
            </div>
            <div className="pr-[20px] sm:pr-0">
                <Link
                    href={link}
                    target="_blank"
                    className="text-[16px] sm:text-[16px] lg:text-[18px] flex gap-[5px]"
                >
                    View <span className="hidden sm:flex">Certificate</span>
                </Link>
            </div>
        </div>
    );
};
