'use client';

import {useLanguage} from "@/hooks/useLanguage";
import {useEffect, useState} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import ServiceCard from "./ServiceCard";
import one_image from "@/assets/images/01.svg";
import two_image from "@/assets/images/02.svg";
import three_image from "@/assets/images/03.svg";
import four_image from "@/assets/images/04.svg";
import Image, { StaticImageData } from "next/image";

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

const colorDrops : {
    id: number;
    background: string;
    colors: {
        color: string;
        size: number;
        initialX: number;
        initialY: number;
        animateX: number;
        animateY: number;
    }[]
}[] = [
    {
        id : 1,
        background: "bg-gradient-to-br from-[#4A6CF7] via-[#3B5CE6] via-[#2D4ED5] to-[#1E40C4]",
        colors : [
            {
                color: '#00FF94', // Ultra vibrant mint green
                size: 700,
                initialX: -40,
                initialY: -35,
                animateX: 60,
                animateY: 70,
            },
            {
                color: '#6BFF44', // Electric lime green
                size: 650,
                initialX: 80,
                initialY: 80,
                animateX: -30,
                animateY: -20,
            },
            {
                color: '#44FF66', // Neon green
                size: 750,
                initialX: 20,
                initialY: -30,
                animateX: 50,
                animateY: 90,
            },
            {
                color: '#00FFB3', // Intense cyan-green
                size: 600,
                initialX: 90,
                initialY: 30,
                animateX: -10,
                animateY: 40,
            },
            {
                color: '#7AFF7A', // Saturated light green
                size: 550,
                initialX: 10,
                initialY: 70,
                animateX: 80,
                animateY: 10,
            }
        ]
    },
    {
        id : 1,
        background: "bg-gradient-to-br from-[#2B2B9A] via-[#1E1B41] via-[#241D4B] to-[#231C5D]",
        colors : [
            {
                color: '#2B2B9A', // Ultra vibrant mint green
                size: 700,
                initialX: -40,
                initialY: -35,
                animateX: 60,
                animateY: 70,
            },
            {
                color: '#3F41A0', // Electric lime green
                size: 650,
                initialX: 80,
                initialY: 80,
                animateX: -30,
                animateY: -20,
            },
            {
                color: '#CB1881', // Neon green
                size: 750,
                initialX: 30,
                initialY: -30,
                animateX: 50,
                animateY: 90,
            },
            {
                color: '#6256BB', // Intense cyan-green
                size: 600,
                initialX: 90,
                initialY: 30,
                animateX: -10,
                animateY: 40,
            },
            {
                color: '#412882', // Saturated light green
                size: 550,
                initialX: 10,
                initialY: 70,
                animateX: 80,
                animateY: 10,
            }
        ]
    },
    {
        id : 1,
        background: "bg-gradient-to-br from-[#1A1D34] via-[#3C2A70] to-[#2F2A72]",
        colors : [
            {
                color: '#584293', // Ultra vibrant mint green
                size: 700,
                initialX: -40,
                initialY: -35,
                animateX: 60,
                animateY: 70,
            },
            {
                color: '#1A1F3F', // Electric lime green
                size: 650,
                initialX: 80,
                initialY: 80,
                animateX: -30,
                animateY: -20,
            },
            {
                color: '#2D52D6', // Neon green
                size: 750,
                initialX: 20,
                initialY: -30,
                animateX: 50,
                animateY: 90,
            },
            {
                color: '#6748A3', // Intense cyan-green
                size: 600,
                initialX: 90,
                initialY: 30,
                animateX: -10,
                animateY: 40,
            },
            {
                color: '#44D29E', // Saturated light green
                size: 550,
                initialX: 10,
                initialY: 70,
                animateX: 80,
                animateY: 10,
            }
        ]
    },
    {
        id : 1,
        background: "bg-gradient-to-br from-[#2D46CE] via-[#3EABE7] to-[#2C778A]",
        colors : [
            {
                color: '#2D3264', // Ultra vibrant mint green
                size: 700,
                initialX: -40,
                initialY: -35,
                animateX: 60,
                animateY: 70,
            },
            {
                color: '#3E5BD6', // Electric lime green
                size: 650,
                initialX: 80,
                initialY: 80,
                animateX: -30,
                animateY: -20,
            },
            {
                color: '#28487C', // Neon green
                size: 750,
                initialX: 20,
                initialY: -30,
                animateX: 50,
                animateY: 90,
            },
            {
                color: '#55C0E1', // Intense cyan-green
                size: 600,
                initialX: 90,
                initialY: 30,
                animateX: -10,
                animateY: 40,
            },
            {
                color: '#C963B3', // Saturated light green
                size: 550,
                initialX: 10,
                initialY: 70,
                animateX: 80,
                animateY: 10,
            }
        ]
    }
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
            <div className={`w-full flex justify-center`}>
                <div className={`w-full md:max-w-[700px] lg:max-w-[900px] grid grid-rows-[auto_auto_auto] grid-cols-1 justify-items-center gap-y-3 py-12 px-4`}>
                    <p className={`text-primary-gradient row-start-1 font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center`}>{t('services.title')}</p>
                    <p className={`text-[14px] row-start-2 md:text-[16px] lg:font-medium lg:text-[18px] text-tertiary text-center max-w-[95%]`}>{t('services.description')}</p>

                    <div className={`w-full lg:max-w-[700px] row-start-3 grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-2 mt-3`}>
                        {
                            services.map((service, index) => (
                                <AspectRatio key={index} ratio={ratio} className={`w-full max-w-[700px]`}>
                                    <ServiceCard
                                        backgroundColor={colorDrops[index].background}
                                        colorDrops={colorDrops[index].colors}
                                    >
                                        <div className=" w-full h-full grid grid-rows-1 grid-cols-1 overflow-hidden">
                                            <div className={`w-full py-4 px-4 sm:px-8 sm:py-10 flex flex-col gap-x-3 sm:gap-y-3 row-start-1 col-start-1 z-10`}>
                                                <p className={`text-white font-bold text-[18px] sm:text-[32px] font-outfit`}>{t(`services.servicesList.${index}.name`)}</p>
                                                <p className={`text-white font-medium text-[11px] sm:text-[16px] font-outfit`}>{t(`services.servicesList.${index}.description`)}</p>
                                            </div>
                                            <div className={`w-full justify-self-end self-end row-start-1 col-start-1 z-0`}>
                                                <Image src={images[index]} alt="Service Image" className={`translate-x-[30px] translate-y-[30px]`} />
                                            </div>

                                        </div>
                                    </ServiceCard>
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