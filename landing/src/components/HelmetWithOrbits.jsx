import { useEffect, useState } from 'react';

function HelmetWithOrbits() {
    const [dotPositions, setDotPositions] = useState({});

    const orbits = [
        {
            radius: 220,
            dotCount: 12,
            color: 'bg-red-500',
            size: 3,
            speed: 1,
            reverse: false,
            opacity: 0.8,
            pathOpacity: 0.1,
        },
        {
            radius: 280,
            dotCount: 16,
            color: 'bg-red-400',
            size: 2,
            speed: 1.3,
            reverse: true,
            opacity: 0.7,
            pathOpacity: 0.08,
        },
        {
            radius: 340,
            dotCount: 24,
            color: 'bg-red-300',
            size: 2.5,
            speed: 0.7,
            reverse: false,
            opacity: 0.6,
            pathOpacity: 0.06,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDotPositions((prev) => {
                const newPositions = { ...prev };
                orbits.forEach((orbit, i) => {
                    if (!newPositions[i]) {
                        newPositions[i] = Array(orbit.dotCount)
                            .fill()
                            .map(
                                (_, idx) =>
                                    (idx / orbit.dotCount) * 360 +
                                    Math.random() * 20
                            );
                    } else {
                        newPositions[i] = newPositions[i].map(
                            (angle) =>
                                (angle +
                                    orbit.speed *
                                        (orbit.reverse ? -0.3 : 0.3)) %
                                360
                        );
                    }
                });
                return newPositions;
            });
        }, 16);
        return () => clearInterval(interval);
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
            {orbits.map((orbit, orbitIndex) =>
                dotPositions[orbitIndex]?.map((angle, i) => (
                    <div
                        key={`orbit-${orbitIndex}-dot-${i}`}
                        className={`absolute rounded-full ${orbit.color} z-0`}
                        style={{
                            width: orbit.size * 4,
                            height: orbit.size * 4,
                            opacity: orbit.opacity,
                            transform: `rotate(${angle}deg) translateX(${orbit.radius}px) translateZ(0)`,
                            transition: 'transform 0.08s linear',
                        }}
                    />
                ))
            )}

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
