import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="pt-[151px] pb-[257px] lg:pt-[200px] lg:pb-[140px] min-[1440px]:pt-[220px] min-[1440px]:pb-[150px]">
                <div className="container">
                    <div className="flex flex-col px-[35px] items-center gap-[44px] lg:flex-row lg:justify-around xl:gap-0 min-[1440px]:pt-[40px]">
                        <div className="lg:w-[400px] xl:w-[412px] xl:h-[394px]">
                            <Image
                                src={"/hero/my-image.svg"}
                                width={175}
                                height={169}
                                alt="my image"
                                className="lg:w-[400px] lg:h-[350px] xl:w-full xl:h-full"
                            />
                        </div>
                        <div className="flex flex-col gap-[54px] lg:w-[450px] xl:w-[535px] min-[1440px]:gap-[102px]">
                            <div className="flex flex-col gap-[23px] text-center lg:text-start min-[1440px]:w-[617px]">
                                <h1 className="text-[31px] font-bold tracking-[0.04em] xl:text-[42px]">
                                    Hi, I'm Ismoil
                                </h1>
                                <p className="text-[19px] leading-[142%] tracking-[0.03em] xl:text-[21px] xl:leading-[183%] xl:tracking-[0.03em]">
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
                            <div className="flex flex-col gap-[23px] items-center lg:flex-row">
                                <a
                                    href="/cv/MuhiddinovIsmoil-Resume.pdf"
                                    download
                                    className="pl-[45px] font-bold leading-[150%] pr-[41px] py-[17px] flex items-center gap-[12px] border border-white bg-black rounded-[8px] text-white"
                                >
                                    <img
                                        className="w-[20px] h-[20px] my-[2px]"
                                        src="/button-icons/download.icon.svg"
                                        alt="download icon"
                                    />
                                    <span className="lg:text-[12px] xl:text-[16px]">
                                        Download CV
                                    </span>
                                </a>
                                <Link
                                    href={"/projects"}
                                    className="flex py-[17px] gap-[12px] pl-[49px] pr-[45px] items-center leading-[150%] font-bold bg-white rounded-[8px] text-[#1d1b20] border"
                                >
                                    <img
                                        className="w-[20px] h-[20px] my-[2px]"
                                        src="/button-icons/projects.btn.icon.svg"
                                        alt="download icon"
                                    />
                                    <span className="lg:text-[12px] xl:text-[16px]">
                                        See Projects
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
