import siteConfig from '../../config.jsx';
import { useEffect, useState } from 'react';
import WaitlistDialog from '../WaitlistDialog.jsx';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-30 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
                scrolled
                    ? `backdrop-blur bg-white/70 dark:bg-zinc-900/40 shadow-sm`
                    : 'bg-transparent'
            }`}
        >
            {/* Logo */}
            <div>
                <img
                    src={siteConfig.header.logoImgSrc}
                    alt={siteConfig.header.logoImgAlt}
                    className="w-24 sm:w-32 h-auto"
                />
            </div>

            {/* Join Waitlist */}
            <WaitlistDialog
                triggerClassName={`bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base`}
            />
        </header>
    );
}

export default Header;
