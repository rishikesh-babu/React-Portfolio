import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio/Portfolio"

function App() {
    return (
        <div className="font-mono text-white overflow-hidden">
            <div className='w-full fixed bg-[#14193f] flex justify-between z-50'>
                <Navbar />
            </div>
            <main className="pt-[4rem]">
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </main>
        </div>
    )
}

export default App
