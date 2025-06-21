import { CustomIcon } from "@/components/ui/icon-dark-light";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="pt-[151px] pb-[257px]">
                <div className="container">
                    <div className="flex flex-col px-[35px] items-center gap-[44px]">
                        <div>
                            <Image
                                src={"/hero/my-image.svg"}
                                width={175}
                                height={169}
                                alt="my image"
                            />
                        </div>
                        <div className="flex flex-col gap-[54px]">
                            <div className="flex flex-col gap-[23px] text-center">
                                <h1 className="text-[31px] font-bold tracking-[0.04em]">
                                    Hi, I'm Ismoil
                                </h1>
                                <p className="text-[19px] leading-[142%] tracking-[0.03em]">
                                    During{" "}
                                    <span className="font-bold">
                                        the past year
                                    </span>
                                    , I worked as a{" "}
                                    <span className="font-bold">
                                        Full-Stack Developer
                                    </span>
                                    . In that time, I was involved not only in
                                    writing code but also in working with
                                    different teams to plan new features and
                                    build web applications.
                                </p>
                            </div>
                            <div className="flex flex-col gap-[23px] items-center">
                                <Link
                                    href={""}
                                    download={true}
                                    className="pl-[45px] font-bold leading-[150%] pr-[41px] py-[17px] flex items-center gap-[12px] border border-white bg-black rounded-[8px] text-white"
                                >
                                    <img
                                        className="w-[20px] h-[20px] my-[2px]"
                                        src="/button-icons/download.icon.svg"
                                        alt="download icon"
                                    />
                                    Download CV
                                </Link>
                                <Link
                                    href={"/projects"}
                                    className="flex py-[17px] gap-[12px] pl-[49px] pr-[45px] items-center leading-[150%] font-bold bg-white rounded-[8px] text-[#1d1b20] border"
                                >
                                    <img
                                        className="w-[20px] h-[20px] my-[2px]"
                                        src="/button-icons/projects.btn.icon.svg"
                                        alt="download icon"
                                    />
                                    See Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
