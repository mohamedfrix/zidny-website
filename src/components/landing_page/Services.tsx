'use client';

import {useLanguage} from "@/hooks/useLanguage";
import {useEffect, useState} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import one_image from "@/assets/images/01.svg";
import two_image from "@/assets/images/02.svg";
import three_image from "@/assets/images/03.svg";
import four_image from "@/assets/images/04.svg";
import services_01 from "@/assets/images/services_01.svg";
import services_02 from "@/assets/images/services_02.svg";
import services_04 from "@/assets/images/services_04.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


const services : {id : number}[] = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
]

const images : StaticImageData[] = [
    one_image,
    two_image,
    three_image,
    four_image
]

const servicesImages: StaticImageData[] = [
    services_01,
    services_02,
    services_02,
    services_04
]


function ServicesSection () {

    const { t } = useLanguage();

    // State for responsive card width
    const [ratio, setRatio] = useState(0.8); // Default for desktop

    // Function to calculate card width based on screen size
    const calculateCardWidth = () => {
        const width = window.innerWidth;
        if (width < 450) {
            return 0.8;
        }else {
            return 1;
        }
    };

    // Effect to set initial card width and listen for window resize
    useEffect(() => {
        // Set initial card width
        setRatio(calculateCardWidth());

        // Add resize event listener
        const handleResize = () => {
            setRatio(calculateCardWidth());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
                    
            <div className={`w-full flex justify-center`} style={{ backgroundImage: `url(${images[1]})` }}>
                <div className={`w-full md:max-w-[700px] lg:max-w-[900px] grid grid-rows-[auto_auto_auto_auto] grid-cols-1 justify-items-center gap-y-3 py-12 px-4`}>
                    <p className={`text-primary-gradient row-start-1 font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center`}>{t('services.title')}</p>
                    <p className={`text-[14px] row-start-2 md:text-[16px] lg:font-medium lg:text-[18px] text-tertiary text-center max-w-[95%]`}>{t('services.description')}</p>
                    
                    {/* Composant Spline avec conteneur dimensionné */}
                    
                    
                    {/* Grille des services maintenant en row-start-4 */}
                    <div className={`w-full lg:max-w-[700px] row-start-4 grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-2 mt-3`}>
                        {
                            services.map((service, index) => (
                                <AspectRatio key={index} ratio={ratio} className="w-full maw-w-[700px] overflow-hidden">
                                    <div className={`relative w-full h-full rounded-2xl  ${index == 3 ? "bg-[#2AA4E7]" : ""}`}>
                                        <Link href={t(`services.servicesList.${index}.Link`)} >
                                        <Image 
                                            src={servicesImages[index]} 
                                            alt="Background" 
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                        
                                       <div className="relative z-20 w-full h-full pt-4 sm:pb-4 px-4 sm:px-8 sm:py-10 flex flex-col justify-between">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-white font-bold text-[18px] sm:text-[32px] font-outfit">
                                                {t(`services.servicesList.${index}.name`)}
                                            </p>
                                            <p className="text-white font-medium text-[11px] sm:text-[16px] font-outfit">
                                                {t(`services.servicesList.${index}.description`)}
                                            </p>
                                        </div>
                                        
                                        <div className="w-full row-start-1 col-start-1 z-0 flex justify-center items-center sm:block">
                                            <Image 
                                                src={images[index]} 
                                                alt="Service Image" 
                                                className="object-contain sm:translate-x-[40px]  sm:translate-y-[50px]"
                                            />
                                        </div>
                                    </div>
                                        </Link>
                                    </div>
                                </AspectRatio>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default ServicesSection;