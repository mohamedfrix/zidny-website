'use client'

import { useRouter } from "next/navigation";
import form_bg from '@/assets/images/form_bg.svg'
import basique_bg from '@/assets/images/Form/Offre1.jpg'
import business_bg from '@/assets/images/Form/Offre2.jpg'
import premium_bg from '@/assets/images/Form/Offre3.jpg'
import basique_bg_mob from '@/assets/images/Form/Offre1_Mob.jpg'
import business_bg_mob from '@/assets/images/Form/Offre2_Mob.jpg'
import premium_bg_mob from '@/assets/images/Form/Offre3_Mob.jpg'
import arrow from '@/assets/images/arrow.svg'
import Image from "next/image";
import { useState, useEffect } from "react";
import Progress from "@/components/form/Progress";
import Step_2_Web from "@/components/form/Step_2_Web"
import Step_5 from "@/components/form/Step_5"
import Step_Offers from "@/components/form/Step_Offers";
import logo from "@/assets/images/logo.svg"

export type ServiceType = '' |'design' | 'web' | 'mobile' | 'filmmaking';
export type FormDataUnion = formData;

export interface StepsProps {
    data: FormDataUnion;
    setData: (data: FormDataUnion | ((prev: FormDataUnion) => FormDataUnion)) => void;
    nextStep: () => void;
    previousStep?: () => void;
    showThankYou?: () => void;
}

export interface formData {
    projectName : string ;
    projectType : ServiceType;
    clientName : string ; 
    clientPhone : string ; 
    clientEmail : string ; 
    projectDescription : string;
    clientAgencyExperience : string ; 
    estimationPrice : string ;
    estimationDuration : string ;
    selectedOffer?: string;
}

// Base form initial data
export const formInitialData: formData = {
  projectName: '',
  projectType: '', 
  clientName: '',
  clientPhone: '',
  clientEmail: '',
  projectDescription: '',
  clientAgencyExperience: '',
  estimationPrice: '',
  estimationDuration: '',
  selectedOffer: ''
};

const steps = [ Step_2_Web, Step_Offers ,Step_5];

function DevisPage() {
    
     const router = useRouter();
     const [currentStep, setCurrentStep] = useState(1);
     const [formData, setFormData] = useState<FormDataUnion>(formInitialData);
     const [showThankYou, setShowThankYou] = useState(false);
     const [isMobile, setIsMobile] = useState(false);
     const CurrentStepComponent = steps[currentStep - 1];

     // Détection de la taille d'écran
     useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
     }, []);

     // Fonction pour obtenir le background selon l'offre sélectionnée et la taille d'écran
     const getBackgroundImage = () => {
        // Si nous sommes à l'étape Step_Offers (étape 2) et qu'une offre est sélectionnée
        if (currentStep === 2 && formData.selectedOffer) {
            if (isMobile) {
                // Versions mobiles
                switch (formData.selectedOffer) {
                    case 'starter':
                        return basique_bg_mob;
                    case 'business':
                        return business_bg_mob;
                    case 'premium':
                        return premium_bg_mob;
                    default:
                        return form_bg;
                }
            } else {
                // Versions desktop
                switch (formData.selectedOffer) {
                    case 'starter':
                        return basique_bg;
                    case 'business':
                        return business_bg;
                    case 'premium':
                        return premium_bg;
                    default:
                        return form_bg;
                }
            }
        }
        return form_bg;
     };

     const nextStep = () => {
        if(currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } 
     };

     const previousStep = () => {
        if(currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
     };

     const handleShowThankYou = () => {
        setShowThankYou(true);
     };

     const handleBackToHome = () => {
         try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'ThankYouPageVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
            router.push('/');
        };

     return(
        <>
            <section className="min-h-screen flex justify-center items-center p-4 sm:p-6 bg-gray-50">
                {/* Container principal centré */}
                <div className="relative w-full max-w-6xl min-h-[700px] bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Grid principal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Section formulaire */}
                        <div className="relative px-4 sm:px-8 md:px-12 py-6 order-2 md:order-1 flex flex-col">
                            {/* Bouton retour */}
                            <div className="mb-6">
                                <Image 
                                    src={arrow} 
                                    alt="Retour" 
                                    onClick={currentStep === 1 ? () => router.push('/') : previousStep} 
                                    className="cursor-pointer w-6 h-6 hover:scale-110 transition-transform duration-200"
                                />
                            </div>
                            
                            {/* Contenu du formulaire */}
                            <div className="flex-1 flex flex-col justify-center px-2 sm:px-6 md:px-8">
                                <div className="space-y-8">
                                    {/* Progress affiché normalement sauf sur mobile à l'étape 2 */}
                                    <div className={`${isMobile && currentStep === 2 ? 'hidden' : 'block'}`}>
                                        <Progress steps={["01", "02" , "3"]} currentStep={currentStep} />
                                    </div>
                                    <CurrentStepComponent 
                                        data={formData} 
                                        nextStep={nextStep} 
                                        previousStep={previousStep} 
                                        setData={setFormData}
                                        showThankYou={handleShowThankYou}
                                    />
                                </div>
                            </div>
                            
                            {/* Progress en bas uniquement sur mobile à l'étape 2 */}
                         
                        </div>

                        {/* Section image de fond avec logo - Background dynamique responsive */}
                        <div className="relative h-80 sm:h-80 md:h-full w-full order-1 md:order-2 overflow-hidden">
                            <Image
                                key={`${formData.selectedOffer || 'default'}-${isMobile ? 'mobile' : 'desktop'}`}
                                src={getBackgroundImage()}
                                alt="Form Background"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                className="object-cover object-center transition-opacity duration-500 ease-in-out"
                            />
                            
                            {/* Logo positionné sur le background */}
                            <div className={`${formData.selectedOffer ? "hidden" : "absolute"} inset-0 flex items-center justify-center sm:justify-start sm:items-start z-20 p-4 sm:p-8`}>
                                <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-[50px] opacity-90 transition-opacity duration-300">
                                    <Image 
                                        src={logo} 
                                        alt="Zidny Agency Logo" 
                                        fill  
                                        sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 100px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Composant de remerciement */}
            {showThankYou && (
                    <div className="fixed inset-0 bg-[#0C224B] bg-opacity-50 flex items-center justify-center z-50 p-4">
                    {/* Contenu modal */}
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative z-10">
                        {/* Logo */}
                        <div className="mb-6">
                            <div className="w-20 h-20 mx-auto relative">
                                <Image 
                                    src={logo} 
                                    alt="Zidny Agency Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Titre */}
                        <h2 className="text-2xl font-outfit font-semibold text-[#2AA4E7] mb-4">
                            Merci pour votre confiance !
                        </h2>

                        {/* Message */}
                        <p className="text-[#C2C4C7] font-outfit mb-6 leading-relaxed">
                            Votre demande a été envoyée avec succès. Notre équipe va étudier votre projet et vous contacter dans les plus brefs délais.
                        </p>

                        {/* Bouton de retour */}
                        <button
                            onClick={handleBackToHome}
                            className="w-full bg-[#0A60AD] text-white py-3 px-6 rounded-3xl font-semibold font-outfit cursor-pointer hover:bg-[#084d8f] transition-all duration-200"
                        >
                            Retour à l&apos;accueil
                        </button>
                    </div>
                </div>
            )}
        </>
     )
}

export default DevisPage;