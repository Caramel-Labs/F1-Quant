import siteConfig from '../../config.jsx';

function Features() {
    return (
        <section className="text-center px-4 sm:px-6 py-12 sm:py-16">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                {siteConfig.features.title}
            </h2>

            {/* Content */}
            <p
                className={`text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base`}
            >
                {siteConfig.features.content}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                {siteConfig.features.items.map((feature) => (
                    <div
                        key={feature.title}
                        className={`border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm`}
                    >
                        <h3 className="text-base sm:text-lg font-medium">
                            {feature.title}
                        </h3>
                        <p
                            className={`text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-2`}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
