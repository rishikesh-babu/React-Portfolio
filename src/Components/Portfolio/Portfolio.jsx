import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

export default function Portfolio() {
    useEffect(() => {
        const isMobile = window.innerWidth < 640;

        ScrollReveal().clean('#portfolio-heading, .portfolio-card');

        const sr = ScrollReveal({
            distance: isMobile ? '20px' : '40px',
            duration: 1000,
            reset: true,
            delay: 300,
        });

        sr.reveal('#portfolio-heading', { origin: 'top' })
        sr.reveal('.portfolio-card', { origin: 'bottom', interval: 100 })
    }, [])

    const projects = [
        {
            image: '/food-express.png',
            name: 'Food Express',
            github: 'https://github.com/rishikesh-babu/Food-Ordering-Website.git',
            live: 'https://food-express-frontend-yyuz.onrender.com/'
        },
        {
            image: '/weather-app.png',
            name: 'Weather App',
            github: 'https://github.com/rishikesh-babu/Weather-App-React.git',
            live: 'https://weather-app-react-jclg.onrender.com/'
        },
        {
            image: '/tic-tac-toe.png',
            name: 'Tic Tac Toe Game',
            github: 'https://github.com/rishikesh-babu/Tic-Tac-Toe.git',
            live: 'https://tic-tac-toe-59kn.onrender.com/'
        },
        {
            image: '/todo.png',
            name: 'To Do App',
            github: 'https://github.com/rishikesh-babu/Todo-List.git',
            live: 'https://to-do-1cf2.onrender.com/'
        },
        {
            image: 'login-demo.png', 
            name: 'Login Demo', 
            github: 'https://github.com/rishikesh-babu/Firebase-Sample.git', 
            live: 'https://firebase-login-o2pi.onrender.com/login'
        }
    ]
    return (
        <section id='portfolio' className='py-24 min-h-screen max-w-[1200px] mx-auto px-5'>
            <h2 id='portfolio-heading' className='text-[2.5rem] font-bold text-center mb-12 relative inline-block mx-auto text-gradient after:content-[""] after:absolute after:-bottom-2.5 after:left-[20%] after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple after:rounded-sm'>
                Latest Projects
            </h2>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 py-4'>
                {projects?.map((item, index) => (
                    <div key={index} className='portfolio-card overflow-hidden transition-transform duration-300 flex flex-col group hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,240,255,0.15)] glass-panel !p-0'>
                        <div className='relative w-full h-[220px] overflow-hidden border-b border-glass-border'>
                            <img src={item?.image} alt={item?.name} className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110' />
                            <div className='absolute inset-0 w-full h-full bg-[#05050a]/85 backdrop-blur-[4px] flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                <div className='flex gap-4 translate-y-5 transition-transform duration-300 group-hover:translate-y-0'>
                                    <a
                                        href={item?.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-2 px-4 rounded-full text-[0.9rem] font-semibold no-underline text-white transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item?.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-2 px-4 rounded-full text-[0.9rem] font-semibold no-underline text-white transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 text-center bg-black/20'>
                            <h3 className='text-[1.3rem] font-bold text-text-primary'>{item?.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
