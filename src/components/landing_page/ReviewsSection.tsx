'use client';

import { useLanguage } from "@/hooks/useLanguage";
import { ReviewsApi } from "@/api/reviews";
import AnimatedCardsCarousel from "@/components/landing_page/AnimatedCardsCarousel";
import React, { useState, useEffect } from "react";

const reviews = await ReviewsApi.getReviews();

function ReviewsSection() {
    const { t } = useLanguage();

    // State for responsive card width
    const [cardWidth, setCardWidth] = useState(450); // Default for desktop

    // Function to calculate card width based on screen size
    const calculateCardWidth = () => {
        const width = window.innerWidth;
        if (width > 1000) {
            return 450;
        } else if (width > 700) {
            return 350;
        } else {
            return 280;
        }
    };

    // Effect to set initial card width and listen for window resize
    useEffect(() => {
        // Set initial card width
        setCardWidth(calculateCardWidth());

        // Add resize event listener
        const handleResize = () => {
            setCardWidth(calculateCardWidth());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={`w-full mt-20 px-5 py-20`}>
            <div className={`w-full flex flex-col items-center gap-y-6 lg:gap-y-12`}>
                <div className={`w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] flex flex-col items-center gap-y-3`}>
                    <p className="text-primary-gradient font-outfit text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-none text-center">
                        {t('reviews.title')}
                    </p>
                    <p className="text-[14px] md:text-[16px] md:font-medium text-tertiary text-center">
                        {t('reviews.description')}
                    </p>
                </div>

                <div className="w-full flex flex-col gap-y-[20px] items-center">
                    <AnimatedCardsCarousel 
                    reviews={reviews.reviews}
                    direction="right-to-left"
                    cardWidth={cardWidth}
                    animationDuration={12}
                    cardSpacing={20}
                    containerHeight="min-h"
                    />
                    <AnimatedCardsCarousel
                        reviews={reviews.reviews}
                        direction={'left-to-right'}
                        cardWidth={cardWidth}
                        animationDuration={12}
                        cardSpacing={20}
                        containerHeight="min-h"
                    />
                </div>
                
            </div>
        </div>
    );
}

export default ReviewsSection;