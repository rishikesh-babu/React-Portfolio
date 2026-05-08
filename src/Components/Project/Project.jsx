import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

export default function Project() {
    useEffect(() => {
        const isMobile = window.innerWidth < 640;

        // Clean previous reveals
        ScrollReveal().clean('#portfolio-heading, #portfolio-project');

        if (isMobile) {
            const srm = ScrollReveal({
                distance: '20px',
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srm.reveal('#portfolio-heading', { origin: 'top' })
            srm.reveal('#portfolio-project', { origin: 'bottom' })
        } else {
            const srd = ScrollReveal({
                distance: '40px',
                duration: 1000,
                reset: true,
                delay: 300,
            });

            srd.reveal('#portfolio-heading', { origin: 'top' })
            srd.reveal('#portfolio-project', { origin: 'bottom' })
        }
    }, [])

    const projects = [
        {
            image: '/food-express.png',
            name: 'Food Express',
            description: 'Full-stack food ordering platform with online payments and admin management.',
            github: 'https://github.com/rishikesh-babu/Food-Ordering-Website.git',
            live: 'https://food-express-frontend-yyuz.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
        },
        {
            image: '/weather-app.png',
            name: 'Weather App',
            description: 'Real-time weather forecasting app with responsive and clean UI.',
            github: 'https://github.com/rishikesh-babu/Weather-App-React.git',
            live: 'https://weather-app-react-jclg.onrender.com/',
            stack: ['React', 'CSS', 'Weather API']
        },
        {
            image: '/tic-tac-toe.png',
            name: 'Tic Tac Toe Game',
            description: 'Interactive multiplayer Tic Tac Toe game built with React.',
            github: 'https://github.com/rishikesh-babu/Tic-Tac-Toe.git',
            live: 'https://tic-tac-toe-59kn.onrender.com/',
            stack: ['React', 'JavaScript', 'CSS']
        },
        {
            image: '/todo.png',
            name: 'To Do App',
            description: 'Task management app for organizing daily activities efficiently.',
            github: 'https://github.com/rishikesh-babu/Todo-List.git',
            live: 'https://to-do-1cf2.onrender.com/',
            stack: ['React', 'JavaScript', 'CSS']
        },
        {
            image: '/login-demo.png',
            name: 'Login Demo',
            description: 'Firebase authentication demo with secure login and signup system.',
            github: 'https://github.com/rishikesh-babu/Firebase-Sample.git',
            live: 'https://firebase-login-o2pi.onrender.com/login',
            stack: ['React', 'Firebase', 'Authentication']
        }
    ]

    return (
        <div id='portfolio' className='py-10 min-h-screen'>
            <div id='portfolio-heading' className='mb-10 text-center text-4xl text-accent-cyan font-sans font-bold tracking-[3px] '>
                Projects
            </div>

            <div className='font-main mx-auto max-w-6xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                {projects?.map((item, index) => (
                    <div
                        key={index}
                        className='group relative w-full overflow-hidden rounded-3xl border border-glass-border bg-glass-bg backdrop-blur-xl transition-all duration-500 hover:shadow-cyan-glow-sm flex flex-col justify-evenly  '
                    >
                        {/* Glow Effect */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10' />

                        {/* Content */}
                        <div className='relative z-10 flex flex-col gap-4 p-6'>
                            {/* Title */}
                            <div>
                                <h2 className='text-2xl font-bold text-accent-cyan sm:text-text-primary sm:group-hover:text-accent-cyan transition'>{item.name}</h2>
                                <p className='mt-2 text-sm leading-relaxed text-text-secondary'>
                                    {item.description}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className='flex flex-wrap gap-2'>
                                {item.stack.map((stackItem, index) => (
                                    <span key={index} className='px-3 py-1 rounded-full text-xs font-medium text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/10 backdrop-blur-md shadow-cyan-glow-sm hover:scale-105 active:scale-95 cursor-pointer '>
                                        {stackItem}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className='flex gap-3 pt-2'>
                                <a href={item.github} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2.5 rounded-xl border border-glass-border bg-white/5 text-text-primary hover:border-accent-cyan/40 hover:text-accent-cyan hover:shadow-cyan-glow-sm transition-all duration-300'>GitHub ↗</a>

                                <a href={item.live} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2.5 border border-glass-border rounded-xl bg-accent-cyan/10 text-text-primary font-semibold hover:shadow-cyan-glow-sm hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300'>
                                    Live Demo ↗
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
