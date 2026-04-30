import React from 'react'

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
        <section id="contact" className="py-24 min-h-[90vh] max-w-[1200px] mx-auto px-5">
            <h2 className="text-[2.5rem] font-bold text-center mb-12 relative inline-block mx-auto text-gradient after:content-[''] after:absolute after:-bottom-2.5 after:left-[20%] after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple after:rounded-sm">
                Contact Me
            </h2>

            <div className="flex justify-center gap-10 my-12">
                {social?.map((item, index) => (
                    <a
                        key={index}
                        href={item?.link}
                        target={item?.link ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className='relative flex justify-center items-center no-underline w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(0,240,255,0.1)] hover:border-accent-cyan hover:shadow-[0_10px_20px_rgba(0,240,255,0.2)] group'
                    >
                        <i className={`${item?.class} text-[1.8rem] text-text-primary transition-colors duration-300 group-hover:text-accent-cyan`}></i>
                        <span className="absolute -bottom-[35px] text-[0.9rem] font-semibold text-text-primary bg-[#05050a]/90 py-1 px-3 rounded opacity-0 invisible transition-all duration-300 capitalize whitespace-nowrap border border-white/10 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1">
                            {item?.name}
                        </span>
                    </a>
                ))}
            </div>

            <form
                action=""
                className="max-w-[600px] mx-auto p-10 flex flex-col gap-6 glass-panel"
            >
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Enter the name"
                        className="w-full py-4 px-6 text-[1rem] font-inherit text-text-primary bg-white/5 border border-white/10 rounded-lg outline-none transition-all duration-300 placeholder:text-text-secondary focus:bg-white/10 focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                        required
                    />
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Enter the email"
                        className="w-full py-4 px-6 text-[1rem] font-inherit text-text-primary bg-white/5 border border-white/10 rounded-lg outline-none transition-all duration-300 placeholder:text-text-secondary focus:bg-white/10 focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                        required
                    />
                </div>
                <div className="w-full">
                    <textarea
                        placeholder="Enter the message"
                        className="w-full py-4 px-6 text-[1rem] font-inherit text-text-primary bg-white/5 border border-white/10 rounded-lg outline-none transition-all duration-300 placeholder:text-text-secondary focus:bg-white/10 focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] min-h-[150px] resize-y"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn-primary w-full mt-4 text-[1.2rem] !p-4"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
