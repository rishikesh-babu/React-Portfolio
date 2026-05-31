import { Toaster } from "react-hot-toast"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Components/Project/Project"
import ParticleBackground from "./Animation/ParticleBackground"

function App() {
    return (
        <div className="relative min-h-screen text-text-primary">
            <ParticleBackground />
            <div className="relative z-10">
                <Toaster position="top-center" />
                <Navbar />
                <main id="home" className="pt-[4rem] px-1 sm:px-2 md:px-3 ">
                    <Home />
                    <About />
                    <Project />
                    <Contact />
                </main>
            </div>
        </div>
    )
}

export default App
