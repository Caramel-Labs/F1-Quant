import { useEffect, useState, useRef } from 'react';
import { siteConfig, componentConfig } from '../config.jsx';

function HeroImageWithOrbits() {
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const [orbitAngles, setOrbitAngles] = useState({});
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = dimensions.width < 768;

    const orbits = [
        {
            radius: isMobile ? 120 : 220,
            dotCount: isMobile ? 8 : 12,
            color: `bg-red-500`,
            size: isMobile ? 2 : 3,
            speed: 0.6,
            reverse: false,
            opacity: 0.8,
            pathOpacity: 0.1,
        },
        {
            radius: isMobile ? 160 : 280,
            dotCount: isMobile ? 12 : 16,
            color: `bg-red-400`,
            size: isMobile ? 1.5 : 2,
            speed: 0.8,
            reverse: true,
            opacity: 0.7,
            pathOpacity: 0.08,
        },
        {
            radius: isMobile ? 200 : 340,
            dotCount: isMobile ? 16 : 24,
            color: `bg-red-300`,
            size: isMobile ? 2 : 2.5,
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
                    return (i / orbit.dotCount) * 360 + Math.random() * 15;
                });
        });
        setOrbitAngles(initialAngles);
    }, []);

    const animate = (time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;

            setOrbitAngles((prevAngles) => {
                const newAngles = { ...prevAngles };
                Object.keys(prevAngles).forEach((orbitIndex) => {
                    const orbit = orbits[orbitIndex];
                    newAngles[orbitIndex] = prevAngles[orbitIndex].map(
                        (angle) => {
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
        <div className="flex-1 relative flex items-center justify-center group h-[400px] sm:h-[600px] lg:h-[800px]">
            {' '}
            {/* Responsive height */}
            {/* Blurred Red Blob - Responsive */}
            <div
                className={`absolute w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-red-500 opacity-20 blur-3xl rounded-full z-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30`}
            />
            {/* Orbital Paths */}
            {orbits.map((orbit, i) => (
                <div
                    key={`orbit-path-${i}`}
                    className="absolute rounded-full border -z-10"
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
            {/* Helmet Image - Responsive */}
            <img
                src={componentConfig.heroImageWithOrbits.imgSrc}
                alt={componentConfig.heroImageWithOrbits.imgAlt}
                className="w-[280px] sm:w-[400px] md:w-[500px] max-w-full h-auto relative z-10"
            />
        </div>
    );
}

export default HeroImageWithOrbits;
