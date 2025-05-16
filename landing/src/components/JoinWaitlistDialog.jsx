import * as Dialog from '@radix-ui/react-dialog';
import { useRef } from 'react';

function JoinWaitlistDialog({
    triggerClassName = '',
    buttonLabel = 'Join Waitlist',
}) {
    // Use refs to have control over the inputs without auto-focusing
    const firstNameRef = useRef(null);
    const emailRef = useRef(null);

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={triggerClassName}>{buttonLabel}</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg z-50"
                    // Prevent automatic focus with onOpenAutoFocus
                    onOpenAutoFocus={(e) => e.preventDefault()}
                >
                    <Dialog.Title className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                        Join the Waitlist
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        Enter your details to get early access.
                    </Dialog.Description>
                    <form className="space-y-4">
                        <div>
                            <input
                                ref={firstNameRef}
                                type="text"
                                placeholder="First Name"
                                className="w-full p-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-zinc-500 dark:placeholder-zinc-400"
                                // Explicitly ensure no auto-focus
                                autoFocus={false}
                            />
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                We collect your name only to personalize our
                                communications with you.
                            </p>
                        </div>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-zinc-500 dark:placeholder-zinc-400"
                            // Explicitly ensure no auto-focus
                            autoFocus={false}
                        />
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                    <Dialog.Close asChild>
                        <button className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            ✕
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default JoinWaitlistDialog;
