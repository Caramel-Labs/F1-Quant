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
                        Turn data into strategy with cutting-edge analytics
                        built for high-stakes F1 betting.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <JoinWaitlistDialog triggerClassName="bg-red-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="text-center px-4 sm:px-6 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                    Predict Like a Quant. Bet Like a Pro.
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                    F1 Quant transforms race data, market odds, and live
                    sentiment into powerful betting insights. Think like a
                    quant, act with confidence, and gain an edge in every Grand
                    Prix.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                    {[
                        {
                            title: 'Winner Forecasts',
                            description:
                                'See the predicted race winner and projected driver rankings for upcoming races.',
                        },
                        {
                            title: 'Live Circuit View',
                            description:
                                'Track real-time driver positions on a live-rendered race map.',
                        },
                        {
                            title: 'Staking Access',
                            description:
                                'Explore third-party prediction markets and staking platforms — just a click away.',
                        },
                        {
                            title: 'Sentiment Scanner',
                            description:
                                'Analyze F1 news and social media in real time with quantified sentiment scores.',
                        },
                        {
                            title: 'Upcoming Races',
                            description:
                                'Stay in the loop with key race dates, locations, and countdowns.',
                        },
                        {
                            title: 'Algorithmic Intelligence',
                            description:
                                'Bet like a quant — leverage data-backed signals to outsmart the market.',
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
                    Bet Before the Odds Shift
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base">
                    In racing and betting, timing is everything. Secure early
                    access and stay a lap ahead.
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
                    <a href="https://x.com/caramel_labs" className="underline">
                        Caramel Labs
                    </a>
                    .
                </p>
            </footer>
        </main>
    );
}

export default Home;
