'use client';

import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "@/components/landing_page/ReviewCard";

interface Review {
    id: number;
    username: string;
    role: string;
    content: string;
    image?: string;
}

interface AnimatedCardsCarouselProps {
    reviews: Review[];
    direction?: 'left-to-right' | 'right-to-left';
    cardWidth?: number;
    animationDuration?: number;
    cardSpacing?: number;
    containerHeight?: string;
}

function AnimatedCardsCarousel({
    reviews,
    direction = 'right-to-left',
    cardWidth = 300,
    animationDuration = 12,
    cardSpacing = 5,
    containerHeight = 'min-h'
}: AnimatedCardsCarouselProps) {
    // Calculate speed based on animation duration
    // Lower speed = slower movement, higher speed = faster movement
    const speed = 100 / animationDuration * 6; // Adjust multiplier for desired speed
    
    // Determine direction for marquee
    const marqueeDirection = direction === 'left-to-right' ? 'left' : 'right';

    return (
        <div 
            className={`w-full relative ${containerHeight}`}
            // style={{ height: containerHeight }}
        >
            <div className=" flex items-center">
                <Marquee
                    direction={marqueeDirection}
                    speed={speed}
                    gradient={false}
                    pauseOnHover={false}
                    pauseOnClick={false}
                    className="h-full"
                >
                    {reviews.map((review, index) => (
                        <div 
                            key={`${review.id}-${index}`}
                            className={`flex-none flex items-center`}
                            style={{ 
                                width: `${cardWidth}px`,
                                marginRight: `${cardSpacing}px`
                            }}
                        >
                            <ReviewCard 
                                username={review.username} 
                                role={review.role} 
                                content={review.content} 
                                image={review?.image} 
                                style="w-full max-w-full" 
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default AnimatedCardsCarousel;
