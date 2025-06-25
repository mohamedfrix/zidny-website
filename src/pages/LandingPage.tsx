'use client';

import AboutUs from "@/components/landing_page/AboutUs";
import { LanguageSwitcher } from "@/components/ui/language-switcher";


function LandingPage () {
    return (
        <>
            <div className="fixed top-4 right-4 z-50">
                <LanguageSwitcher />
            </div>
            <AboutUs />
        </>
    );
}

export default LandingPage;