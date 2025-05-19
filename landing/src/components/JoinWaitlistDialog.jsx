import { useState } from 'react';
import siteConfig from '../config.jsx';
import { StatusPopup } from './StatusPopup';
import * as Dialog from '@radix-ui/react-dialog';

function JoinWaitlistDialog({
    triggerClassName = '',
    buttonLabel = siteConfig.hero.buttonLabel,
}) {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isStatusPopupOpen, setIsStatusPopupOpen] = useState(false);
    const [status, setStatus] = useState('success');
    const [statusMessage, setStatusMessage] = useState({
        title: '',
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        } else {
            setEmailError('');
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                `${
                    import.meta.env.VITE_API_BASE_URL
                }/api/prospects/addProspect`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: firstName,
                        email: email,
                    }),
                }
            );

            setIsSubmitting(false);
            setIsDialogOpen(false);

            if (response.ok) {
                setStatus('success');
                setStatusMessage({
                    title: 'Added to Waitlist Successfully',
                    description:
                        'Thank you for joining our waitlist. We will notify you when we launch.',
                });
                setFirstName('');
                setEmail('');
            } else if (response.status === 409) {
                setStatus('exists');
                setStatusMessage({
                    title: "You're Already on Our Waitlist",
                    description:
                        'This email address is already registered. We will notify you when we launch.',
                });
            } else {
                setStatus('error');
                setStatusMessage({
                    title: 'Oops, something went wrong!',
                    description:
                        'We encountered an issue adding you to our waitlist. Please try again.',
                });
            }
            setIsStatusPopupOpen(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            setIsDialogOpen(false);
            setStatus('error');
            setStatusMessage({
                title: 'Oops, something went wrong!',
                description:
                    'We encountered an issue adding you to our waitlist. Please try again.',
            });
            setIsStatusPopupOpen(true);
        }
    };

    return (
        <>
            <Dialog.Root
                open={isDialogOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setIsSubmitting(false);
                    }
                    setIsDialogOpen(open);
                }}
            >
                <Dialog.Trigger asChild>
                    <button className={triggerClassName}>{buttonLabel}</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                    <Dialog.Content
                        className={`fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg z-50`}
                        onOpenAutoFocus={(e) => e.preventDefault()}
                    >
                        <Dialog.Title
                            className={`text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100`}
                        >
                            Join the Waitlist
                        </Dialog.Title>
                        <Dialog.Description
                            className={`text-sm text-zinc-600 dark:text-zinc-400 mb-4`}
                        >
                            Enter your details to get early access.
                        </Dialog.Description>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    className={`w-full p-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-zinc-500 dark:placeholder-zinc-400`}
                                    autoFocus={false}
                                    required
                                    disabled={isSubmitting}
                                />
                                <p
                                    className={`text-xs text-zinc-500 dark:text-zinc-400 mt-1`}
                                >
                                    We collect your name only to personalize our
                                    communications with you.
                                </p>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (emailError) setEmailError('');
                                    }}
                                    className={`w-full p-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-zinc-500 dark:placeholder-zinc-400`}
                                    autoFocus={false}
                                    required
                                    disabled={isSubmitting}
                                />
                                {emailError && (
                                    <p
                                        className={`text-xs text-red-500 dark:text-red-400 mt-1`}
                                    >
                                        {emailError}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className={`w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition flex justify-center items-center`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className={`animate-spin -ml-1 mr-2 h-4 w-4 text-white`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>
                        <Dialog.Close asChild>
                            <button
                                className={`absolute top-3 right-3 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300`}
                                disabled={isSubmitting}
                            >
                                ✕
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <StatusPopup
                isOpen={isStatusPopupOpen}
                onOpenChange={setIsStatusPopupOpen}
                status={status}
                statusMessage={statusMessage}
                onTryAgain={() => {
                    setIsStatusPopupOpen(false);
                    setIsDialogOpen(true);
                }}
            />
        </>
    );
}

export default JoinWaitlistDialog;
