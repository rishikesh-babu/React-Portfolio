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

            // srm.reveal("#about-heading", { origin: "top" });
            srm.reveal("#about-image", { origin: "bottom" });
        } else {
            const srd = ScrollReveal({
                distance: "50px",
                duration: 1000,
                reset: true,
                delay: 300,
            });

            // srd.reveal("#about-heading", { origin: "top" });
        }
    }, []);

    return (
        <div id="about" className="py-10 min-h-[100vh] bg-[#243d61]s ">
            <div id="about-heading" className="mb-10 text-center text-4xl text-[#00ffff] font-sans font-bold tracking-[3px] ">
                ABOUT ME
            </div>

            <div className="px-4 max-w-5xl m-auto flex flex-col lg:flex-row-reverse justify-center items-center">
                {/* <img
                    id="about-image"
                    src="/profile2.jpg"
                    alt="photo"
                    className="size-60 object-cover flex justify-center items-center rounded-full border-4 border-[#00ffff] shadow-[0px_0px_100px_#00ffff80]"
                /> */}

                <div className="flex-1 mt-8 px-7 flex flex-col gap-5">
                    {/* <span className="text-3xl text-[#00ffff] font-bold ">Web Developer</span> */}
                    <div className="text-lg leading-9 tracking-[1px] text-justify font-['Segoe_UI','Tahoma','Geneva','Verdana','sans-serif']">
                        Hello! My name is <i className="text-[#00ffff] font-bold">Rishikesh Babu </i>
                        and I am a passionate Full Stack Developer with strong skills in modern web technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I enjoy building responsive, efficient, and user-friendly applications while continuously improving my understanding of both frontend and backend development. Alongside web development, I have a growing interest in Artificial Intelligence and Machine Learning, where I am exploring concepts using Python and libraries like NumPy and Pandas.
                        I am particularly interested in how intelligent systems can enhance user experiences and bring more value to applications. I enjoy learning new technologies, improving my problem-solving abilities, and staying updated with the latest trends in both web development and AI. My goal is to combine these skills to create smarter, more impactful digital solutions while continuously evolving as a developer.
                    </div>
                </div>
            </div>
        </div>
    );
}
