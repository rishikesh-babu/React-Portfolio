import React from 'react'

export default function Project() {
    const projects = [
        {
            name: 'ASL Translator',
            description: 'A web application that translates American Sign Language to text and vice versa.',
            github: 'https://github.com/Renet-Reji/Sign-Language-Translator.git',
            live: 'https://asl-translator-rvzx.onrender.com/',
            stack: ['React', 'Flask', 'Python', 'NumPy', 'MediaPipe', 'OpenCV']
        },
        {
            name: 'ChatLy',
            description: 'A real time chat application using MERN stack and socket.io with private messaging feature',
            github: 'https://github.com/rishikesh-babu/ChatLy.git',
            live: 'https://real-time-chat-fite.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'TailwindCSS']
        },
        {
            name: 'Browser Extension Frontend Challenge',
            description: 'Frontend challenge taken fron frontendmentor to learn frontend developement',
            github: 'https://github.com/rishikesh-babu/Browser-Extension-Frontend-Challenge.git',
            live: 'https://browser-extension-frontend-challenge.onrender.com/',
            stack: ['React', 'Tailwindcss', 'JavaScript']
        },
        {
            name: 'AI Chat Bot',
            description: 'A sophisticated AI-driven conversational platform that harnesses Google\'s Gemini API to deliver intelligent, context-aware interactions.',
            github: 'https://github.com/rishikesh-babu/AI-Chat-Bot.git',
            live: 'https://ai-chat-bot-1dnk.onrender.com/',
            stack: ['React', 'TailwindCSS', 'Gemini API']
        },
        {
            name: 'SpaceX',
            description: 'Built a responsive SpaceX web application using the SpaceX API to display launches, rockets, missions, and other space-related data with a modern and interactive user interface.',
            github: 'https://github.com/rishikesh-babu/SpaceX.git',
            live: 'https://spacex-y7rf.onrender.com/',
            stack: ['React', 'TailwindCSS', 'SpaceX API']
        },
        {
            name: 'EduVerse',
            description: 'Offline-first AI education platform. Ensures learning continuity in low-connectivity areas using PWA technologies.',
            github: 'https://github.com/rishikesh-babu/EduVerse.git',
            live: 'https://eduverse-a60j.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'MongoDB', 'ML']
        },
        {
            name: 'Food Express',
            description: 'Full-stack food ordering platform with online payments and admin management.',
            github: 'https://github.com/rishikesh-babu/Food-Ordering-Website.git',
            live: 'https://food-express-frontend-yyuz.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
        },
        {
            name: 'PlanIt',
            description: 'A centralized web platform designed to streamline event registration, attendance tracking, and certificate generation for educational institutions.',
            github: 'https://github.com/rishikesh-babu/PlanIt.git',
            live: 'https://planit-adir.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'PostgresSQL']
        },
        {
            name: 'Galary App',
            description: 'A responsive gallery web application that supports viewing and filtering images and videos.',
            github: 'https://github.com/rishikesh-babu/Fourve.git',
            live: 'https://fourve-zop1.onrender.com/',
            stack: ['React', 'Node.js', 'Express', 'MongoDB',]
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
            live: 'https://firebase-login-o2pi.onrender.com',
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
                    <div key={index} className='group relative w-full overflow-hidden rounded-3xl border border-glass-border bg-glass-bg backdrop-blur-xl transition-all duration-500 hover:shadow-cyan-glow-sm '>
                        {/* Glow Effect */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10' />

                        {/* Content */}
                        <div className='relative z-10 p-6 h-full flex flex-col justify-between gap-4'>
                            {/* Title */}
                            <div>
                                <h2 className='text-2xl font-bold text-accent-cyan sm:text-text-primary sm:group-hover:text-accent-cyan transition'>{item?.name}</h2>
                                <p className='mt-2 text-sm leading-relaxed text-text-secondary'>
                                    {item?.description}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className=' flex flex-wrap gap-2'>
                                {item?.stack?.map((stackItem, index) => (
                                    <span key={index} className='px-3 py-1 rounded-full text-xs font-medium text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/10 backdrop-blur-md shadow-cyan-glow-sm hover:scale-105 active:scale-95 cursor-pointer '>
                                        {stackItem}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className='flex gap-3 pt-2'>
                                <a href={item?.github} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2.5 rounded-xl border border-glass-border bg-white/5 text-text-primary hover:border-accent-cyan/40 hover:text-accent-cyan hover:shadow-cyan-glow-sm transition-all duration-300'>
                                    GitHub ↗
                                </a>

                                <a href={item?.live} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2.5 border border-glass-border rounded-xl bg-accent-cyan/10 text-text-primary font-semibold hover:shadow-cyan-glow-sm hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300'>
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
