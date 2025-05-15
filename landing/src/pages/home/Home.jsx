import JoinWaitlistDialog from '../../components/JoinWaitlistDialog';

function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                    <img
                        src="/logo.png"
                        alt="QuantF1 Logo"
                        width={120}
                        height={40}
                    />
                </div>
                <JoinWaitlistDialog triggerClassName="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" />
            </header>

            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-10">
                <div className="flex-1">
                    <img
                        src="/f1-car-top.png"
                        alt="Formula 1 Car Top Down View"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight">
                        Precision <span className="text-red-500">F1</span>{' '}
                        Analytics for Data-Driven Stakers
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Unlock the power of predictive analytics and stay ahead
                        of every race.
                    </p>
                    <JoinWaitlistDialog triggerClassName="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition" />
                </div>
            </section>

            {/* Features Section */}
            <section className="text-center px-6 py-16">
                <h2 className="text-2xl font-semibold mb-4">
                    Intelligent Financial Staking
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                    Leverage insights and data modeling to make smarter betting
                    decisions. Backed by machine learning, tested by time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {[
                        'Predictive Models',
                        'Real-Time Updates',
                        'Race Insights',
                        'Stake Management',
                        'Performance Tracking',
                        'Odds Comparison',
                    ].map((feature) => (
                        <div
                            key={feature}
                            className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm"
                        >
                            <h3 className="text-lg font-medium">{feature}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-center px-6 py-16 bg-zinc-100 dark:bg-zinc-900">
                <h2 className="text-2xl font-semibold mb-4">
                    So, What Are You Waiting For?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Early birds will get exclusive insights and early access
                    tools.
                </p>
                <JoinWaitlistDialog triggerClassName="bg-red-500 text-white text-lg px-6 py-3 rounded hover:bg-red-600 transition" />
            </section>

            {/* Footer */}
            <footer className="flex flex-col items-center justify-center py-10 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-full px-4 sm:px-0 py-8">
                    <img
                        src="/car-side.png"
                        alt="Formula 1 Car Side View"
                        className="max-w-full h-auto mx-auto"
                    />
                </div>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    A Product of{' '}
                    <a href="#" className="underline">
                        Caramel Labs
                    </a>
                    .
                </p>
            </footer>
        </main>
    );
}

export default Home;
