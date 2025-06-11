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
        <div className='p-3 w-full fixed bg-[#16223f] flex justify-between'>
            <span className=' text-4xl select-none'>
                Portfolio
            </span>

            <button onClick={handleMenu} className='select-none cursor-pointer'>
                {openMenu ? closeIcon : menuIcon}
            </button>

            <section className={`px-5 py-3 text-2xl bg-[#1d3160] flex flex-col gap-3 absolute top-16 right-0 transition-all duration-300 ease-in-out  ${openMenu ? ' opacity-100' : 'opacity-0'}`}>
                {menu?.map((item, index) => (
                    <a href={item?.link} key={index} onClick={handleMenu} className='  cursor-pointer'>
                        {item?.value}
                    </a>
                ))}
            </section>


        </div>
    )
}

const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>