import { EductaionUi } from "@/components/ui/education";
import { Education } from "@/data";
import Link from "next/link";
import React from "react";

const Eduaction = () => {
    return (
        <>
            <section className="pt-[150px] pb-[100px]">
                <div className="container">
                    <div className="px-[30px] flex flex-col gap-[55px]">
                        <h2 className="text-[29px] font-bold">Education</h2>
                        <div className="flex flex-col gap-[45px]">
                            {Education.map((item) => (
                                <EductaionUi
                                    id={item.id}
                                    key={item.id}
                                    link={item.link}
                                    title={item.title}
                                    endDate={item.endDate}
                                    subTitle={item.subTitle}
                                    startDate={item.startDate}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Eduaction;
