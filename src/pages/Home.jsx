import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';
import Deliverables from '../components/Deliverables';
import HowItWorks from '../components/HowItWorks';
import Solutions from '../components/Solutions';
import Integrations from '../components/Integrations';
import Proof from '../components/Proof';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <IndustrySection />
            <Deliverables />
            <HowItWorks />
            <Solutions />
            <Integrations />
            <Proof />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default Home;
