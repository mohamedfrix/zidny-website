
'use client';

import React from 'react';
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

export default function FAndQ() {
    const { t } = useLanguage();

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
                    <Accordion type="multiple" className="w-full">
                        {faqQuestions.map((item, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`item-${index}`}
                                className="border-b-2 border-[#2AA4E7] last:border-b-0 py-2"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6 px-0 [&[data-state=open]]:text-[#2AA4E7] [&[data-state=closed]]:text-neutral-gray-2 text-lg font-semibold [&>svg]:hidden group">
                                    <div className="flex items-center justify-between w-full">
                                        <span>{item.question}</span>
                                        <div className="flex-shrink-0 ml-4">
                                            <Plus className="w-6 h-6 text-[#2AA4E7] group-data-[state=open]:hidden" />
                                            <Minus className="w-6 h-6 text-[#2AA4E7] hidden group-data-[state=open]:block" />
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 pt-2 px-0 text-base leading-relaxed text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}