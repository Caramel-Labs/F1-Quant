import siteConfig from '../../config.jsx';
import WaitlistDialog from '../WaitlistDialog.jsx';
import HeroImageWithOrbits from '../HeroImageWithOrbits';

function Hero() {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 py-4 gap-6 sm:gap-10">
            {/* Hero Image with Orbits */}
            <HeroImageWithOrbits></HeroImageWithOrbits>

            {/* Title and Content */}
            <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {siteConfig.hero.title}
                </h1>

                {/* Content */}
                <p
                    className={`text-base sm:text-lg text-zinc-600 dark:text-zinc-400`}
                >
                    {siteConfig.hero.content}
                </p>

                {/* Join Waitlist */}
                <div className="flex justify-center lg:justify-start">
                    <WaitlistDialog
                        triggerClassName={`bg-red-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
