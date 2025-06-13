import React from 'react'
import './Contact.css'

export default function Contact() {
    const social = [
        {
            link: 'https://github.com/rishikesh-babu',
            class: 'fab fa-github',
            name: 'github',
        },
        {
            link: 'https://linkedin.com/in/rishikesh-babu',
            class: 'fab fa-linkedin',
            name: 'linkedin',
        },
        {
            link: '',
            class: 'fab fa-whatsapp',
            name: 'whatsapp',
        },
        {
            link: 'https://www.instagram.com/_ri_s_hi_k.e.sh_/',
            class: 'fab fa-instagram',
            name: 'instagram',
        },
    ]

    return (
        <div id="contact" className="min-h-[100dvh] bg-[#243d61] py-10">
            <div className="text-4xl text-center text-[#00ffff] font-bold">
                Contact Me
            </div>

            <div className="pb-5 pt-20 flex justify-center gap-10  sm:gap-14">
                {social?.map((item, index) => (
                    <a
                        id="social-icons"
                        key={index}
                        href={item?.link}
                        target={item?.link ?? "_blank"}
                        className='relative group flex row justify-center items-center'
                    >
                        <i
                            className={`${item?.class} text-3xl sm:text-4xl text-[#00ffff] hover:text-[#3563ff] transition-all duration-300 hover:scale-125`}
                        ></i>
                        <span className="text-lg sm:text-xl capitalize text-[#00ffff] group-hover:text-lime-300 absolute bottom-5 group-hover:bottom-11 sm:group-hover:bottom-14 transition-all duration-300 delay-[50ms] opacity-0 group-hover:opacity-100 ">
                            {item?.name}
                        </span>
                    </a>
                ))}
            </div>

            <form
                action=""
                className="p-3 mx-auto max-w-sm sm:max-w-xl flex flex-col gap-5"
            >
                <input
                    type="text"
                    placeholder="Enter the name"
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <input
                    type="email"
                    placeholder="Enter the email"
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <textarea
                    type="text"
                    placeholder="Enter the message"
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <button
                    type="submit"
                    className="border w-full py-3 text-black text-xl font-semibold bg-[#00ffff] rounded-lg"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
