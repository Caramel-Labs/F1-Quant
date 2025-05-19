const getAccentClass = (color) => `text-${color}-500`;

const siteConfig = {
    // Colors
    // NOTE these colors do not work
    // as the Tailwind compiler cannot detect dynamic styles
    accentColor: 'red',
    lightModeColor: 'white',
    darkModeColor: 'zinc',

    // Header Section
    header: {
        logoImgSrc: '/logo.png',
        logoImgAlt: 'QuantF1 Logo',
    },

    // Hero Section
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
        buttonLabel: 'Join Waitlist',
    },

    // Features Section
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

    // Hook Section
    hook: {
        title: 'Bet Before the Odds Shift',
        content:
            'In racing and betting, timing is everything. Secure early access and stay a lap ahead.',
    },

    // Footer Section
    footer: {
        company: 'Caramel Labs',
        companyLink: 'https://x.com/caramel_labs',
    },
};

export default siteConfig;
