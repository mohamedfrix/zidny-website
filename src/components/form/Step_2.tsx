import React, { useState } from 'react';
import { StepsProps, formDataDesign, formDataWeb, formDataMobile, formDataFilmmaking } from '@/pages_component/DevisPage';
import form_icon_2 from '@/assets/images/form_icon_2.svg'
import Image from 'next/image'

export default function Step_2({ data, setData, nextStep, previousStep }: StepsProps) {

        const [projectDescription, setProjectDescription] = useState(data.projectDescription || "");
        const [customDesignType, setCustomDesignType] = useState("");
        
////////////////////////////////////Design down//////////////////////////////////////////////////////////////////////    
     const renderDesignStep = () => {
        const designData = data as formDataDesign;
        
        
        const designTypes = [
            'Logo',
            'Identité visuelle complète',
            'Ui/Ux design',
            'Supports print (cartes de visite, flyers...)',
            'Marketing supports',
        ];

        const handleDesignTypeChange = (type: string) => {
            const currentTypes = designData.designType || [];
            const newTypes = currentTypes.includes(type)
                ? currentTypes.filter(t => t !== type)
                : [...currentTypes, type];
            
            setData(prev => ({
                ...prev,
                designType: newTypes
            }));
        };

        const handleProjectDescriptionChange = (description: string) => {
            setProjectDescription(description);
            setData(prev => ({
                ...prev,
                projectDescription: description
            }));
        };
         const handleHaveVisualChange = (description: boolean) => {
            setData(prev => ({
                ...prev,
                haveVisualId : description
            }));
        };

        const handleCustomDesignTypeChange = (customType: string) => {
            setCustomDesignType(customType);
            if (customType.trim()) {
                const currentTypes = designData.designType || [];
                // Retirer l'ancien type personnalisé s'il existe
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                // Ajouter le nouveau type personnalisé
                const newTypes = [...filteredTypes, `Autre: ${customType.trim()}`];
                
                setData(prev => ({
                    ...prev,
                    designType: newTypes
                }));
            } else {
                // Si le champ est vide, retirer le type personnalisé
                const currentTypes = designData.designType || [];
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                setData(prev => ({
                    ...prev,
                    designType: filteredTypes
                }));
            }
        };

        const handleNext = () => {
            if ((designData.designType && designData.designType.length > 0) && designData.projectDescription) {
                 try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step2DesignVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
            }
        };

        return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Design Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Des informations sur ce que vous voulez ?</p>
                </div>
                
                <div className='mt-12'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Expliquez nous brièvement ce que fait votre projet 
                        </label>
                        <div className="relative w-full">
                            <Image
                                src={form_icon_2}
                                alt=""
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <input
                                type="text"
                                id="projectDescription"
                                value={projectDescription}
                                onChange={(e) => handleProjectDescriptionChange(e.target.value)}
                                placeholder="Expliquez-nous"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Sélectionnez le(s) type(s) de design souhaité(s)
                    </label>
                    
                    {designTypes.map((type, index) => (
                        <div
                            key={index}
                            onClick={() => handleDesignTypeChange(type)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                designData.designType?.includes(type)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                    designData.designType?.includes(type)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {designData.designType?.includes(type) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 ml-3">
                                    <h3 className="font-semibold">{type}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Champ personnalisé pour "Autre" */}
                    <div className="relative w-full">
                        <div className="flex items-center w-full pl-5 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl">
                            <div className={`w-5 h-5 border-2 rounded mr-3 ${
                                customDesignType.trim() ? 'bg-[#2AA4E7] border-[#2AA4E7]' : 'border-gray-300'
                            }`}>
                                {customDesignType.trim() && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={customDesignType}
                                onChange={(e) => handleCustomDesignTypeChange(e.target.value)}
                                placeholder="Autres (dites-nous)"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex flex-col items-start '>
                    <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Avez-vous deja une identité visuelle(logo,couleurs...)
                    </label>
                    <div className='flex gap-2 w-full'>
                    <div
                    onClick={() => handleHaveVisualChange(true)}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        designData.haveVisualId === true
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        designData.haveVisualId === true
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {designData.haveVisualId === true && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Oui</h3>
                        </div>
                        
                    </div>
                </div>
                <div
                    onClick={() => handleHaveVisualChange(false)}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        designData.haveVisualId === false
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        designData.haveVisualId === false
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {designData.haveVisualId === false && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Non</h3>
                        </div>
                        
                    </div>
                </div>
                </div>

                </div>

                <button
                    onClick={handleNext}
                    disabled={(!designData.designType || designData.designType.length === 0) || !designData.projectDescription}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        (designData.designType && designData.designType.length > 0) && designData.projectDescription
                            ? 'bg-[#0A60AD] text-white cursor-pointer'
                            : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                    }`}
                >
                    Continuer
                </button>
            </div>
        );
    };
    
///////////////////////////////////////Design Up/////////////Web Down//////////////////////////////////////////////
 const renderWebStep = () => {

        const webData = data as formDataWeb;
        
        
        const designTypes = [
            'e-commerce',
            'Site vitrine',
            'Blog',
            'Platforme',
        ];

        const handleDesignTypeChange = (type: string) => {
            const currentTypes = webData.websiteType || [];
            const newTypes = currentTypes.includes(type)
                ? currentTypes.filter(t => t !== type)
                : [...currentTypes, type];
            
            setData(prev => ({
                ...prev,
                websiteType: newTypes
            }));
        };

        const handleProjectDescriptionChange = (description: string) => {
            setProjectDescription(description);
            setData(prev => ({
                ...prev,
                projectDescription: description
            }));
        };
         const handleDesignExpectationChange = (description: string) => {
            setData(prev => ({
                ...prev,
                designExpectation : description
            }));
        };

        const handleCustomDesignTypeChange = (customType: string) => {
            setCustomDesignType(customType);
            if (customType.trim()) {
                const currentTypes = webData.websiteType || [];
                // Retirer l'ancien type personnalisé s'il existe
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                // Ajouter le nouveau type personnalisé
                const newTypes = [...filteredTypes, `Autre: ${customType.trim()}`];
                
                setData(prev => ({
                    ...prev,
                    websiteType: newTypes
                }));
            } else {
                // Si le champ est vide, retirer le type personnalisé
                const currentTypes = webData.websiteType || [];
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                setData(prev => ({
                    ...prev,
                    websiteType: filteredTypes
                }));
            }
        };

        const handleNext = () => {
            if ((webData.websiteType && webData.websiteType.length > 0) && webData.projectDescription) {
                 try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'step2WebVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
            }
        };

       return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Web Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Des informations sur ce que vous voulez ?</p>
                </div>
                
                <div className='mt-12'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Expliquez nous brièvement ce que fait votre projet 
                        </label>
                        <div className="relative w-full">
                            <Image
                                src={form_icon_2}
                                alt=""
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <input
                                type="text"
                                id="projectDescription"
                                value={projectDescription}
                                onChange={(e) => handleProjectDescriptionChange(e.target.value)}
                                placeholder="Expliquez-nous"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Sélectionnez le(s) type(s) de sites web souhaité(s)
                    </label>
                    
                    {designTypes.map((type, index) => (
                        <div
                            key={index}
                            onClick={() => handleDesignTypeChange(type)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                webData.websiteType?.includes(type)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                    webData.websiteType?.includes(type)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {webData.websiteType?.includes(type) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className=" ml-3">
                                    <h3 className="font-semibold">{type}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Champ personnalisé pour "Autre" */}
                    <div className="relative w-full">
                        <div className="flex items-center w-full pl-5 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl">
                            <div className={`w-5 h-5 border-2 rounded mr-3 ${
                                customDesignType.trim() ? 'bg-[#2AA4E7] border-[#2AA4E7]' : 'border-gray-300'
                            }`}>
                                {customDesignType.trim() && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={customDesignType}
                                onChange={(e) => handleCustomDesignTypeChange(e.target.value)}
                                placeholder="Autres (dites-nous)"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex flex-col items-start '>
                    <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Avez-vous deja une identité visuelle(logo,couleurs...)
                    </label>
                    <div className='space-y-2 w-full '>
                        <div
                        onClick={() => handleDesignExpectationChange("Standard and simple design")}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                            webData.designExpectation === "Standard and simple design"
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-start ">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                            webData.designExpectation === "Standard and simple design"
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {webData.designExpectation === "Standard and simple design" && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="pl-2">
                                <h3 className="font-semibold ">Standard and simple design</h3>
                            </div>
                            
                        </div>
                    </div>
                <div
                    onClick={() => handleDesignExpectationChange("High quality and on point design")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        webData.designExpectation === "High quality and on point design"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        webData.designExpectation === "High quality and on point design"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {webData.designExpectation === "High quality and on point design" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">High quality and on point design</h3>
                        </div>
                        
                    </div>
                </div>
                 <div
                    onClick={() => handleDesignExpectationChange("i have a design already")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        webData.designExpectation === "i have a design already"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        webData.designExpectation === "i have a design already"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {webData.designExpectation === "i have a design already" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">i have a design already</h3>
                        </div>
                        
                    </div>
                </div>
                </div>

                </div>

                <button
                    onClick={handleNext}
                    disabled={(!webData.websiteType || webData.websiteType.length === 0) || !webData.projectDescription}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        (webData.websiteType && webData.websiteType.length > 0) && webData.projectDescription
                            ? 'bg-[#0A60AD] text-white cursor-pointer'
                            : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                    }`}
                >
                    Continuer
                </button>
            </div>
        );
    };
////////////////////////////////////////Web Up/////////////////////////Mobile Down///////////////////////////////////////
  const renderMobileStep = () => {

        const mobileData = data as formDataMobile;
        

      

        const handleProjectDescriptionChange = (description: string) => {
            setProjectDescription(description);
            setData(prev => ({
                ...prev,
                projectDescription: description
            }));
        };
         const handleDesignExpectationChange = (description: string) => {
            setData(prev => ({
                ...prev,
                designExpectation : description
            }));
        };

        const handleApplicationPlatformChange = (description: string) => {
            setData(prev => ({
                ...prev,
                applicationPlatform : description
            }));
        };
        const handleWantHosting = (description: boolean) => {
            setData(prev => ({
                ...prev,
                applicationHosting : description
            }));
        };

        const handleNext = () => {
            if (mobileData.applicationPlatform  && mobileData.projectDescription) {
                 try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step2MobileVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
            }
        };

       return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Mobile Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Des informations sur ce que vous voulez ?</p>
                </div>
                
                <div className='mt-12'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Expliquez nous brièvement ce que fait votre projet 
                        </label>
                        <div className="relative w-full">
                            <Image
                                src={form_icon_2}
                                alt=""
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <input
                                type="text"
                                id="projectDescription"
                                value={projectDescription}
                                onChange={(e) => handleProjectDescriptionChange(e.target.value)}
                                placeholder="Expliquez-nous"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

               
                <div className='mt-5 flex flex-col items-start '>
                    <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Sur quelle platforme vous voulez votre application 
                    </label>
                    <div className='space-y-2 w-full '>
                        <div
                        onClick={() => handleApplicationPlatformChange("Android")}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                            mobileData.applicationPlatform === "Android"
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-start ">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                            mobileData.applicationPlatform === "Android"
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {mobileData.applicationPlatform === "Android" && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="pl-2">
                                <h3 className="font-semibold ">Android</h3>
                            </div>
                            
                        </div>
                    </div>
                <div
                    onClick={() => handleApplicationPlatformChange("IOS")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.applicationPlatform === "IOS"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.applicationPlatform === "IOS"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.applicationPlatform === "IOS" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">IOS</h3>
                        </div>
                        
                    </div>
                </div>
                 <div
                    onClick={() => handleApplicationPlatformChange("Both")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.applicationPlatform === "Both"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.applicationPlatform === "Both"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.applicationPlatform === "Both" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">Both</h3>
                        </div>
                        
                    </div>
                </div>
                </div>

                </div>

                 <div className="space-y-2 mt-5  flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Voulez-vous que votre application soit deployé ?
                    </label>
                     <div className='flex gap-2 w-full'>
                    <div
                    onClick={() => handleWantHosting(true)}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.applicationHosting === true
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.applicationHosting === true
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.applicationHosting === true && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Oui</h3>
                        </div>
                        
                    </div>
                </div>
                <div
                    onClick={() => handleWantHosting(false)}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.applicationHosting === false
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.applicationHosting === false
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.applicationHosting === false && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Non</h3>
                        </div>
                        
                    </div>
                </div>
                </div>
                    
               
                    
                   
                </div>



                <div className='mt-5 flex flex-col items-start '>
                    <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Avez-vous deja une identité visuelle(logo,couleurs...)
                    </label>
                    <div className='space-y-2 w-full '>
                        <div
                        onClick={() => handleDesignExpectationChange("Standard and simple design")}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                            mobileData.designExpectation === "Standard and simple design"
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-start ">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                            mobileData.designExpectation === "Standard and simple design"
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {mobileData.designExpectation === "Standard and simple design" && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="pl-2">
                                <h3 className="font-semibold ">Standard and simple design</h3>
                            </div>
                            
                        </div>
                    </div>
                <div
                    onClick={() => handleDesignExpectationChange("High quality and on point design")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.designExpectation === "High quality and on point design"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.designExpectation === "High quality and on point design"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.designExpectation === "High quality and on point design" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">High quality and on point design</h3>
                        </div>
                        
                    </div>
                </div>
                 <div
                    onClick={() => handleDesignExpectationChange("i have a design already")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        mobileData.designExpectation === "i have a design already"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        mobileData.designExpectation === "i have a design already"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {mobileData.designExpectation === "i have a design already" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">i have a design already</h3>
                        </div>
                        
                    </div>
                </div>
                </div>

                </div>

                <button
                    onClick={handleNext}
                    disabled={!mobileData || !mobileData.projectDescription}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        mobileData.applicationPlatform  && mobileData.projectDescription 
                            ? 'bg-[#0A60AD] text-white cursor-pointer'
                            : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                    }`}
                >
                    Continuer
                </button>
            </div>
        );
    };

/////////////////////////////////////////////////Mobile Up////////////Filmmaking Down//////////////////////////////////
  const renderFilmmakingStep = () => {

        const filmmakingData = data as formDataFilmmaking;
       
        
        const designTypes = [
            'Advertising video / commercial',
            'Institutional video',
            'Event coverage',
            'Motion design',
        ];

        const handleDesignTypeChange = (type: string) => {
            const currentTypes = filmmakingData.videoType || [];
            const newTypes = currentTypes.includes(type)
                ? currentTypes.filter(t => t !== type)
                : [...currentTypes, type];
            
            setData(prev => ({
                ...prev,
                videoType: newTypes
            }));
        };

        const handleProjectDescriptionChange = (description: string) => {
            setProjectDescription(description);
            setData(prev => ({
                ...prev,
                projectDescription: description
            }));
        };
         const handlePlatformPublicationChange = (description: string) => {
            setData(prev => ({
                ...prev,
                publicationPlatform : description
            }));
        };

        const handleVideoTypeChange = (customType: string) => {
            setCustomDesignType(customType);
            if (customType.trim()) {
                const currentTypes = filmmakingData.videoType || [];
                // Retirer l'ancien type personnalisé s'il existe
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                // Ajouter le nouveau type personnalisé
                const newTypes = [...filteredTypes, `Autre: ${customType.trim()}`];
                
                setData(prev => ({
                    ...prev,
                    videoType: newTypes
                }));
            } else {
                // Si le champ est vide, retirer le type personnalisé
                const currentTypes =  filmmakingData.videoType || [];
                const filteredTypes = currentTypes.filter(type => !type.startsWith('Autre: '));
                setData(prev => ({
                    ...prev,
                    videoType: filteredTypes
                }));
            }
        };

        const handleNext = () => {
            if (( filmmakingData.videoType &&  filmmakingData.videoType.length > 0) && filmmakingData.projectDescription) {
                 try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step2filmmakingVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
            }
        };

       return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Filmmaking Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Des informations sur ce que vous voulez ?</p>
                </div>
                
                <div className='mt-12'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Expliquez nous brièvement ce que fait votre projet 
                        </label>
                        <div className="relative w-full">
                            <Image
                                src={form_icon_2}
                                alt=""
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <input
                                type="text"
                                id="projectDescription"
                                value={projectDescription}
                                onChange={(e) => handleProjectDescriptionChange(e.target.value)}
                                placeholder="Expliquez-nous"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quel type de video vous interesse le plus?
                    </label>
                    
                    {designTypes.map((type, index) => (
                        <div
                            key={index}
                            onClick={() => handleDesignTypeChange(type)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                 filmmakingData.videoType?.includes(type)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                     filmmakingData.videoType?.includes(type)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    { filmmakingData.videoType?.includes(type) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className=" ml-3">
                                    <h3 className="font-semibold">{type}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Champ personnalisé pour "Autre" */}
                    <div className="relative w-full">
                        <div className="flex items-center w-full pl-5 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl">
                            <div className={`w-5 h-5 border-2 rounded mr-3 ${
                                customDesignType.trim() ? 'bg-[#2AA4E7] border-[#2AA4E7]' : 'border-gray-300'
                            }`}>
                                {customDesignType.trim() && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={customDesignType}
                                onChange={(e) => handleVideoTypeChange(e.target.value)}
                                placeholder="Autres (dites-nous)"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex flex-col items-start '>
                    <label htmlFor="projectDescription" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                            Sur quelle platforme vous voulez qu&apos;elle soit publiée
                    </label>
                    <div className='space-y-2 w-full '>
                        <div
                        onClick={() => handlePlatformPublicationChange("Instagram / Facebook / TikTok")}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                            filmmakingData.publicationPlatform === "Instagram / Facebook / TikTok"
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-start ">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                            filmmakingData.publicationPlatform === "Instagram / Facebook / TikTok"
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {filmmakingData.publicationPlatform === "Instagram / Facebook / TikTok" && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="pl-2">
                                <h3 className="font-semibold ">Instagram / Facebook / TikTok</h3>
                            </div>
                            
                        </div>
                    </div>
                <div
                    onClick={() => handlePlatformPublicationChange(" YouTube")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        filmmakingData.publicationPlatform === " YouTube"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        filmmakingData.publicationPlatform === " YouTube"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {filmmakingData.publicationPlatform === " YouTube" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold "> YouTube</h3>
                        </div>
                        
                    </div>
                </div>
                 <div
                    onClick={() => handlePlatformPublicationChange("Elle ne va pas etre publiée")}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                       filmmakingData.publicationPlatform === "Elle ne va pas etre publiée"
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                        filmmakingData.publicationPlatform === "Elle ne va pas etre publiée"
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {filmmakingData.publicationPlatform === "Elle ne va pas etre publiée" && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="pl-2">
                            <h3 className="font-semibold ">Elle ne va pas etre publiée</h3>
                        </div>
                        
                    </div>
                </div>
                </div>

                </div>

                <button
                    onClick={handleNext}
                    disabled={(!filmmakingData.videoType || filmmakingData.videoType.length === 0) || !filmmakingData.projectDescription}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        (filmmakingData.videoType && filmmakingData.videoType.length > 0) && filmmakingData.projectDescription
                            ? 'bg-[#0A60AD] text-white cursor-pointer'
                            : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                    }`}
                >
                    Continuer
                </button>
            </div>
        );
    };

    // Fonction principale qui détermine quelle étape afficher
    const renderStep = () => {
        switch (data.projectType) {
            case 'design':
                return renderDesignStep();
            case 'web':
                return renderWebStep();
            case 'mobile':
                return renderMobileStep();
            case 'filmmaking':
                return renderFilmmakingStep();
            default:
                return (
                    <div className="w-full mt-10">
                        <div>
                            <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Erreur</h1>
                            <p className='text-[#C2C4C7] font-outfit'>Aucun type de projet sélectionné. Veuillez revenir à l&apos;étape précédente.</p>
                        </div>
                        <button
                            onClick={previousStep}
                            className="w-full mt-8 py-3 px-6 rounded-3xl font-semibold bg-[#0A60AD] text-white"
                        >
                            Retour
                        </button>
                    </div>
                );
        }
    };

    return renderStep();
}