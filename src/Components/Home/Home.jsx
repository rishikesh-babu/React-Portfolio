import React, { useEffect } from 'react'
import './Home.css'
import { srd, srm } from '../../ScrolReveal/useScrolReveal';

export default function Home() {
    useEffect(() => {
        srm.reveal('#home-image', { origin: 'top' });
        srm.reveal('#home-buttons', { origin: 'bottom' });
        srm.reveal('#home-first', { origin: 'top' });
        srm.reveal('#home-third', { origin: 'bottom' });

        srd.reveal('#home-image', { origin: 'left' });
        srd.reveal('#home-first, #home-third', { origin: 'left' });
        srd.reveal('#home-second', { origin: 'right' });
        srd.reveal('#home-buttons', { origin: 'bottom' });
    }, []);

    return (
        <div id='home' className='min-h-[90vh] bg-[#172342] flex flex-col sm:flex-row justify-evenly items-center'>
            <img id='home-image' src="/profile1.jpg" alt="profile" className='size-64 border-3 border-[#00ffff] rounded-full object-cover shadow-[0px_0px_100px_#00ffff80] ' />
            <div className='flex flex-col gap-9 sm:gap-14'>
                <div className='flex flex-col gap-2 text-nowrap'>
                    <div id='home-first' className='text-xl sm:text-2xl text-center'>Hello It's me</div>
                    <div id='home-second' className='text-center text-3xl sm:text-4xl text-[#00ffff] font-bold '>Rishikesh Babu</div>
                    <div id='home-third' className='text-xl sm:text-2xl text-center '>And I'm a <span id='home-multi-text' className='text-[#00ffff] text-xl sm:text-2xl'>Web Developer</span></div>
                </div>
                <div id='home-buttons' className='flex justify-around gap-4 select-none'>
                    <button className='px-5 py-2 text-black text-lg sm:text-2xl text-nowrap font-bold rounded-xl bg-gradient-to-r from-[#00ffff] to-[#00ff99] shadow-[0px_0px_10px_#00ffff] transition-all duration-300 hover:shadow-[0px_0px_20px_#00ffff] hover:scale-105 '>
                        Download CV
                    </button>
                    <button className='px-5 py-2 text-white text-lg sm:text-2xl text-nowrap font-bold rounded-xl bg-gradient-to-r from-[#ff00cc] to-[#3333ff] shadow-[0px_0px_10px_#00ffff] transition-all duration-300 hover:shadow-[0px_0px_20px_#00ffff] hover:scale-105 '>
                        Contact Info
                    </button>
                </div>
            </div>
        </div>
    )
}
