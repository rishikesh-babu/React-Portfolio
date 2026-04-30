import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio/Portfolio"

function App() {
    return (
        <div className="relative">
            {/* Background elements */}
            <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] -z-10 opacity-50 bg-[radial-gradient(circle,rgba(138,43,226,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] -z-10 opacity-50 bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
            
            <header className="fixed top-0 left-0 w-full z-[100] bg-[#05050a]/70 backdrop-blur-[12px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <Navbar />
            </header>
            <main>
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </main>
        </div>
    )
}

export default App
