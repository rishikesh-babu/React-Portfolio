import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function About() {
    useEffect(() => {
        const isMobile = window.innerWidth < 640;

        // Clean previous reveals
        ScrollReveal().clean('#about-heading, #about-image');

        if (isMobile) {
            const srm = ScrollReveal({
                distance: "20px",
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srm.reveal("#about-heading", { origin: "top" });
            srm.reveal("#about-image", { origin: "bottom" });
        } else {
            const srd = ScrollReveal({
                distance: "50px",
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srd.reveal("#about-heading", { origin: "top" });
        }
    }, []);

    return (
        <div id="about" className="py-10 min-h-[100vh] bg-[#243d61] ">
            <div id="about-heading" className="mb-10 text-center text-4xl text-[#00ffff] font-sans font-bold tracking-[3px] ">
                ABOUT ME
            </div>

            <div className="px-4 max-w-5xl m-auto flex flex-col lg:flex-row-reverse justify-center items-center">
                <img
                    id="about-image"
                    src="/profile2.jpg"
                    alt="photo"
                    className="size-60 object-cover flex justify-center items-center rounded-full border-4 border-[#00ffff] shadow-[0px_0px_100px_#00ffff80]"
                />

                <div className="flex-1 mt-8 px-7 flex flex-col gap-5">
                    <span className="text-3xl text-[#00ffff] font-bold ">Web Developer</span>
                    <div className="text-lg leading-9 tracking-[1px] text-wrap font-['Segoe_UI','Tahoma','Geneva','Verdana','sans-serif']">
                        Hello! My name is <i className="text-[#00ffff] font-bold">Rishikesh Babu</i> , and I am a Full Stack Developer
                        with a keen interest in creating innovative and user-friendly
                        applications. Over the course of my career, I’ve developed a variety
                        of projects, including a validation form, an online calculator, and
                        a comprehensive shopping website. My passion lies in developing
                        solutions that not only meet user needs but also enhance their
                        overall experience. I’m always excited to take on new challenges and
                        continue growing my skills in the ever-evolving world of technology.
                    </div>
                </div>
            </div>
        </div>
    );
}
