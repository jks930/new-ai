import React from 'react';
import Navbar from '../layouts/Navbar';
import HeroSection from '../components/HeroSection';
import ClientLogos from '../components/ClientLogos';
import FeatureCards from '../components/FeatureCards';
import BenefitsSection from '../components/BenefitsSection';
import StatsSection from '../components/StatsSection';
import ServicesGrid from '../components/ServicesGrid';
import BackOfficeSection from '../components/BackOfficeSection';
import TestimonialSection from '../components/TestimonialSection';
import IndustriesSection from '../components/IndustriesSection';
import PricingSection from '../components/PricingSection';
import RecentStorySection from '../components/RecentStorySection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ClientLogos />
        <FeatureCards />
        <BenefitsSection />
        <StatsSection />
        <ServicesGrid />
        <BackOfficeSection />
        <TestimonialSection />
        <IndustriesSection />
        <PricingSection />
        <RecentStorySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
