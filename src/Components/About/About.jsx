import React from "react";

export default function About() {
    return (
        <div id="about" className="py-10 bg-[#243d61] ">
            <div className="mb-10 text-center text-4xl text-[#00ffff] font-sans font-bold tracking-[3px] ">
                ABOUT ME
            </div>

            <div className="flex flex-col justify-center items-center">
                <img
                    src="/profile2.jpg"
                    alt="photo"
                    className="size-60 object-cover border-3 border-[#00ffff] rounded-full "
                />

                <div className="mt-8 px-7 flex flex-col gap-5">
                    <span className="text-3xl text-[#00ffff] font-bold ">Web Developer</span>
                    <div className="text-lg leading-9 tracking-[1px] font-['Segoe_UI','Tahoma','Geneva','Verdana','sans-serif']">
                        Hello! My name is Rishikesh Babu, and I am a Full Stack Developer
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
