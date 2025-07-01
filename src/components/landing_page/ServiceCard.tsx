'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ColorDrop {
    color: string;
    size: number;
    initialX: number;
    initialY: number;
    animateX: number;
    animateY: number;
}

interface DesignServiceCardProps {
    children: React.ReactNode;
    backgroundColor?: string;
    colorDrops?: ColorDrop[];
    className?: string;
    style?: string;
}

function ServiceCard({
    children,
    backgroundColor = 'bg-gradient-to-br from-blue-500 to-purple-600',
    colorDrops,
    className = '',
    style = ''
}: DesignServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Default color drops configuration - large overlapping circles for mixed color effect
    const defaultDrops: ColorDrop[] = [
        {
            color: '#ff6b6b',
            size: 400,          // Very large for color mixing
            initialX: -30,      // Far outside boundaries
            initialY: -25,      // Far outside boundaries
            animateX: 70,       // Move across for mixing
            animateY: 80,       // Move across for mixing
        },
        {
            color: '#4ecdc4',
            size: 450,          // Very large for color mixing
            initialX: 70,       // Overlapping positioning
            initialY: 70,       // Overlapping positioning
            animateX: -20,      // Cross movement
            animateY: -15,      // Cross movement
        },
        {
            color: '#45b7d1',
            size: 500,          // Largest for base mixing
            initialX: 30,       // Center overlap
            initialY: -20,      // Overlapping from top
            animateX: 40,       // Subtle movement
            animateY: 85,       // Move to bottom overlap
        },
        {
            color: '#ff9a9e',
            size: 350,          // Additional layer for more mixing
            initialX: 80,       // Right side
            initialY: 20,       // Mid position
            animateX: 10,       // Move to left
            animateY: 60,       // Move down
        }
    ];

    // Use provided colorDrops or default configuration
    const drops = colorDrops || defaultDrops;

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl h-full w-full ${className}`}
            // style={{ minHeight: '300px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Background Layer with Base Color */}
            <div className={`absolute inset-0 ${backgroundColor}`} />

            {/* Animated Color Drops Layer */}
            <div className="absolute inset-0">
                {drops.map((drop, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full opacity-50 blur-xl"
                        style={{
                            backgroundColor: drop.color,
                            width: drop.size,
                            height: drop.size,
                            filter: 'blur(35px) saturate(150%)', // Enhanced saturation
                            mixBlendMode: 'screen', // Better color mixing
                        }}
                        initial={{
                            x: `${drop.initialX}%`,
                            y: `${drop.initialY}%`,
                        }}
                        animate={{
                            x: isHovered ? `${drop.animateX}%` : `${drop.initialX}%`,
                            y: isHovered ? `${drop.animateY}%` : `${drop.initialY}%`,
                            scale: isHovered ? 1.3 : 1,
                            rotate: isHovered ? 360 : 0,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeInOut',
                            delay: index * 0.15, // Slightly more stagger for fluid movement
                        }}
                    />
                ))}
            </div>

            {/* Enhanced Blur Layer for depth */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/5" />

            {/* Foreground Content Layer */}
            <div className={`relative z-10 h-full w-full flex flex-col justify-center items-center text-white ${style}`}>
                <motion.div
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </div>

            {/* Subtle Border Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ 
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1)' 
                }}
                animate={{ 
                    boxShadow: isHovered 
                        ? '0 0 20px rgba(255, 255, 255, 0.3)' 
                        : '0 0 0 1px rgba(255, 255, 255, 0.1)' 
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default ServiceCard;