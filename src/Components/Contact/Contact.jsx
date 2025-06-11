import React from 'react'

export default function Contact() {
    const social = [
        {
            link: 'https://github.com/rishikesh-babu',
            class: 'fab fa-github'
        },
        {
            link: 'https://linkedin.com/in/rishikesh-babu',
            class: 'fab fa-linkedin'
        },
        {
            link: '',
            class: 'fab fa-whatsapp'
        },
        {
            link: 'https://www.instagram.com/_ri_s_hi_k.e.sh_/',
            class: 'fab fa-instagram'
        },
    ]
    return (
        <div id='contact' className='min-h-screen bg-[#243d61] py-10'>
            <div className='text-4xl text-center text-[#00ffff] font-bold'>
                Contact Me
            </div>

            <div className="py-10 flex justify-center gap-10 text-2xl text-[#00ffff] ">
                {
                    social?.map((item, index) => (
                        <a key={index} href={item?.link} target={item?.link ?? '_blank'} className={`${item?.class} transition-all duration-300 hover:scale-120 hover:text-[#3563ff]`}></a>
                    ))
                }
            </div>

            <form action="" className='p-3 mx-auto max-w-sm sm:max-w-xl flex flex-col gap-5'>
                <input
                    type="text"
                    placeholder='Enter the name'
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <input
                    type="email"
                    placeholder='Enter the email'
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <textarea
                    type="text"
                    placeholder='Enter the message'
                    className="w-full px-4 py-2 text-xl text-white border border-[#00ffff60] rounded-md bg-[#1f3b70] focus:bg-[#172d56] focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
                />
                <button type='submit' className='border w-full py-3 text-black text-xl font-semibold bg-[#00ffff] rounded-lg'>
                    Send Message 
                </button>
            </form>
        </div>
    )
}
