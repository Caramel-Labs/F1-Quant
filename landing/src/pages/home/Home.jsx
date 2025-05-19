import Hero from '../../components/sections/Hero.jsx';
import Hook from '../../components/sections/Hook.jsx';
import Header from '../../components/sections/Header.jsx';
import Footer from '../../components/sections/Footer.jsx';
import Features from '../../components/sections/Features.jsx';

function Home() {
    return (
        <main
            className={`font-custom min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
        >
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features />

            {/* Hook Section */}
            <Hook />

            {/* Footer Section */}
            <Footer />
        </main>
    );
}

export default Home;
