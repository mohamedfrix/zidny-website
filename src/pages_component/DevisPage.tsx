'use client'

import { useLanguage } from "@/context/LanguageContext"
import { useNavBar } from "@/hooks/useNavBar";
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

export type ServiceType = '' |'design' | 'web' | 'mobile' | 'filmmaking';
export type FormDataUnion = formDataDesign | formDataWeb | formDataMobile | formDataFilmmaking | formData;

export interface StepsProps {
    data: FormDataUnion;
    setData: (data: FormDataUnion | ((prev: FormDataUnion) => FormDataUnion)) => void;
    nextStep: () => void;
    previousStep?: () => void;
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
     const { t } = useLanguage();
     const { open, toggleNavBar } = useNavBar();
     const navigator = useRouter();
     const [currentStep, setCurrentStep] = useState(1);
     const [formData, setFormData] = useState<FormDataUnion>(formInitialData);
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

     const handleSubmit = () => {
        console.log('Données du formulaire:', formData);
        // Ici vous pouvez ajouter la logique d'envoi des données vers la base de données 
     }; 

     const navigateGmail = () => {
        navigator.push("mailto:contact@zidnyagency.com");
     }

     const navigateLinkedIn = () => {
        navigator.push("https://www.linkedin.com/in/zidny-agency/");
     }

     const navigateInstagram = () => {
        navigator.push("https://www.instagram.com/zidny.agency/");
     }

     const navigateTikTok = () => {
        navigator.push("https://www.tiktok.com/@zidny.agency");
     }

     return(
        <>
            <section className="min-h-screen flex justify-center items-center p-4 sm:p-6">
                <div className="w-full max-w-6xl min-h-[700px] py-6 grid grid-cols-1 md:grid-cols-[50%_50%] rounded-4xl overflow-hidden shadow-lg">
                    {/* Formulaire */}
                    <div className="bg-white px-4 sm:px-8 md:px-12 py-4 order-2 md:order-1">
                        {/* Bouton retour - va vers home page si step 1, sinon step précédent */}
                        <Image 
                            src={arrow} 
                            alt="Retour" 
                            onClick={currentStep === 1 ? () => navigator.push('/') : previousStep} 
                            className="cursor-pointer mb-4 md:mb-0"
                        />
                        
                        <div className="px-2 sm:px-6 md:px-10 py-4 md:py-10 flex flex-col text-center justify-center">
                            <Progress steps={["01", "02", "03", "04", "05"]} currentStep={currentStep} />
                            <CurrentStepComponent 
                                data={formData} 
                                nextStep={nextStep} 
                                previousStep={previousStep} 
                                setData={setFormData}
                            />
                        </div>
                    </div>

                    {/* Image de fond */}
                    <div className="relative h-64 sm:h-80 md:h-full w-full order-1 md:order-2">
                        <Image
                            src={form_bg}
                            alt="Form Background"
                            fill
                            className="object-cover rounded-2xl md:rounded-2xl rounded-b-none md:rounded-b-2xl"
                        />
                        
                        {/* Overlay pour améliorer la lisibilité sur mobile */}
                        <div className="absolute inset-0  bg-opacity-10 rounded-2xl md:rounded-2xl rounded-b-none md:rounded-b-2xl md:hidden"></div>
                    </div>
                </div>
            </section>
        </>
     )
}

export default DevisPage;