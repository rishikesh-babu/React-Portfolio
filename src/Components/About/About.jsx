import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function About() {
    useEffect(() => {
        const isMobile = window.innerWidth < 640;

        ScrollReveal().clean('#about-heading, #about-image, #about-text');

        if (isMobile) {
            const srm = ScrollReveal({
                distance: "20px",
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srm.reveal("#about-heading", { origin: "top" });
            srm.reveal("#about-image", { origin: "bottom" });
            srm.reveal("#about-text", { origin: "bottom" });
        } else {
            const srd = ScrollReveal({
                distance: "50px",
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srd.reveal("#about-heading", { origin: "top" });
            srd.reveal("#about-image", { origin: "right" });
            srd.reveal("#about-text", { origin: "left" });
        }
    }, []);

    return (
        <section id="about" className="py-24 min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-5">
            <h2 id="about-heading" className="text-[2.5rem] font-bold text-center mb-12 relative inline-block mx-auto text-gradient-alt after:content-[''] after:absolute after:-bottom-2.5 after:left-[20%] after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple after:rounded-sm">
                ABOUT ME
            </h2>

            <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-12 mt-8">
                <div id="about-image" className="p-4 rounded-full flex justify-center items-center w-fit mx-auto relative overflow-hidden glass-panel before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-[conic-gradient(transparent,theme(colors.accent.cyan),transparent_30%)] before:animate-[spin_4s_linear_infinite]">
                    <img
                        src="/profile2.jpg"
                        alt="photo"
                        className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full object-cover relative z-10 border-4 border-bg-color"
                    />
                </div>

                <div id="about-text" className="flex-1 p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,240,255,0.1)] glass-panel">
                    <h3 className="text-3xl font-bold text-gradient">Web Developer</h3>
                    <p className="text-[1.1rem] leading-[1.8] text-text-secondary tracking-[0.5px]">
                        Hello! My name is <strong className="text-gradient-alt">Rishikesh Babu</strong>, and I am a Full Stack Developer
                        with a keen interest in creating innovative and user-friendly
                        applications. Over the course of my career, I’ve developed a variety
                        of projects, including a validation form, an online calculator, and
                        a comprehensive shopping website. My passion lies in developing
                        solutions that not only meet user needs but also enhance their
                        overall experience. I’m always excited to take on new challenges and
                        continue growing my skills in the ever-evolving world of technology.
                    </p>
                </div>
            </div>
        </section>
    );
}
