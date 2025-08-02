'use client'

import Image from "next/image";
import Project1 from "@/assets/images/Projects/Project1.svg"
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize(); // initial size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

function ProjectsSection() {
    const { width } = useWindowSize();

    // Définir les tailles des cartes selon l'écran
    const getCardSizes = () => {
        if (width < 768) {
            return { active: 250, inactive: 200, gap: 20 }; // mobile
        } else if (width < 1024) {
            return { active: 500, inactive: 300, gap: 30 }; // tablette
        } else {
            return { active: 700, inactive: 400, gap: 40 }; // desktop
        }
    };

    const cardSizes = getCardSizes();

    // Images pour la navigation
    const originalImages = [
        {
            nom: "Architecture Project",
            src: Project1,
            alt: "Project 1",
            title: "Project Preview",
            description: "Architecture Project est un projet tres interessant Scelerisque et at pretium vulputate mi volutpat mattis interdum. Massa malesuada non arcu venenatis. Elit mauris euismod etiam et rutrum senectus cursus consequat. Magna in orci amet iculis luctus. Mi neque eget nascetur commodo ut malesuada n"
        },
        {
            nom: "IncubAT",
            src: Project1,
            alt: "Project 2",
            title: "Project Preview",
            description: "IncubAT est un projet tres interessant Scelerisque et at pretium vulputate mi volutpat mattis interdum. Massa malesuada non arcu venenatis. Elit mauris euismod etiam et rutrum senectus cursus consequat. Magna in orci amet iculis luctus. Mi neque eget nascetur commodo ut malesuada n"
        },
        {
            nom: "Sauvini",
            src: Project1,
            alt: "Project 3",
            title: "Project Preview",
            description: "Sauvini Project est un projet tres interessant Scelerisque et at pretium vulputate mi volutpat mattis interdum. Massa malesuada non arcu venenatis. Elit mauris euismod etiam et rutrum senectus cursus consequat. Magna in orci amet iculis luctus. Mi neque eget nascetur commodo ut malesuada n"
        }
    ];

    // Ajouter des clones pour l'effet de boucle infinie
    const images = [
        originalImages[originalImages.length - 1], // Clone dernier au début
        ...originalImages,
        originalImages[0] // Clone premier à la fin
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index :number) => {
        setCurrentIndex(index);
    };

    // Fonction pour calculer le translateX pour centrer parfaitement
    const getTranslateX = () => {
        const centerOfScreen = width / 2;
        const activeCardCenter = cardSizes.active / 2;
        
        // Position de base : centrer la première carte active (index 1)
        const baseOffset = centerOfScreen - activeCardCenter;
        
        // Calculer le décalage pour chaque carte
        let totalOffset = 0;
        for (let i = 0; i < currentIndex; i++) {
            if (i === 0 || i === images.length - 1) {
                // Cartes clonées (taille inactive)
                totalOffset += cardSizes.inactive + cardSizes.gap;
            } else {
                // Cartes originales
                const isActive = i === currentIndex;
                const cardWidth = isActive ? cardSizes.active : cardSizes.inactive;
                totalOffset += cardWidth + cardSizes.gap;
            }
        }
        
        return baseOffset - totalOffset;
    };

    // Fonctions pour obtenir les informations du projet actuel
    const getCurrentProjectDescription = () => {
        if (currentIndex === 0) {
            return originalImages[originalImages.length - 1].description;
        } else if (currentIndex === images.length - 1) {
            return originalImages[0].description;
        } else {
            return originalImages[currentIndex - 1].description;
        }
    };

    const getCurrentProjectName = () => {
        if (currentIndex === 0) {
            return originalImages[originalImages.length - 1].nom;
        } else if (currentIndex === images.length - 1) {
            return originalImages[0].nom;
        } else {
            return originalImages[currentIndex - 1].nom;
        }
    };

    return (
        <>
            <div className={`w-full min-h-[70vh] mt-20 lg:mt-20 justify-center`}>
                <div className={`w-full flex flex-col items-center gap-y-10`}>
                    <div className={`w-full h-min grid grid-rows-[auto_auto_auto] grid-cols-1 gap-y-2 justify-items-center`}>
                        <p className={`text-primary-gradient row-start-1 font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center`}>Projects Section</p>
                        <p className={`max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-[14px] row-start-2 md:text-[16px] lg:font-medium lg:text-[18px] text-tertiary text-center`}></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[30%_70%] gap-3 sm:gap-8 md:gap-16 lg:gap-28 px-4 md:px-8 lg:px-0">
                        <div>
                            <p className="text-primary-gradient text-3xl lg:text-4xl max-w-xl font-semibold text-center md:text-left">{getCurrentProjectName()}</p>
                        </div>
                        <div>
                            <p className="text-tertiary max-w-2xl text-sm md:text-base lg:text-[15px] text-center md:text-left leading-relaxed">{getCurrentProjectDescription()}</p>
                        </div>
                    </div>
                </div>

                {/* Carousel avec centrage parfait */}
                <div className="relative w-full mt-10 overflow-hidden">
                    {/* Container des images */}
                    <div 
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(${getTranslateX()}px)`,
                            willChange: 'transform'

                        }}
                    >
                        {images.map((image, index) => {
                            const isActive = index === currentIndex;
                            const cardWidth = isActive ? cardSizes.active : cardSizes.inactive;
                            const cardHeight = isActive ? 380 : 320;
                            
                            return (
                                <div 
                                    key={index}
                                    className={`relative rounded-2xl border overflow-hidden flex-shrink-0 transition-all duration-700 cursor-pointer ${
                                        isActive 
                                            ? 'opacity-100 ' 
                                            : 'opacity-90 hover:opacity-95'
                                    }`}
                                    style={{
                                        width: `${cardWidth}px`,
                                        height: `${cardHeight}px`,
                                        marginRight: `${cardSizes.gap}px`
                                    }}
                                    onClick={() => goToSlide(index)}
                                >
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className={`object-cover transition-filter duration-1000 ${
                                            !isActive ? ' grayscale' : ''
                                        }`}
                                    />
                                    <div className={`absolute inset-0 flex items-center justify-center ${
                                        !isActive ? 'bg-black/40' : 'bg-black/20'
                                    }`}>
                                        <div className={`text-white font-medium text-center px-4 transition-all duration-500 ${
                                            isActive 
                                                ? 'text-2xl opacity-100' 
                                                : 'hidden'
                                        }`}>
                                            Project Preview
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Boutons de navigation */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-30 shadow-xl hover:scale-110"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-30 shadow-xl hover:scale-110"
                        aria-label="Image suivante"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection;