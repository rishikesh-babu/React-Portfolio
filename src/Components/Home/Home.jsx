import React from 'react'

export default function Home() {
  return (
    <div id='home' className='min-h-[90vh] bg-[#0F172A] flex flex-col justify-evenly items-center'>
        <img src="/profile.jpg" alt="profile" className='size-64 border-2 border-sky-600 rounded-full object-cover shadow-[0px_0px_100px_#00ffff80] ' />
        <div>
            <div className='text-2xl text-center'>Hello It's me</div>
            <div className='text-center text-4xl text-[#00ffff] font-semibold '>Rishikesh Babu</div>
            <div className='text-2xl'>And I'm a <span id='home-multi-text'>Web Developer</span></div>
        </div>
    </div>
  )
}
