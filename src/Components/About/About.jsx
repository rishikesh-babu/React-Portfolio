import { Reveal } from "../../Utilities/ScrollAnimation";

export default function About() {
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

            <div className="lg:mx-auto px-2 py-3 sm:p-7 max-w-6xl sm: bg-bg-nav sm:border border-glass-border rounded-3xl flex flex-col lg:flex-row-reverse justify-center items-center">
                {/* <img
                    id="about-image"
                    src="/profile2.jpg"
                    alt="photo"
                    className="size-60 object-cover flex justify-center items-center rounded-full border-4 border-[#00ffff] shadow-[0px_0px_100px_#00ffff80]"
                /> */}

                <div className="text-lg leading-9 tracking-[1px] text-justify font-['Segoe_UI','Tahoma','Geneva','Verdana','sans-serif']">
                    Hi, I'm Rishikesh Babu, a passionate Full Stack Developer skilled in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I enjoy building responsive and user-friendly web applications while continuously expanding my expertise in both frontend and backend development. I also have a growing interest in AI and Machine Learning, exploring how intelligent systems can enhance digital experiences. I'm committed to learning new technologies, strengthening my problem-solving skills, and creating impactful software solutions.
                </div>
            </div>

            <div className="  sm:mt-10 mx-auto max-w-6xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((item, index) => (
                    <Reveal
                        key={index}
                        className="group relative p-5 w-full bg-glass-bg hover:bg-glass-bg/5 backdrop-blur-sm border border-glass-border rounded-2xl transition-all duration-300"
                    >
                        {/* Glow Effect */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 rounded-2xl' />

                        {/* Heading */}
                        <div className="mb-4 font-bold text-xl group-hover:text-accent-cyan">
                            {item.heading}
                        </div>

                        {/* Skills */}
                        <div className="relative z-10 flex flex-wrap gap-3">
                            {item.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="px-4 py-2 text-sm whitespace-nowrap bg-gray-900 border border-glass-border rounded-md cursor-pointer hover:scale-110 active:scale-95 duration-200"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
