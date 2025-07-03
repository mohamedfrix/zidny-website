'use client';

import AboutUs from "@/components/landing_page/AboutUs";
import ServicesSection from "@/components/landing_page/Services";
import FeaturesSection from "@/components/landing_page/FeaturesSection";
// import ReviewsSection from "@/components/landing_page/ReviewsSection";
import FAndQ from "@/components/landing_page/FAndQ";

import HeroSection from "@/components/landing_page/HeoSection";
import NavBar from "@/components/layout/NavBar";
import { useNavBar } from "@/hooks/useNavBar";
import add_icon from "@/assets/images/add.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRouter } from "next/navigation";

import gmail_icon from "@/assets/images/gmail.svg";
import instagram_icon from "@/assets/images/instagram.svg";
import linkedIn_icon from "@/assets/images/linkedIn.svg";
import tiktok_icon from "@/assets/images/tiktok.svg";

import Footer from "@/components/layout/Footer";


function LandingPage() {

    const { open, toggleNavBar } = useNavBar();
    const { t } = useLanguage();
    const navigator = useRouter();

    const navigateGmail = () => {
        navigator.push("mailto:contact@zidnyagency.com");
    }

    const navigateLinkedIn = () => {
        navigator.push("https://www.linkedin.com/in/zidny-agency/");
    }

    const navigateInstagram = () => {
        navigator.push("https://www.instagram.com/zidny.agency/");
    }

    const navigateTikTok = () => {
        navigator.push("https://www.tiktok.com/@zidny.agency");
    }

    return (
        <>
            <div className={`w-full grid grid-rows-1 grid-cols-1 h-[100vh] overflow-hidden`}>
                <motion.div className={`w-[60px] h-[60px] bg-[#2AA4E7] rounded-full flex justify-center items-center row-start-1 col-start-1 justify-self-center self-center z-50 translate-x-[20px] lg:-translate-x-[10px]`}
                    onClick={toggleNavBar}
                    initial={false}
                    animate={{
                        opacity: !open ? 0 : 1,
                        display: !open ? "none" : "flex"
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={add_icon} alt="Add Icon" className={`w-[35px] h-[35px]`} />
                </motion.div>

                <div className={`row-start-1 col-start-1 self-center bg-background z-10 transition-all duration-1000 overflow-y-auto ${open ? 'w-[80%] lg:w-[70%] h-[80%] -translate-x-[30%]' : 'w-full h-full'}`}>
                    <NavBar />
                    <HeroSection />
                    <AboutUs />
                    <ServicesSection />
                    <FeaturesSection />
                    {/* <ReviewsSection /> */}
                    <FAndQ />
                    <Footer />

                    
                </div>
                <div className={`w-full row-start-1 col-start-1 h-[100vh] bg-[#07467D] z-0 grid row-start-1 col-start-1 justify-items-end items-center px-2 md:px-8 `}>
                    <div className={`flex flex-col gap-y-10 max-w-[40%] lg:mr-18 xl:mr-22`}>
                        <div className={`flex flex-col lg:flex-row gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-34 w-full `}>
                            <div className={`flex flex-col gap-y-4 md:gap-y-6`}>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.homescreen")}</p>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.aboutus")}</p>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.contactus")}</p>
                            </div>
                            <div className={`flex flex-col gap-y-4 md:gap-y-6`}>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.filmingDepartment")}</p>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.designDepartment")}</p>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.webDepartment")}</p>
                                <p className={`text-white hover:text-[#2AA4E7] cursor-pointer font-semibold text-[14px] md:text-[18px] lg:text-[22px] font-outfit`}>{t("navbar.mobileDepartment")}</p>
                            </div>
                        </div>

                        <div className={`flex item-center gap-x-6 lg:gap-x-10`}>
                            <Image src={gmail_icon} alt="Gmail Icon" className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-120 transition-all duration-300`} onClick={navigateGmail} />
                            <Image src={linkedIn_icon} alt="Gmail Icon" className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-120 transition-all duration-300`} onClick={navigateLinkedIn} />
                            <Image src={instagram_icon} alt="Gmail Icon" className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-120 transition-all duration-300`} onClick={navigateInstagram} />
                            <Image src={tiktok_icon} alt="Gmail Icon" className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-120 transition-all duration-300`} onClick={navigateTikTok} />
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default LandingPage;