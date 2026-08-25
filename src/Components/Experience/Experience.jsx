import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { UpReveal } from '../../Utilities/ScrollAnimation';

export default function Experience() {
    const experiences = [
        {
            role: "AI Data Engineer Intern",
            company: "Perseverance Technologies",
            location: "Changanacherry, Kerala (Onsite)",
            duration: "June 2026 - Present",
            description: [
                "Assist in developing and maintaining data engineering workflows for data collection, transformation, and processing.",
                "Work with databases, SQL, and Python to support data integration and reliable data processing.",
            ],
            skills: ["Python", "PostgreSQL", "FastAPI", "Pandas"]
        },
        {
            role: "Web Developer Intern",
            company: "Fourve Studios and Enterprises LLP",
            location: "Remote",
            duration: "1 June 2025 - 1 September 2025",
            description: [
                "Developed and maintained backend web applications using the Python frameworks Flask.",
                "Collaborated with cross-functional team members to design features and troubleshoot complex software defects.",
                "Participated in code reviews and optimized existing code to improve application performance and maintainability."
            ],
            skills: ["HTML5", "CSS", "JavaScript", "Git", "GitHub", "Python", "Flask", "PostgreSQL"]
        }
    ];

    return (
        <div id="experience" className='py-10 min-h-[80vh] flex flex-col justify-center'>
            <UpReveal className="mb-14 text-center text-4xl text-accent-cyan font-sans font-bold tracking-[3px] uppercase">
                Experience
            </UpReveal>

            <div className="relative mx-auto w-full max-w-6xl px-4">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent transform sm:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                                
                                {/* Timeline Dot/Icon */}
                                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#05050a] border-2 border-accent-cyan shadow-cyan-glow-sm z-10">
                                    <Briefcase className="w-5 h-5 text-accent-cyan" />
                                </div>

                                {/* Experience Card */}
                                <UpReveal className={`w-[90%] sm:w-[calc(50%-2rem)] ml-10 sm:ml-0`}>
                                    <div className="group relative p-6 bg-glass-bg hover:bg-glass-bg/5 backdrop-blur-sm border border-glass-border rounded-2xl transition-all duration-300">
                                        {/* Glow Effect */}
                                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 rounded-2xl' />

                                        {/* Header */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <div className="text-accent-purple font-semibold mt-1">
                                                {exp.company}
                                            </div>

                                            {/* Details Info */}
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-text-secondary">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4 text-accent-cyan" />
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4 text-accent-cyan" />
                                                    {exp.location}
                                                </span>
                                            </div>

                                            {/* Description Points */}
                                            <ul className="mt-4 space-y-2 text-sm text-text-secondary list-disc list-inside">
                                                {exp.description.map((point, idx) => (
                                                    <li key={idx} className="leading-relaxed">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Skills Badges */}
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {exp.skills.map((skill, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="px-3 py-1 rounded-full text-xs font-medium text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/10 backdrop-blur-md shadow-cyan-glow-sm hover:scale-105 active:scale-95 cursor-pointer select-none"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </UpReveal>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

