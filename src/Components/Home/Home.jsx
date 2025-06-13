import React, { useEffect } from 'react'
import './Home.css'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';


export default function Home() {
    useEffect(() => {
        const handleReveal = () => {
            const isMobile = window.innerWidth < 640;

            ScrollReveal().clean('#home-image-container, #home-buttons, #home-first, #home-second, #home-third');

            if (isMobile) {
                // const srm = ScrollReveal({
                //     distance: "20px",
                //     duration: 1000,
                //     reset: true,
                //     delay: 300,
                // });

                // srm.reveal("#home-image-container", { origin: "top" });
                // srm.reveal("#home-buttons", { origin: "bottom" });
                // srm.reveal("#home-first", { origin: "top" });
                // srm.reveal("#home-third", { origin: "bottom" });
            } else {
                const srd = ScrollReveal({
                    distance: "50px",
                    duration: 1000,
                    reset: true,
                    delay: 300,
                });
    
                srd.reveal("#home-image-container", { origin: "left" });
                srd.reveal("#home-buttons", { origin: "bottom" });
                srd.reveal("#home-first, #home-third", { origin: "left" });
                srd.reveal("#home-second", { origin: "right" });
            }
        };

        handleReveal(); // run on mount

        // Optional: run on screen resize
        window.addEventListener('resize', handleReveal);
        return () => window.removeEventListener('resize', handleReveal);
    }, []);

    useEffect(() => {
        const typed = new Typed('#home-multi-text', {
            strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        })
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <div id='home' className='min-h-[90vh] bg-[#172342] flex flex-col sm:flex-row justify-evenly items-center'>
            <div id="home-image-container">
                <img id='home-image' src="/profile1.jpg" alt="profile" className='size-64 border-3 border-[#00ffff] rounded-full object-cover shadow-[0px_0px_100px_#00ffff80] ' />
            </div>
            <div className='flex flex-col gap-9 sm:gap-14'>
                <div className='flex flex-col gap-2 text-nowrap'>
                    <div id='home-first' className='text-xl sm:text-2xl text-center'>Hello It's me</div>
                    <div id='home-second' className='w-fit mx-auto text-center text-3xl sm:text-4xl text-[#00ffff] font-bold '>Rishikesh Babu</div>
                    <div id='home-third' className='text-xl sm:text-2xl text-center '>And I'm a <span id='home-multi-text' className='text-[#00ffff] text-xl font-extrabold sm:text-2xl'></span></div>
                </div>
                <div id='home-buttons' className='flex justify-around gap-4 select-none'>
                    <button className='px-5 py-2 text-black text-lg sm:text-2xl text-nowrap font-bold rounded-xl bg-gradient-to-r from-[#00ffff] to-[#00ff99] shadow-[0px_0px_10px_#00ffff] transition-all duration-300 hover:shadow-[0px_0px_20px_#00ffff] hover:scale-105 '>
                        Download CV
                    </button>
                    <a href='#contact' className='px-5 py-2 text-white text-lg sm:text-2xl text-nowrap font-bold rounded-xl bg-gradient-to-r from-[#ff00cc] to-[#3333ff] shadow-[0px_0px_10px_#00ffff] transition-all duration-300 hover:shadow-[0px_0px_20px_#00ffff] hover:scale-105 '>
                        Contact Info
                    </a>
                </div>
            </div>
        </div>
    )
}
