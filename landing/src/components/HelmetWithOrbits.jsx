import { useEffect, useState, useRef } from 'react';

function HelmetWithOrbits() {
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const [orbitAngles, setOrbitAngles] = useState({});

    const orbits = [
        {
            radius: 220,
            dotCount: 12,
            color: 'bg-red-500',
            size: 3,
            speed: 0.6,
            reverse: false,
            opacity: 0.8,
            pathOpacity: 0.1,
        },
        {
            radius: 280,
            dotCount: 16,
            color: 'bg-red-400',
            size: 2,
            speed: 0.8,
            reverse: true,
            opacity: 0.7,
            pathOpacity: 0.08,
        },
        {
            radius: 340,
            dotCount: 24,
            color: 'bg-red-300',
            size: 2.5,
            speed: 0.4,
            reverse: false,
            opacity: 0.6,
            pathOpacity: 0.06,
        },
    ];

    // Initialize orbit angles once
    useEffect(() => {
        const initialAngles = {};
        orbits.forEach((orbit, orbitIndex) => {
            initialAngles[orbitIndex] = Array(orbit.dotCount)
                .fill()
                .map((_, i) => {
                    // Distribute dots evenly around circle with slight randomization
                    return (i / orbit.dotCount) * 360 + Math.random() * 15;
                });
        });
        setOrbitAngles(initialAngles);
    }, []);

    const animate = (time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;

            // Update all orbit angles based on time elapsed
            setOrbitAngles((prevAngles) => {
                const newAngles = { ...prevAngles };
                Object.keys(prevAngles).forEach((orbitIndex) => {
                    const orbit = orbits[orbitIndex];
                    newAngles[orbitIndex] = prevAngles[orbitIndex].map(
                        (angle) => {
                            // Smoother animation by using small time-based increments
                            return (
                                (angle +
                                    deltaTime *
                                        0.01 *
                                        orbit.speed *
                                        (orbit.reverse ? -1 : 1)) %
                                360
                            );
                        }
                    );
                });
                return newAngles;
            });
        }

        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div className="flex-1 relative flex items-center justify-center group h-[800px]">
            {/* Blurred Red Blob - Smaller */}
            <div className="absolute w-[450px] h-[450px] bg-red-500 opacity-20 blur-3xl rounded-full z-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30" />

            {/* Orbital Paths - Larger */}
            {orbits.map((orbit, i) => (
                <div
                    key={`orbit-path-${i}`}
                    className="absolute rounded-full border z-0"
                    style={{
                        width: orbit.radius * 2,
                        height: orbit.radius * 2,
                        borderColor: `rgba(255, 255, 255, ${orbit.pathOpacity})`,
                    }}
                />
            ))}

            {/* Moving Dots */}
            {Object.keys(orbitAngles).map((orbitIndex) => {
                const orbit = orbits[orbitIndex];
                return orbitAngles[orbitIndex].map((angle, i) => (
                    <div
                        key={`orbit-${orbitIndex}-dot-${i}`}
                        className={`absolute rounded-full ${orbit.color} z-0`}
                        style={{
                            width: orbit.size * 4,
                            height: orbit.size * 4,
                            opacity: orbit.opacity,
                            transform: `rotate(${angle}deg) translateX(${orbit.radius}px)`,
                            willChange: 'transform',
                        }}
                    />
                ));
            })}

            {/* Helmet Image - Slightly Smaller */}
            <img
                src="/helmet.png"
                alt="Formula 1 Helmet"
                className="w-[500px] max-w-full h-auto relative z-10"
            />
        </div>
    );
}

export default HelmetWithOrbits;
