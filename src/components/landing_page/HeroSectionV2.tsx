import Image from "next/image";
import bg2 from "@/assets/images/Hero/bg2.svg"
import card1 from "@/assets/images/Hero/card1.svg"
import card2 from "@/assets/images/Hero/card2.svg"
import card3 from "@/assets/images/Hero/card3.svg"
import card4 from "@/assets/images/Hero/card4.svg"
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

function HeroSectionV2() {
    const {t} = useLanguage()
    const [isMobile, setIsMobile] = useState(false);

    // Détection mobile pour désactiver les animations lourdes
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="w-full bg-[#07142C] relative overflow-hidden">
            {/* Container principal avec hauteur fixe simple */}
            <div className="w-full" style={{ minHeight: '100dvh' }}>
                
                {/* Background simplifié - UN SEUL LAYER */}
                <div className="absolute inset-0 z-0">
                 
                            <Image 
                                src={bg2} 
                                alt="" 
                                fill
                                className="object-cover"
                                priority 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#07142C]/40" />
        
                </div>

                {/* SVG seulement sur desktop */}
                {!isMobile && (
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        {/* Version statique des SVG - pas d'animation */}
                        <svg 
                            className="absolute right-1/3 h-full w-full opacity-30" 
                            width="318" 
                            height="615" 
                            viewBox="0 0 318 615" 
                            fill="none"
                        >
                            <path 
                                d="M1 819L1 501.914V400.609V222C1 208.745 11.7452 198 25 198H169.667H293.5C306.755 198 317.5 187.255 317.5 174V0.5" 
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                )}
                
                {/* Contenu principal */}
                <div className="relative z-20 w-full h-full">
                    <div className="max-w-7xl mx-auto px-4 h-full">
                        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20">
                               {/* Section images - layout simplifié */}
                            <div className="relative lg:order-2">
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    <div className="space-y-4 lg:space-y-6">
                                        <div className="w-full">
                                            <Image 
                                                src={card1} 
                                                alt="Service 1" 
                                                className="w-full h-auto rounded-lg"
                                                loading={isMobile ? "lazy" : "eager"}
                                            />
                                        </div>
                                        <div className="w-4/5 ml-auto">
                                            <Image 
                                                src={card2} 
                                                alt="Service 2" 
                                                className="w-full h-auto rounded-lg"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 pt-8">
                                        <div className="w-full">
                                            <Image 
                                                src={card3} 
                                                alt="Service 3" 
                                                className="w-full h-auto rounded-lg"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Image 
                                                src={card4} 
                                                alt="Service 4" 
                                                className="w-full h-auto rounded-lg"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>                         
                            {/* Section texte */}
                            <div className="lg:order-1 text-white font-outfit space-y-6 lg:pr-8">
                                <p className="text-sm md:text-base font-normal opacity-80">
                                    On digitalise même ta grand-mère.
                                </p>
                                
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                    {t("heroSection.title1") || "Solutions Digitales"}
                                </h1>
                                
                                <p className="text-lg md:text-xl lg:text-2xl font-normal opacity-90 max-w-2xl">
                                    {t("heroSection.description") || "Description"}.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <Link href="/Devis" className="inline-block">
                                        <div className="bg-[#0A60AD] hover:bg-[#0856A0] transition-colors px-6 py-3 rounded-3xl text-center cursor-pointer">
                                            {t("heroSection.button") || "Commencer"}
                                        </div>
                                    </Link>
                                    
                                    <div className="flex items-center justify-center border border-white/30 hover:border-white/50 transition-colors rounded-3xl px-5 py-3 cursor-pointer">
                                        <span className="mr-2">Explore</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.894 12.7V3.75" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M11.8998 20.3539C13.1558 20.3539 17.1708 13.9899 16.4488 13.2679C15.7268 12.5459 8.14181 12.4769 7.35081 13.2679C6.55981 14.0599 10.6448 20.3539 11.8998 20.3539Z" stroke="currentColor" strokeWidth="1.5"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionV2