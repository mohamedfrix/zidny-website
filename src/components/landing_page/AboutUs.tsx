
'use client';

import { useLanguage } from '../../hooks/use_language';
import { ClientOnly } from '../ui/client-only';

function AboutUsContent() {
    const { t } = useLanguage();
    
    return (
        <div className={`w-full h-screen bg-background flex justify-center items-center`}>
            <div className={`translate-y-[10%] w-full grid grid-rows-1 grid-cols-1 justify-items-center`}>
                <div className={`row-start-1 col-start-1 z-10 max-w-[80%] w-[500px] flex flex-col items-center gap-y-[20px]`}>
                    <p className={`text-[50px] font-bold`}>{t('aboutUs.title')}</p>
                    <p className={`text-[18px] text-center`}>{t('aboutUs.description')}</p>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    // Fallback content for SSR
    const fallback = (
        <div className={`w-full h-screen bg-background flex justify-center items-center`}>
            <div className={`translate-y-[10%] w-full grid grid-rows-1 grid-cols-1 justify-items-center`}>
                <div className={`row-start-1 col-start-1 z-10 max-w-[80%] w-[500px] flex flex-col items-center gap-y-[20px]`}>
                    <p className={`text-[50px] font-bold`}>About Us</p>
                    <p className={`text-[18px] text-center`}>We are a passionate team dedicated to creating innovative solutions that make a difference. Our expertise spans across multiple domains, allowing us to deliver comprehensive services that meet our clients&apos; diverse needs.</p>
                </div>
            </div>
        </div>
    );

    return (
        <ClientOnly fallback={fallback}>
            <AboutUsContent />
        </ClientOnly>
    );
}

export default AboutUs;