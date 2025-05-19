import siteConfig from '../../config.jsx';
import JoinWaitlistDialog from '../JoinWaitlistDialog';

function Hook() {
    return (
        <section
            className={`text-center px-4 sm:px-6 py-12 sm:py-16 bg-zinc-100 dark:bg-zinc-900`}
        >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                {siteConfig.hook.title}
            </h2>

            {/* Content */}
            <p
                className={`text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base`}
            >
                {siteConfig.hook.content}
            </p>

            {/* Join Waitlist */}
            <JoinWaitlistDialog
                triggerClassName={`bg-red-500 text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-red-600 transition mx-auto`}
            />
        </section>
    );
}

export default Hook;
