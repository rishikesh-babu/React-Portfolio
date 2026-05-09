import { Toaster } from "react-hot-toast"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Components/Project/Project"

function App() {
    return (
        <div className="font-mono bg-gradient-to-r from-[#030014] via-[#030014]/60 to-transparent text-text-primary overflow-hidden">
            <Toaster position="top-center" />
            <Navbar />
            <main id="home" className="pt-[4rem] px-1 sm:px-2 md:px-3 ">
                <Home />
                <About />
                <Project />
                <Contact />
            </main>
        </div>
    )
}

export default App
