"use client";

import React, { useState, useCallback, useRef } from 'react';
import { useLanguage } from "@/hooks/useLanguage";
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAndQProps {
  footerRef: React.RefObject<HTMLElement | null>;
}

// Fonction debounce pour optimiser les performances - with proper typing
const debounce = <T extends unknown[]>(
  func: (...args: T) => void, 
  wait: number
): ((...args: T) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: T) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default function FAndQ({ footerRef }: FAndQProps) {
    const { t } = useLanguage();
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const accordionRef = useRef<HTMLDivElement>(null);
    
    // Fonction optimisée pour calculer la hauteur
    const calculateFooterOffset = useCallback(() => {
        if (!footerRef.current || !accordionRef.current) return;
        
        requestAnimationFrame(() => {
            let totalHeight = 0;
            
            // Utiliser une approche plus efficace
            const openAccordionItems = accordionRef.current?.querySelectorAll('[data-state="open"]');
            
            openAccordionItems?.forEach(trigger => {
                const accordionItem = trigger.closest('.accordion-item');
                const content = accordionItem?.querySelector('.accordion-content');
                if (content) {
                    totalHeight += content.scrollHeight + 16; // Add margin
                }
            });

            if (footerRef.current) {
                footerRef.current.style.transform = `translateY(${Math.max(totalHeight, 10)}px)`;
            }
        });
    }, [footerRef]);

    // Debouncer la fonction pour éviter les calculs répétitifs
    const debouncedCalculateFooterOffset = useCallback(
        debounce(calculateFooterOffset, 150),
        [calculateFooterOffset]
    );

    // Gérer les changements d'état de l'accordion
    const handleAccordionChange = useCallback((values: string[]) => {
        setOpenItems(new Set(values));
        debouncedCalculateFooterOffset();
    }, [debouncedCalculateFooterOffset]);

    // FAQ questions - you can move this to translations later if needed
    const faqQuestions: FAQItem[] = [
        {
            question: t('faq.questions.0.question') || "What services do you offer?",
            answer: t('faq.questions.0.answer') || "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing strategies."
        },
        {
            question: t('faq.questions.1.question') || "How long does a typical project take?",
            answer: t('faq.questions.1.answer') || "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months."
        },
        {
            question: t('faq.questions.2.question') || "Do you provide ongoing support after project completion?",
            answer: t('faq.questions.2.answer') || "Yes, we offer various support packages including maintenance, updates, hosting, and technical support."
        },
        {
            question: t('faq.questions.3.question') || "What is your development process?",
            answer: t('faq.questions.3.answer') || "Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support."
        }
    ];

    return (
        <div className="w-full mt-20 px-5 py-20">
            <div className="w-full flex flex-col items-center gap-y-6 lg:gap-y-12">
                {/* Title Section */}
                <div className="w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] flex flex-col items-center gap-y-3">
                    <p className="text-primary-gradient font-outfit text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-none text-center">
                        {t('faq.title')}
                    </p>
                    <p className="text-[14px] md:text-[16px] md:font-medium text-tertiary text-center">
                        {t('faq.description')}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="w-full max-w-4xl px-4">
                    <Accordion 
                        type="multiple" 
                        className="w-full"
                        ref={accordionRef}
                        onValueChange={handleAccordionChange}
                    >
                        {faqQuestions.map((item, index) => {
                            const itemValue = `item-${index}`;
                            const isOpen = openItems.has(itemValue);
                            
                            return (
                                <AccordionItem 
                                    key={index} 
                                    value={itemValue}
                                    className="accordion-item border-b-2 border-[#2AA4E7] last:border-b-0 py-2"
                                >
                                    <AccordionTrigger className="faq-question text-left hover:no-underline py-6 px-0 text-lg font-semibold [&>svg]:hidden group transition-colors duration-200 ease-in-out"
                                        style={{ 
                                            color: isOpen ? '#2AA4E7' : 'var(--neutral-gray-2, #6B7280)',
                                            willChange: 'color'
                                        }}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span>{item.question}</span>
                                            <div className="flex-shrink-0 ml-4 transition-transform duration-200 ease-in-out" style={{ willChange: 'transform' }}>
                                                {isOpen ? (
                                                    <Minus className="w-6 h-6 text-[#2AA4E7]" />
                                                ) : (
                                                    <Plus className="w-6 h-6 text-[#2AA4E7]" />
                                                )}
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent 
                                        className="accordion-content pb-6 pt-2 px-0 text-base leading-relaxed text-gray-600 transition-all duration-300 ease-in-out"
                                        style={{ willChange: 'height' }}
                                    >
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}