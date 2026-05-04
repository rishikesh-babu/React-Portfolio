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


    const skills = [
        {
            heading: "Frontend",
            skills: [
                "React.js",
                "Tailwind CSS",
                "HTML5 & CSS3",
                "Redux Toolkit"
            ]
        },
        {
            heading: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "REST APIs",
            ]
        },
        {
            heading: "AI / Machine Learning",
            skills: [
                "Python",
                "NumPy",
                "Pandas",
                "Scikit-learn",
                "Tensorflow",
                "OpenCV",
                "MediaPipe"
            ]
        },
        {
            heading: "Tools & Technologies",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Supabase",
            ]
        },
        {
            heading: "Programming Language",
            skills: [
                "JavaScript",
                "Python",
                "C"
            ]
        }
    ];

    return (
        <div id="about" className="py-10 min-h-[100vh] bg-[#243d61]s ">
            <div id="about-heading" className="mb-10 text-center text-4xl text-accent-cyan font-sans font-bold tracking-[3px] ">
                ABOUT ME
            </div>

            <div className="sm:mx-3 md:mx-5 lg:mx-auto px-2 py-3 sm:p-7 max-w-6xl sm: bg-bg-nav sm:border border-glass-border rounded-3xl flex flex-col lg:flex-row-reverse justify-center items-center">
                {/* <img
                    id="about-image"
                    src="/profile2.jpg"
                    alt="photo"
                    className="size-60 object-cover flex justify-center items-center rounded-full border-4 border-[#00ffff] shadow-[0px_0px_100px_#00ffff80]"
                /> */}

                <div className="text-lg leading-9 tracking-[1px] text-justify font-['Segoe_UI','Tahoma','Geneva','Verdana','sans-serif']">
                    Hello! My name is <i className="text-accent-cyan font-bold">Rishikesh Babu </i>
                    and I am a passionate Full Stack Developer with strong skills in modern web technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I enjoy building responsive, efficient, and user-friendly applications while continuously improving my understanding of both frontend and backend development.
                    Alongside web development, I have a growing interest in Artificial Intelligence and Machine Learning
                    I am particularly interested in how intelligent systems can enhance user experiences and bring more value to applications.
                    I enjoy learning new technologies, improving my problem-solving abilities, and staying updated with the latest technologies.
                    My goal is to combine these skills to create smarter, more impactful digital solutions while continuously evolving as a developer.
                </div>
            </div>

            <div className="mt-5 sm:mt-10 mx-auto p-2  max-w-6xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 w-full bg-glass-bg border border-glass-border rounded-2xl hover:shadow-cyan-glow-sm transition-all duration-300"
                    >
                        <div className="mb-4 font-bold text-xl">
                            {item.heading}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {item.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="px-4 py-2 text-sm whitespace-nowrap bg-gray-900 border border-glass-border rounded-md"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
