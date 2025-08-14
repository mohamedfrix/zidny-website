import React, { useState } from 'react';
import { formDataDesign, formDataFilmmaking, formDataMobile, formDataWeb, StepsProps } from '@/pages_component/DevisPage';
import form_icon_1 from '@/assets/images/form_icon_1.svg'
import Image from 'next/image'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function Step_5({ data, setData,  showThankYou }: StepsProps) {

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        try {
            // Préparer les données de base
            const baseData = {
                access_key: "e3619547-b112-4be4-9418-1839d1045548",
                name: data.clientName,
                phone: data.clientPhone,
                email: data.clientEmail,
                experience: data.clientAgencyExperience,
                Duration: data.estimationDuration,
                Price: data.estimationPrice,
                Description: data.projectDescription,
                projectType: data.projectType,
                projectName: data.projectName
            };

            // Ajouter les données spécifiques selon le type de projet
            let specificData = {};
            
            switch (data.projectType) {
                case 'design':
                    const designData = data as formDataDesign;
                    specificData = {
                        designType: designData.designType?.join(', ') || '',
                        haveVisualId: designData.haveVisualId,
                        style: designData.style?.join(', ') || '',
                        haveInspiration: designData.haveInspiration,
                        inspirationLink: designData.inspirationLink || ''
                    };
                    break;
                    
                case 'web':
                    const webData = data as formDataWeb;
                    specificData = {
                        websiteType: webData.websiteType?.join(', ') || '',
                        designExpectation: webData.designExpectation || '',
                        functionalities: webData.functionalities?.join(', ') || ''
                    };
                    break;
                    
                case 'mobile':
                    const mobileData = data as formDataMobile;
                    specificData = {
                        applicationPlatform: mobileData.applicationPlatform || '',
                        applicationHosting: mobileData.applicationHosting,
                        designExpectation: mobileData.designExpectation || '',
                        functionalities: mobileData.functionalities?.join(', ') || ''
                    };
                    break;
                    
                case 'filmmaking':
                    const filmmakingData = data as formDataFilmmaking;
                    // Ajouter les propriétés spécifiques au filmmaking si elles existent
                    specificData = {
                        videoType: filmmakingData.videoType?.join(', ') || '',
                        publicationPlatform: filmmakingData.publicationPlatform || '',
                        haveScript: filmmakingData.haveScript,
                        videoDuration: filmmakingData.videoDuration || ''
                    };
                    break;
                    
                ;
            }

            // Combiner toutes les données
            const finalData = {
                ...baseData,
                ...specificData
            };

            console.log('Données à envoyer:', finalData);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(finalData),
            });

            const result = await response.json();
            if (result.success) {
                // Afficher le composant de remerciement au lieu de l'alert
                if (showThankYou) {
                    showThankYou();
                }
                
                // Optionnel : rediriger après un délai
                // setTimeout(() => {
                //     router.push('/');
                // }, 3000);
            } else {
                console.error('Erreur lors de l\'envoi:', result);
                alert('Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
            alert('Une erreur réseau s\'est produite. Veuillez vérifier votre connexion et réessayer.');
        }
    }

    const [fullName, setFullName] = useState(data.clientName || "");
    const [email, setEmail] = useState(data.clientEmail || "");
    const [phoneNumber, setPhoneNumber] = useState(data.clientPhone || "");

    const handleAgencyExperienceChange = (experience: string) => {
        setData(prev => ({
            ...prev,
            clientAgencyExperience: experience
        }));
    };

    const handleFullNameChange = (name: string) => {
        setFullName(name);
        setData(prev => ({
            ...prev,
            clientName: name
        }));
    };

    const handleEmailChange = (email: string) => {
        setEmail(email);
        setData(prev => ({
            ...prev,
            clientEmail: email
        }));
    };

    const handlePhoneNumberChange = (phone: string) => {
        setPhoneNumber(phone);
        setData(prev => ({
            ...prev,
            clientPhone: phone
        }));
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhone = (phone: string) => {
        return /^[0-9+\-\s()]{8,}$/.test(phone);
    };

    const isFormValid = data.clientName && data.clientEmail && data.clientPhone && data.clientAgencyExperience &&
                       isValidEmail(data.clientEmail) && isValidPhone(data.clientPhone);

    return (
        <div className="w-full mt-5">
            {/* Header */}
            <div>
                <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Vos informations </h1>
                <p className='text-[#C2C4C7] font-outfit'>Nous avons besoin de ces informations pour vous contacter concernant votre projet</p>
            </div>

            <div className='my-10'>
                {/* Nom complet */}
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="fullName" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Nom complet *
                    </label>
                    <div className="relative w-full">
                        <Image
                            src={form_icon_1}
                            alt=""
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => handleFullNameChange(e.target.value)}
                            placeholder="Entrez votre nom complet"
                            className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="email" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Adresse email *
                    </label>
                    <div className="relative w-full">
                        <Image
                            src={form_icon_1}
                            alt=""
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            placeholder="exemple@email.com"
                            className={`text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                email && !isValidEmail(email) 
                                    ? 'border-red-300' 
                                    : 'border-[#E8EBEF]'
                            }`}
                        />
                    </div>
                    {email && !isValidEmail(email) && (
                        <p className="text-red-500 text-sm mt-1 font-outfit">Veuillez entrer une adresse email valide</p>
                    )}
                </div>

                {/* Numéro de téléphone */}
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="phoneNumber" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Numéro de téléphone *
                    </label>
                    <div className="relative w-full">
                        <Image
                            src={form_icon_1}
                            alt=""
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneNumberChange(e.target.value)}
                            placeholder="+213 XX XX XX XX"
                            className={`text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                phoneNumber && !isValidPhone(phoneNumber) 
                                    ? 'border-red-300' 
                                    : 'border-[#E8EBEF]'
                            }`}
                        />
                    </div>
                    {phoneNumber && !isValidPhone(phoneNumber) && (
                        <p className="text-red-500 text-sm mt-1 font-outfit">Veuillez entrer un numéro de téléphone valide</p>
                    )}
                </div>
            </div>

            {/* Question sur l'expérience avec une agence digitale */}
            <div className="space-y-2 flex flex-col items-start">
                <label className="mb-2 text-neutral-gray-2 text-[16px] font-outfit font-semibold">
                    Avez-vous déjà travaillé avec une agence digitale ?
                </label>
                
                <div
                    onClick={() => handleAgencyExperienceChange('good')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.clientAgencyExperience === 'good'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.clientAgencyExperience === 'good'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.clientAgencyExperience === 'good' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold">Oui , et c&apos;était une bonne expérience</h3>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => handleAgencyExperienceChange('bad')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.clientAgencyExperience === 'bad'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.clientAgencyExperience === 'bad'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.clientAgencyExperience === 'bad' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold">Oui , mais ce n&apos;était pas aussi bon</h3>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => handleAgencyExperienceChange('no')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.clientAgencyExperience === 'no'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.clientAgencyExperience === 'no'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.clientAgencyExperience === 'no' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold">Non</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <p className=' text-neutral-gray-2 text-sm flex items-center text-maingrey'><IoMdCheckmarkCircleOutline/>Réponse rapide</p>
                <p className=' text-neutral-gray-2 text-sm flex items-center'><IoMdCheckmarkCircleOutline/>Devis totalement gratuit</p>
                <p className=' text-neutral-gray-2 text-sm flex items-center'><IoMdCheckmarkCircleOutline/>100% confidentiel</p>

            </div>
            <button
                onClick={handleSubmit}
                disabled={!isFormValid} 
                className={`w-full mt-1 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                    isFormValid
                        ? 'bg-[#0A60AD] text-white cursor-pointer hover:bg-[#084d8f]'
                        : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                }`}
            >
                Envoyer ma demande
            </button>

        </div>
    );
}