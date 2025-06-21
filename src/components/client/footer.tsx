"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const ClientFooter = () => {
    const { theme } = useTheme();
    return (
        <footer className="pb-[26px] md:pb-[32px] ">
            <div className="container">
                <div className="flex flex-col px-[44px] max-w-[876px] mx-auto">
                    <div className="flex justify-between">
                        <h4 className="font-bold text-[14px] md:text-[16px] xl:text-[18px]">
                            Follow me
                        </h4>
                        <div className="flex items-center gap-[11px] xl:gap-[14px]">
                            <Link href={"mailto:mukhiddinovvismoil@gmail.com"}>
                                <Image
                                    width={20}
                                    height={16}
                                    className="xl:w-[24px] xl:h-[20px]"
                                    src={
                                        theme === "light"
                                            ? "/footer/mail.dark.svg"
                                            : "/footer/mail.light.svg"
                                    }
                                    alt="mail icon"
                                />
                            </Link>
                            <Link
                                href={"https://github.com/muhiddinovismoil"}
                                target="_blank"
                            >
                                <Image
                                    width={20}
                                    height={19.52}
                                    className="xl:w-[24px] xl:[h-20px]"
                                    src={
                                        theme === "light"
                                            ? "/footer/github.dark.svg"
                                            : "/footer/github.light.svg"
                                    }
                                    alt="github icon"
                                />
                            </Link>
                            <Link
                                href={
                                    "https://www.linkedin.com/in/ismoil-mukhiddinov-748564340"
                                }
                                target="_blank"
                            >
                                <Image
                                    width={18}
                                    height={18}
                                    className="xl:w-[24px] xl:h-[22px]"
                                    src={
                                        theme === "light"
                                            ? "/footer/linkedin.dark.svg"
                                            : "/footer/linkedin.light.svg"
                                    }
                                    alt="linkedin icon"
                                />
                            </Link>
                        </div>
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "bg-white rounded-[10px] mt-[6.48px] py-[1.5px] md:py-[2px] md:mt-[9px]"
                                : "bg-black rounded-[10px] mt-[6.48px] py-[1.5px] md:py-[2px] md:mt-[9px]"
                        }
                    />
                    <div className="flex justify-center items-center mt-[6px] md:mt-[8px]">
                        <p className="text-[8px] md:text-[9px] xl:text-[11px]">
                            Muhiddinov Ismoil © 2025
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
