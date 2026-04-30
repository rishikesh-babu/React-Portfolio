import React, { useState } from 'react'

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
        <div className='flex justify-between items-center py-4 px-5 max-w-[1200px] mx-auto'>
            <span className='text-3xl font-extrabold select-none tracking-wide text-gradient'>
                Portfolio
            </span>

            <button onClick={handleMenu} className='sm:hidden bg-transparent border-none cursor-pointer text-text-primary'>
                {openMenu ? closeIcon : menuIcon}
            </button>

            <nav id='menu' className={`
                absolute sm:static top-full right-0 w-full sm:w-auto
                bg-[#0a0a0f]/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none
                p-6 sm:p-0 border-b border-white/10 sm:border-none
                transition-all duration-300 ease-in-out
                ${openMenu ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}
                sm:opacity-100 sm:pointer-events-auto sm:translate-y-0
            `}>
                <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8'>
                    {menu?.map((item, index) => (
                        <a href={item?.link} key={index} onClick={handleMenu} className='
                            text-[1.1rem] font-medium text-text-primary no-underline relative transition-colors duration-300 
                            hover:text-accent-cyan 
                            after:content-[""] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 
                            after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple 
                            after:transition-all after:duration-300 hover:after:w-full rounded-sm
                        '>
                            {item?.value}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}

const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>