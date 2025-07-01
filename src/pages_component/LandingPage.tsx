'use client';

import AboutUs from "@/components/landing_page/AboutUs";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import ServicesSection from "@/components/landing_page/Services";
import FeaturesSection from "@/components/landing_page/FeaturesSection";
import ReviewsSection from "@/components/landing_page/ReviewsSection";
import FAndQ from "@/components/landing_page/FAndQ";
import Footer from "@/components/layout/Footer";

function LandingPage() {
    return (
        <>
            <div className="fixed top-4 right-4 z-50">
                <LanguageSwitcher />
            </div>
            <AboutUs />
            <ServicesSection />
            <FeaturesSection />
            <ReviewsSection />
            <FAndQ />
            <Footer/>
        </>
    );
}

export default LandingPage;