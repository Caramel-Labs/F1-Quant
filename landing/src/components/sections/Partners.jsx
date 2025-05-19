import { siteConfig } from '../../config.jsx';

function Partners() {
    return (
        <section className="text-center px-4 sm:px-6 py-12 sm:py-16">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                {siteConfig.partners.title}
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base pb-4">
                {siteConfig.partners.content}
            </p>

            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center mt-6 -mx-1.5">
                {siteConfig.partners.images.map((partner) => (
                    <div
                        key={partner.alt}
                        className="px-1.5 py-1.5 flex justify-center items-center"
                        style={{ width: '180px' }}
                    >
                        <img
                            src={partner.src}
                            alt={partner.alt}
                            className="h-24 object-contain filter brightness-0 invert-[0.8] dark:invert-[0.25]"
                            style={{ minWidth: '160px' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Partners;
