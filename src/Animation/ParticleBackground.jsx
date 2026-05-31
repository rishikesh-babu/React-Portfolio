import { useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            background: {
                color: {
                    value: '#030014',
                },
            },
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                        // area: 800,
                    },
                },
                paint: {
                    fill: {
                        enable: true,
                        color: {
                            // value: "#ff0000",
                            value: ["#ff0000", "#00ff00", "#0000ff"]
                        },
                    },
                },
                links: {
                    enable: true,
                    color: "#ffffffff",
                    distance: 150,
                    opacity: 0.4,
                },
                move: {
                    enable: true,
                    speed: 1.5,
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.4,
                    },
                },
            },
        }),
        []
    );

    return (
        <div className="absolute inset-0 -z-10 w-full h-full">
            <Particles
                id="tsparticles"
                options={options}
                className="w-full h-full"
            />
        </div>
    );
}