import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { loadSlim } from '@tsparticles/slim'
import { ParticlesProvider } from '@tsparticles/react'

async function particlesInit(engine) {
    await loadSlim(engine)
}

createRoot(document.getElementById('root')).render(
    <ParticlesProvider init={particlesInit}>
        <App />
    </ParticlesProvider>,
)
