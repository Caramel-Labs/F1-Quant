import siteConfig from '../../config.jsx';

function Footer() {
    return (
        <footer
            className={`flex flex-col items-center justify-center py-8 sm:py-10 border-t border-zinc-200 dark:border-zinc-800`}
        >
            {/* Promo Image */}
            <div className="w-full px-4 sm:px-0 py-6 sm:py-8">
                <img
                    src="/car-side.png"
                    alt="Formula 1 Car Side View"
                    className="max-w-full h-auto mx-auto px-4"
                />
            </div>

            {/* Company Name and Link */}
            <p
                className={`mt-3 sm:mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base`}
            >
                A Product of{' '}
                <a href={siteConfig.footer.companyLink} className="underline">
                    {siteConfig.footer.company}
                </a>
                .
            </p>
        </footer>
    );
}

export default Footer;
