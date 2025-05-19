import * as Dialog from '@radix-ui/react-dialog';
import siteConfig from '../config.jsx';

export function StatusPopup({
    isOpen,
    onOpenChange,
    status,
    statusMessage,
    onTryAgain,
}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                <Dialog.Content
                    className={`fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg z-50`}
                >
                    <Dialog.Title
                        className={`text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100`}
                    >
                        {statusMessage.title}
                    </Dialog.Title>
                    <Dialog.Description
                        className={`text-sm text-zinc-600 dark:text-zinc-400 mb-6`}
                    >
                        {statusMessage.description}
                    </Dialog.Description>
                    <div className="flex justify-end gap-3">
                        {/* For error state - show both Close and Try Again */}
                        {status === 'error' && (
                            <>
                                <button
                                    onClick={() => onOpenChange(false)}
                                    className={`px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition`}
                                >
                                    Close
                                </button>
                                <button
                                    onClick={onTryAgain}
                                    className={`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition`}
                                >
                                    Try Again
                                </button>
                            </>
                        )}
                        {/* For success/exists states - show only OK button */}
                        {(status === 'success' || status === 'exists') && (
                            <button
                                onClick={() => onOpenChange(false)}
                                className={`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition`}
                            >
                                OK
                            </button>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
