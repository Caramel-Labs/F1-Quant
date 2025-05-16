import { useEffect, useState } from 'react';
import HelmetWithOrbits from '../../components/HelmetWithOrbits';
import JoinWaitlistDialog from '../../components/JoinWaitlistDialog';

function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <main className="font-custom min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header
                className={`sticky top-0 z-30 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
                    scrolled
                        ? 'backdrop-blur bg-white/70 dark:bg-zinc-900/40 shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                <div>
                    <img
                        src="/logo.png"
                        alt="QuantF1 Logo"
                        className="w-24 sm:w-32 h-auto"
                    />
                </div>
                <JoinWaitlistDialog triggerClassName="bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base" />
            </header>

            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 py-4 gap-6 sm:gap-10">
                <HelmetWithOrbits></HelmetWithOrbits>

                <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Precision <span className="text-red-500">F1</span>{' '}
                        Analytics
                        <br />
                        For Data-Driven Stakers
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Unlock the power of predictive analytics and stay ahead
                        of every race.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <JoinWaitlistDialog triggerClassName="bg-red-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="text-center px-4 sm:px-6 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                    Intelligent Financial Staking
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                    Leverage insights and data modeling to make smarter betting
                    decisions. Backed by machine learning, tested by time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                    {[
                        {
                            title: 'Predictive Models',
                            description:
                                'Forecast race outcomes with precision using machine learning.',
                        },
                        {
                            title: 'Real-Time Updates',
                            description:
                                "Get instant data as it happens — don't miss a beat.",
                        },
                        {
                            title: 'Race Insights',
                            description:
                                'Access deep analytics about track conditions and driver performance.',
                        },
                        {
                            title: 'Stake Management',
                            description:
                                'Balance your bankroll smartly with AI-assisted suggestions.',
                        },
                        {
                            title: 'Performance Tracking',
                            description:
                                'Visualize your betting history and fine-tune your strategy.',
                        },
                        {
                            title: 'Odds Comparison',
                            description:
                                'Compare live odds across platforms for optimal value bets.',
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm"
                        >
                            <h3 className="text-base sm:text-lg font-medium">
                                {feature.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-2">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-center px-4 sm:px-6 py-12 sm:py-16 bg-zinc-100 dark:bg-zinc-900">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                    So, What Are You Waiting For?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base">
                    Early birds will get exclusive insights and early access
                    tools.
                </p>
                <JoinWaitlistDialog triggerClassName="bg-red-500 text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-red-600 transition mx-auto" />
            </section>

            {/* Footer */}
            <footer className="flex flex-col items-center justify-center py-8 sm:py-10 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-full px-4 sm:px-0 py-6 sm:py-8">
                    <img
                        src="/car-side.png"
                        alt="Formula 1 Car Side View"
                        className="max-w-full h-auto mx-auto px-4" // Added padding for very small screens
                    />
                </div>
                <p className="mt-3 sm:mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                    A Product of{' '}
                    <a href="https://x.com/Caramel_HQ" className="underline">
                        Caramel Labs
                    </a>
                    .
                </p>
            </footer>
        </main>
    );
}

export default Home;
