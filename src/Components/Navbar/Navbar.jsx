import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    function handleMenu() {
        setOpenMenu(!openMenu)
    }

    const menu = [
        { value: "Home", link: "#home" },
        { value: "About", link: "#about", },
        { value: "Portfolio", link: "#portfolio", },
        { value: "Contact", link: "#contact", },
    ];

    return (
        <div className='p-3 w-full fixed bg-[#14193f] flex justify-between items-center'>
            <span className=' text-4xl select-none'>
                Portfolio
            </span>

            <button onClick={handleMenu} className={`select-none cursor-pointer sm:hidden`}>
                {openMenu ? closeIcon : menuIcon}
            </button>

            <section id='menu' className={`px-5 py-3 text-2xl rounded-xl bg-[#1d3160] sm:bg-transparent absolute sm:relative top-16 sm:top-0 right-0 transition-all duration-300 ease-in-out  ${openMenu ? 'opacity-85 pointer-events-auto' : 'opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto'}`}>
                <div className=' flex flex-col sm:flex-row justify-center gap-3'>
                    {menu?.map((item, index) => (
                        <a href={item?.link} key={index} onClick={handleMenu} className='cursor-pointer relative'>
                            {item?.value}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}

const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>