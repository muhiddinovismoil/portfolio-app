"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const ClientFooter = () => {
    const { theme } = useTheme();
    return (
        <footer className="pb-[26px]">
            <div className="container">
                <div className="flex flex-col px-[44px]">
                    <div className="flex justify-between">
                        <h4 className="font-bold text-[14px]">Follow me</h4>
                        <div className="flex items-center gap-[11px]">
                            <Link href={""} target="_blank">
                                <Image
                                    width={20}
                                    height={16}
                                    className=""
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
                                    className=""
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
                                    className=""
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
                                ? "bg-white rounded-[10px] mt-[6.48px] mb-[6px] py-[1.5px]"
                                : "bg-black rounded-[10px] mt-[6.48px] mb-[6px] py-[1.5px]"
                        }
                    />
                    <div className="flex justify-center items-center">
                        <p className="text-[8px]">Muhiddinov Ismoil © 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
