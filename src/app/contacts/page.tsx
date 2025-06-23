import React from "react";
import { ContactsData } from "@/data";
import { ContactsUi } from "@/components";

const Contacts = () => {
    return (
        <>
            <section className="pt-[150px] pb-[200px] xl:pb-[120px] xl:pt-[170px]">
                <div className="container">
                    <div className="px-[30px]">
                        <h2 className="text-[29px] font-bold leading-[83%] md:text-center lg:text-[32px] xl:text-[40px]">
                            Contacts
                        </h2>
                        <div className="flex flex-col pt-[70px] gap-[150px] min-[850px]:items-center w-full md:gap-[100px] lg:gap-[80px] xl:gap-[70px]">
                            {ContactsData.map((item) => (
                                <ContactsUi
                                    id={item.id}
                                    key={item.id}
                                    link={item.link}
                                    title={item.title}
                                    iconView={item.iconView}
                                    iconContact={item.iconContact}
                                    iconViewDark={item.iconViewDark}
                                    iconContactDark={item.iconContactDark}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
