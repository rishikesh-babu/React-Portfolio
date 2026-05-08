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
        <div id="contact" className="min-h-[100dvh] pt-10 pb-32">
            <div className="text-5xl text-center font-bold tracking-tight mb-4">
                <span className="text-accent-cyan">Contact Me</span>
            </div>

            <div className='mb-12 text-center text-text-secondary text-lg max-w-lg mx-auto'>
                Let’s build something amazing together. Reach out for collaborations or just a friendly hello!
            </div>

            <div className="pb-5 pt-5 flex justify-center gap-10  sm:gap-14">
                {social?.map((item, index) => (
                    <a
                        id="social-icons"
                        key={index}
                        href={item?.link}
                        target={item?.link ?? "_blank"}
                        className='relative group flex row justify-center items-center'
                    >
                        <i className={`${item?.class} text-3xl sm:text-4xl text-accent-cyan hover:text-accent-pink transition-all duration-300 hover:scale-125`} />

                        <span className="text-lg sm:text-xl capitalize text-accent-cyan group-hover:text-accent-pink absolute bottom-5 group-hover:bottom-11 sm:group-hover:bottom-14 transition-all duration-300 delay-[50ms] opacity-0 group-hover:opacity-100 ">
                            {item?.name}
                        </span>
                    </a>
                ))}
            </div>

            {/* Form */}
            <div className=' group relative mx-auto max-w-4xl '>
                {/* Glow Effect */}
                <div className='absolute  inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 rounded-2xl' />

                <form className="relative z-10 p-6 sm:p-10 bg-glass-bg border border-glass-border rounded-2xl flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Name" type="text" name="name" />
                        <Input label="Email" type="email" name="email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className=" ml-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            className="px-4 py-3 w-full bg-glass-bg border border-glass-border rounded-xl text-text-primary focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all duration-1000 placeholder:text-text-secondary/30 resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button type="submit" className="group/button w-fit md:w-auto px-10 py-4 bg-glass-bg border border-glass-border rounded-2xl flex items-center justify-center gap-2 ">
                            <span>Send Message</span>
                            <i className="fas fa-paper-plane text-sm transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Input({ label, type, name }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className=" ml-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="px-4 py-3 w-full bg-glass-bg border border-glass-border rounded-xl text-text-primary focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all duration-1000 placeholder:text-text-secondary/30"
                placeholder={`Enter your ${label.toLowerCase()}...`}
            />
        </div>
    )
}