'use client'


import { useRouter } from "next/navigation";
import form_bg from '@/assets/images/form_bg.svg'
import arrow from '@/assets/images/arrow.svg'
import Image from "next/image";
import { useState } from "react";
import Progress from "@/components/form/Progress";
import Step_1 from "@/components/form/Step_1"
import Step_2 from "@/components/form/Step_2"
import Step_3 from "@/components/form/Step_3"
import Step_4 from "@/components/form/Step_4"
import Step_5 from "@/components/form/Step_5"
import logo from "@/assets/images/logo.svg"

export type ServiceType = '' |'design' | 'web' | 'mobile' | 'filmmaking';
export type FormDataUnion = formDataDesign | formDataWeb | formDataMobile | formDataFilmmaking | formData;

export interface StepsProps {
    data: FormDataUnion;
    setData: (data: FormDataUnion | ((prev: FormDataUnion) => FormDataUnion)) => void;
    nextStep: () => void;
    previousStep?: () => void;
    showThankYou?: () => void; // Nouvelle prop pour afficher le remerciement
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
}

export interface formDataDesign extends formData {
    projectType : "design";
    designType : string[];
    haveVisualId : boolean ;
    style : string[];
    haveInspiration : boolean ; 
    inspirationLink : string ;
}

export interface formDataWeb extends formData {
    projectType : "web";
    websiteType : string[];
    designExpectation : string;
    functionalities : string[];
}

export interface formDataMobile extends formData {
    projectType : "mobile";
    applicationPlatform : string;
    applicationHosting : boolean;
    designExpectation : string;
    functionalities : string[];
}

export interface formDataFilmmaking extends formData {
     projectType : "filmmaking";
     videoType : string[];
     publicationPlatform : string;
     haveScript : boolean ; 
     videoDuration : string;
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
  estimationDuration: ''
};

// Design form initial data
export const formInitialDataDesign: formDataDesign = {
  ...formInitialData,
  projectType: 'design',
  designType: [],
  haveVisualId: false,
  style: [],
  haveInspiration: false,
  inspirationLink: ''
};

// Web form initial data
export const formInitialDataWeb: formDataWeb = {
  ...formInitialData,
  projectType: 'web',
  websiteType: [],
  designExpectation: '',
  functionalities: []
};

// Mobile form initial data
export const formInitialDataMobile: formDataMobile = {
  ...formInitialData,
  projectType: 'mobile',
  applicationPlatform: '',
  applicationHosting: false,
  designExpectation: '',
  functionalities: []
};

// Filmmaking form initial data
export const formInitialDataFilmmaking: formDataFilmmaking = {
  ...formInitialData,
  projectType: 'filmmaking',
  videoType: [],
  publicationPlatform: '',
  haveScript: false,
  videoDuration: ''
};

const steps = [Step_1, Step_2, Step_3, Step_4, Step_5];

function DevisPage() {
    
     const router = useRouter(); // Une seule déclaration de useRouter
     const [currentStep, setCurrentStep] = useState(1);
     const [formData, setFormData] = useState<FormDataUnion>(formInitialData);
     const [showThankYou, setShowThankYou] = useState(false); // État pour afficher le remerciement
     const CurrentStepComponent = steps[currentStep - 1];

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
                                    <Progress steps={["01", "02", "03", "04", "05"]} currentStep={currentStep} />
                                    <CurrentStepComponent 
                                        data={formData} 
                                        nextStep={nextStep} 
                                        previousStep={previousStep} 
                                        setData={setFormData}
                                        showThankYou={handleShowThankYou} // Passer la fonction showThankYou
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section image de fond avec logo */}
                        <div className="relative h-64 sm:h-80 md:h-full w-full order-1 md:order-2">
                            {/* Image de fond */}
                            <Image
                                src={form_bg}
                                alt="Form Background"
                                fill
                                className="object-cover"
                            />
                            
                            {/* Overlay pour améliorer le contraste */}
                            <div className="absolute inset-0  bg-opacity-20"></div>
                            
                            {/* Logo Z positionné sur le background */}
                           <div className="absolute sm:mt-8 inset-0 flex items-center justify-center sm:justify-start sm:items-start">
                                <div className="relative w-48 h-48 md:w-full md:h-[50px] opacity-90 transition-opacity duration-300">
                                    <Image 
                                    src={logo} 
                                    alt="Zidny Agency Logo" 
                                    fill  
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
                    {/* Overlay avec image de fond */}
                   
                    
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