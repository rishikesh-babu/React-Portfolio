import React from 'react'

export default function Portfolio() {
    const projects = [
        {
            image: '/food-express.png',
            name: 'Food Express',
            github: '',
            live: ''
        },
        {
            image: '/weather-app.png',
            name: 'Weather App',
            github: '',
            live: ''
        },
        {
            image: '/tic-tac-toe.png',
            name: 'Tic Tac Toe Game',
            github: '',
            live: ''
        },
        {
            image: '/todo.png',
            name: 'To Do App',
            github: '',
            live: ''
        },
    ]
    return (
        <div id='portfolio' className='py-10 bg-[#172342]'>
            <div className='mb-10 text-center text-4xl text-[#00ffff] font-sans font-bold tracking-[3px] '>Latest Projects</div>

            <div className='flex flex-wrap justify-center gap-7'>
                {projects?.map((item, index) => (
                    <div key={index} className='p-6 w-[250px] bg-[#23334e] flex flex-col justify-between items-center gap-3 rounded-4xl transition-all duration-300 hover:shadow-[0px_2px_10px_#00ffff] '>
                        <img src={item?.image} alt="image" className='w-full h-[200px] object-cover object-[0px_0px] border-3 border-[#00ffff] rounded-3xl ' />
                        
                        <div className='text-xl font-extrabold text-[#00ffff]'>
                            {item?.name}
                        </div>

                        <div className='w-full flex flex-row justify-around gap-2'>
                            <a
                                href={item?.github}
                                target={item?.github ?? '_blank'}
                                rel="noopener noreferrer"
                                className="px-4 py-2 font-semibold text-nowrap rounded-full bg-gradient-to-r from-[#6b7280] to-[#374151] transition-all duration-300 hover:scale-105 hover:shadow-[-1px_0px_7px_#00ffff] "
                            >
                                GitHub
                            </a>

                            <a
                                href={item?.live}
                                target={item?.github ?? '_blank'}
                                className="px-4 py-2 font-semibold text-nowrap rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] transition-all duration-300 hover:scale-105 hover:shadow-[-1px_0px_7px_#00ffff] "
                            >
                                Live Demo

                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
