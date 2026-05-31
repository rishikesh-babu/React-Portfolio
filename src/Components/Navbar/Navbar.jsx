import "./Navbar.css";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

export default function Navbar() {
    const navItems = [
        { id: "home", label: "Home", icon: Home },
        { id: "about", label: "About", icon: User },
        // { id: "experience", label: "Experience", icon: Briefcase },
        { id: "portfolio", label: "Projects", icon: Code },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 py-4 px-6 bg-bg-nav border border-glass-border rounded-xl flex justify-center gap-5 sm:gap-10 ">
            {navItems?.map((item, index) => (
                <div key={index} className="relative group flex flex-col items-center">
                    <a
                        href={`#${item?.id}`}
                        className="w-12 h-12 bg-accent-cyan/10 border border-glass-border hover:border-accent-cyan/30 rounded-xl hover:drop-shadow-cyan-xl hover:scale-110 transition-all duration-300 flex justify-evenly items-center cursor-pointer"
                    >
                        <item.icon className=" text-accent-cyan drop-shadow-cyan-xl" />
                    </a>

                    <span className="absolute px-3 py-1 font-bold tracking-wide text-lg sm:text-xl capitalize text-accent-pink bottom-5 group-hover:bottom-[70px] transition-all duration-300 delay-[50ms] opacity-0 group-hover:opacity-100 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-md pointer-events-none whitespace-nowrap">
                        {item?.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
