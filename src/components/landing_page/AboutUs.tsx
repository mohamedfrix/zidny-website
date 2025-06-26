'use client';

import { useLanguage } from '@/hooks/useLanguage';
import Image from "next/image";
import background_image from "@/assets/images/about_us_background.svg";
import background_left from "@/assets/images/about_us_left.svg";
import background_right from "@/assets/images/about_us_right.svg";

function AboutUs() {
    const { t } = useLanguage();
    
    return (
        <div className="w-full min-h-[70vh] lg:min-h-[95vh] bg-background flex justify-center items-center">
            <div className="py-8 translate-y-[10%] w-full grid grid-rows-1 grid-cols-1 justify-items-center items-center overflow-hidden">
                <div className="lg:hidden rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 px-4 py-6 row-start-1 col-start-1 z-10 max-w-[80%] md:max-w-[50%] w-[500px] flex flex-col items-center gap-y-[20px] md:gap-y-[35px]">
                    <p className="text-primary-gradient font-outfit text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-none text-center">{t('aboutUs.title')}</p>
                    <p className="text-[14px] md:text-[16px] text-tertiary text-center">{t('aboutUs.description')}</p>
                </div>

                 <div className="hidden lg:flex px-4 py-6 row-start-1 col-start-1 z-10 max-w-[80%] md:max-w-[50%] lg:w-[50%] lg:max-w-[50%] w-[500px] flex-col items-center gap-y-[20px] md:gap-y-[30px] lg:gap-y-[20px]">
                    <p className="text-primary-gradient font-outfit text-[56px] md:text-[64px] lg:text-[72px] font-bold leading-none text-center">{t('aboutUs.title')}</p>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] lg:font-medium text-tertiary text-center">{t('aboutUs.description')}</p>
                </div>

                <div className={`z-0 row-start-1 col-start-1 w-full hidden lg:block`}>
                    <Image src={background_image} alt="" className="w-full" />
                </div>

                <div className={`z-0 row-start-1 col-start-1 lg:hidden justify-self-start max-w-[40%] sm:self-end`}>
                    <Image src={background_left} alt={''} />
                </div>

                <div className={`z-0 row-start-1 col-start-1 lg:hidden justify-self-end max-w-[40%] sm:self-end`}>
                    <Image src={background_right} alt={''} />
                </div>

            </div>
        </div>
    );
}

export default AboutUs;