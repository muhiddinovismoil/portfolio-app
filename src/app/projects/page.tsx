import React from "react";
import { ProjectData } from "@/data";
import { ProjectsUi } from "@/components";

const Projects = () => {
    return (
        <>
            <section className="pt-[150px] pb-[150px] min-[1440px]:pb-[130px]">
                <div className="container">
                    <div className="px-[30px] flex flex-col gap-[49px]">
                        <h2 className="text-[29px] font-bold leading-[83%]">
                            Projects
                        </h2>
                        <div className="grid gap-[50px] lg:grid-cols-2 lg:gap-[20px] xl:gap-[50px]">
                            {ProjectData.map((item) => (
                                <ProjectsUi
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    liveLink={item.liveLink}
                                    githubLink={item.githubLink}
                                    technoIcons={item.technoIcons}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
