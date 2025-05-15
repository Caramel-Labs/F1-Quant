import * as Dialog from '@radix-ui/react-dialog';

function JoinWaitlistDialog({
    triggerClassName = '',
    buttonLabel = 'Join Waitlist',
}) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={triggerClassName}>{buttonLabel}</button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg z-50">
                    <Dialog.Title className="text-xl font-semibold mb-4 text-white">
                        Join the Waitlist
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-muted-foreground mb-4 text-white">
                        Enter your email to get early access.
                    </Dialog.Description>

                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition"
                        >
                            Submit
                        </button>
                    </form>

                    <Dialog.Close asChild>
                        <button className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-700 dark:hover:text-white">
                            ☓
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default JoinWaitlistDialog;
