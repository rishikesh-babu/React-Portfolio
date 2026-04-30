import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';


export default function Home() {
    useEffect(() => {
        const handleReveal = () => {
            const isMobile = window.innerWidth < 640;

            ScrollReveal().clean('#home-image-container, #home-buttons, #home-first, #home-second, #home-third');

            if (isMobile) {
                // ...
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
            typed.destroy();
        };
    }, [])

    return (
        <section id='home' className='min-h-[90vh] flex flex-col md:flex-row-reverse justify-center md:justify-evenly items-center gap-16 md:gap-8 py-16 max-w-[1200px] mx-auto px-5'>
            <div id="home-image-container" className="relative z-10 before:absolute before:-inset-[10px] before:bg-gradient-to-br before:from-accent-cyan before:to-accent-purple before:rounded-full before:-z-10 before:blur-[20px] before:opacity-70 before:animate-pulse-glow">
                <img id='home-image' src="/profile1.jpg" alt="profile" className='w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full object-cover border-[3px] border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.3)]' />
            </div>
            <div className='flex flex-col gap-10 z-10 max-w-[600px]'>
                <div className='flex flex-col gap-3 text-center md:text-left'>
                    <div id='home-first' className='text-2xl font-medium text-text-secondary'>Hello It's me</div>
                    <div id='home-second' className='text-5xl md:text-[4.5rem] font-extrabold leading-tight text-gradient'>Rishikesh Babu</div>
                    <div id='home-third' className='text-2xl font-semibold'>
                        And I'm a <span id='home-multi-text' className='text-gradient-alt'></span>
                    </div>
                </div>
                <div id='home-buttons' className='flex justify-center md:justify-start gap-6'>
                    <button className='btn-primary'>
                        Download CV
                    </button>
                    <a href='#contact' className='btn-secondary'>
                        Contact Info
                    </a>
                </div>
            </div>
        </section>
    )
}

