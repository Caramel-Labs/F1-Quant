const getAccentClass = (color) => `text-${color}-500`;

// Site-wide Configurations
export const siteConfig = {
    // API Endpoints
    apiEndpoints: {
        addProspectEndpoint: '/api/prospects/addProspect',
    },

    // Colors
    // NOTE these colors do not work
    // as the Tailwind compiler cannot detect dynamic styles
    accentColor: 'red',
    lightModeColor: 'white',
    darkModeColor: 'zinc',

    // Sections as They Appear in the Landing Page

    // 1. Header Section
    header: {
        logoImgSrc: '/logo.png',
        logoImgAlt: 'QuantF1 Logo',
    },

    // 2. Hero Section
    hero: {
        title: (
            <>
                Precision <span className={getAccentClass('red')}>F1</span>{' '}
                Analytics
                <br />
                For Data-Driven Stakers
            </>
        ),
        highlighted: 'F1',
        content:
            'Turn data into strategy with cutting-edge analytics built for high-stakes F1 betting.',
    },

    // 3. Partners Section
    partners: {
        title: 'Data Science Meets the Pit Wall',
        content:
            'From neural networks to race telemetry, we blend cutting-edge tools with motorsport data to fuel smarter staking insights.',
        images: [
            {
                src: '/partners/fastf1.png',
                alt: 'FastF1',
            },
            {
                src: '/partners/tensorflow.png',
                alt: 'Tensorflow',
            },
            {
                src: '/partners/scikit-learn.png',
                alt: 'Scikit-learn',
            },
            {
                src: '/partners/pandas.png',
                alt: 'Pandas',
            },
        ],
    },

    // 4. Features Section
    features: {
        title: 'Predict Like a Quant. Bet Like a Pro.',
        content:
            'F1 Quant transforms race data, market odds, and live sentiment into powerful betting insights. Think like a quant, act with confidence, and gain an edge in every Grand Prix.',
        items: [
            {
                title: 'Winner Forecasts',
                description:
                    'See the predicted race winner and projected driver rankings for upcoming races.',
            },
            {
                title: 'Live Circuit View',
                description:
                    'Track real-time driver positions on a live-rendered race map.',
            },
            {
                title: 'Staking Access',
                description:
                    'Explore third-party prediction markets and staking platforms — just a click away.',
            },
            {
                title: 'Sentiment Scanner',
                description:
                    'Analyze F1 news and social media in real time with quantified sentiment scores.',
            },
            {
                title: 'Upcoming Races',
                description:
                    'Stay in the loop with key race dates, locations, and countdowns.',
            },
            {
                title: 'Algorithmic Intelligence',
                description:
                    'Bet like a quant — leverage data-backed signals to outsmart the market.',
            },
        ],
    },

    // 5. Hook Section
    hook: {
        title: 'Bet Before the Odds Shift',
        content:
            'In racing and betting, timing is everything. Secure early access and stay a lap ahead.',
    },

    // 6. Footer Section
    footer: {
        imgSrc: '/car-side.png',
        imgAlt: 'Formula 1 Car Side View',
        company: 'Caramel Labs',
        companyLink: 'https://x.com/caramel_labs',
    },
};

// Component-wise Configurations
export const componentConfig = {
    // Waitlist Dialog
    waitlistDialog: {
        buttonLabel: 'Join Waitlist',

        title: 'Join the Waitlist',
        content: 'Enter your details to get early access.',

        namePlaceholder: 'First name',
        nameJustification:
            'We collect your name only to personalize our communications with you.',

        emailPlaceholder: 'Email address',
        emailError: 'Please enter a valid email address',

        buttonLabelDefault: 'Submit',
        buttonLabelSubmitting: 'Submitting...',

        statusMessages: {
            success: {
                title: 'Added to Waitlist Successfully',
                description:
                    'Thank you for joining our waitlist. We will notify you when we launch.',
            },
            exists: {
                title: "You're Already on Our Waitlist",
                description:
                    'This email address is already registered. We will notify you when we launch.',
            },
            error: {
                title: 'Oops, something went wrong!',
                description:
                    'We encountered an issue adding you to our waitlist. Please try again.',
            },
        },
    },

    // Waitlist Status Popup
    waitlistStatusPopup: {
        buttonLabelOk: 'OK',
        buttonLabelClose: 'Close',
        buttonLabelTryAgain: 'Try Again',
    },

    // Hero Image with Orbits
    heroImageWithOrbits: {
        imgSrc: '/helmet.png',
        imgAlt: 'Formula 1 Helmet',
    },
};

export default siteConfig;
