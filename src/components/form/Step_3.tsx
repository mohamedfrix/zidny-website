import React, { useState } from 'react';
import { StepsProps, formDataDesign, formDataWeb, formDataMobile, formDataFilmmaking } from '@/pages_component/DevisPage';
import form_icon_2 from '@/assets/images/form_icon_2.svg'
import Image from 'next/image'

export default function Step_3({ data, setData, nextStep, previousStep }: StepsProps) {
    
    const designData = data as formDataDesign;
    const [inspirationLink, setInspirationLink] = useState(designData.inspirationLink || "");

///////////////////////////////////Design down//////////////////////////////////////////////////////////////////////    
    const renderDesignStep = () => {
        
        const styleTypes = [
            'Trendy',
            'Creative',
            'Professional',
            'Simple et efficace'
        ];

        const handleStyleChange = (style: string) => {
            const currentStyles = designData.style || [];
            const newStyles = currentStyles.includes(style)
                ? currentStyles.filter(s => s !== style)
                : [...currentStyles, style];
            
            setData(prev => ({
                ...prev,
                style: newStyles
            }));
        };

        const handleInspirationChange = (hasInspiration: boolean) => {
            setData(prev => ({
                ...prev,
                haveInspiration: hasInspiration
            }));
            
            // Si l'utilisateur sélectionne "non", on vide le lien d'inspiration
            if (!hasInspiration) {
                setInspirationLink("");
                setData(prev => ({
                    ...prev,
                    inspirationLink: ""
                }));
            }
        };

        const handleInspirationLinkChange = (link: string) => {
            setInspirationLink(link);
            setData(prev => ({
                ...prev,
                inspirationLink: link
            }));
        };

        const handleNext = () => {
            if (designData.style && designData.style.length > 0 && designData.haveInspiration !== undefined) {
                // Si l'utilisateur a dit "oui" à l'inspiration, vérifier qu'il y a un lien
                if (designData.haveInspiration && !designData.inspirationLink) {
                    return;
                }
                  try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step3DesignVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
                console.log("mise a jour", designData);
            }
        };

        return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Design Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Quelques détails supplémentaires</p>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quel style préférez-vous ?
                    </label>
                    
                    {styleTypes.map((style, index) => (
                        <div
                            key={index}
                            onClick={() => handleStyleChange(style)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                designData.style?.includes(style)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                    designData.style?.includes(style)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {designData.style?.includes(style) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className=" ml-3">
                                    <h3 className="font-semibold">{style}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8 flex flex-col items-start'>
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Avez-vous une inspiration qui vous plaît ?
                    </label>
                    <div className='flex gap-2 w-full'>
                        <div
                            onClick={() => handleInspirationChange(true)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                designData.haveInspiration === true
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded-full ${
                                    designData.haveInspiration === true
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {designData.haveInspiration === true && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">Oui</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleInspirationChange(false)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                designData.haveInspiration === false
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded-full ${
                                    designData.haveInspiration === false
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {designData.haveInspiration === false && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">Non</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {designData.haveInspiration === true && (
                    <div className='mt-5'>
                        <div className='flex flex-col items-start'>
                            <label htmlFor="inspirationLink" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                                Partagez le lien de votre inspiration
                            </label>
                            <div className="relative w-full">
                                <Image
                                    src={form_icon_2}
                                    alt=""
                                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                />
                                <input
                                    type="text"
                                    id="inspirationLink"
                                    value={inspirationLink}
                                    onChange={(e) => handleInspirationLinkChange(e.target.value)}
                                    placeholder="https://example.com"
                                    className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={handleNext}
                    disabled={!designData.style || designData.style.length === 0 || designData.haveInspiration === undefined || (designData.haveInspiration === true && !designData.inspirationLink)}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        designData.style && designData.style.length > 0 && designData.haveInspiration !== undefined && (designData.haveInspiration === false || designData.inspirationLink)
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
        const webData = data as formDataWeb;
        const [customFunctionality, setCustomFunctionality] = useState("");
    const renderWebStep = () => {
        
        
        const functionalityTypes = [
            'Système de connexion/inscription',
            'Système de paiement',
            'Gestion de contenu (CMS)',
            'Formulaires de contact',
            'Système de réservation',
            'Chat en direct',
            'Galerie d\'images',
            'Blog intégré',
            'Multilingue',
            'Géolocalisation'
        ];

        const handleFunctionalityChange = (functionality: string) => {
            const currentFunctionalities = webData.functionalities || [];
            const newFunctionalities = currentFunctionalities.includes(functionality)
                ? currentFunctionalities.filter(f => f !== functionality)
                : [...currentFunctionalities, functionality];
            
            setData(prev => ({
                ...prev,
                functionalities: newFunctionalities
            }));
        };

        const handleCustomFunctionalityChange = (customFunc: string) => {
            setCustomFunctionality(customFunc);
            if (customFunc.trim()) {
                const currentFunctionalities = webData.functionalities || [];
                const filteredFunctionalities = currentFunctionalities.filter(func => !func.startsWith('Autre: '));
                const newFunctionalities = [...filteredFunctionalities, `Autre: ${customFunc.trim()}`];
                
                setData(prev => ({
                    ...prev,
                    functionalities: newFunctionalities
                }));
            } else {
                const currentFunctionalities = webData.functionalities || [];
                const filteredFunctionalities = currentFunctionalities.filter(func => !func.startsWith('Autre: '));
                setData(prev => ({
                    ...prev,
                    functionalities: filteredFunctionalities
                }));
            }
        };

        const handleNext = () => {
            if (webData.functionalities && webData.functionalities.length > 0) {
                  try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step3WebVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
                console.log("mise a jour", webData);
            }
        };

        return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Web Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Quelques détails supplémentaires</p>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quelles sont les principales fonctionnalités que vous voulez ?
                    </label>
                    
                    {functionalityTypes.map((functionality, index) => (
                        <div
                            key={index}
                            onClick={() => handleFunctionalityChange(functionality)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                webData.functionalities?.includes(functionality)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                    webData.functionalities?.includes(functionality)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {webData.functionalities?.includes(functionality) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-semibold">{functionality}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="relative w-full">
                        <div className="flex items-center w-full pl-5 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl">
                            <div className={`w-5 h-5 border-2 rounded mr-3 ${
                                customFunctionality.trim() ? 'bg-[#2AA4E7] border-[#2AA4E7]' : 'border-gray-300'
                            }`}>
                                {customFunctionality.trim() && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={customFunctionality}
                                onChange={(e) => handleCustomFunctionalityChange(e.target.value)}
                                placeholder="Autres fonctionnalités"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={!webData.functionalities || webData.functionalities.length === 0}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        webData.functionalities && webData.functionalities.length > 0
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
        const mobileData = data as formDataMobile;
    const renderMobileStep = () => {
        
        
        const functionalityTypes = [
            'Système de connexion/inscription',
            'Système de paiement',
            'Notifications push',
            'Géolocalisation',
            'Appareil photo/galerie',
            'Authentification biométrique',
            'Mode hors ligne',
            'Système de chat',
            'Réseaux sociaux',
            'Analyses/statistiques'
        ];

        const handleFunctionalityChange = (functionality: string) => {
            const currentFunctionalities = mobileData.functionalities || [];
            const newFunctionalities = currentFunctionalities.includes(functionality)
                ? currentFunctionalities.filter(f => f !== functionality)
                : [...currentFunctionalities, functionality];
            
            setData(prev => ({
                ...prev,
                functionalities: newFunctionalities
            }));
        };

        const handleCustomFunctionalityChange = (customFunc: string) => {
            setCustomFunctionality(customFunc);
            if (customFunc.trim()) {
                const currentFunctionalities = mobileData.functionalities || [];
                const filteredFunctionalities = currentFunctionalities.filter(func => !func.startsWith('Autre: '));
                const newFunctionalities = [...filteredFunctionalities, `Autre: ${customFunc.trim()}`];
                
                setData(prev => ({
                    ...prev,
                    functionalities: newFunctionalities
                }));
            } else {
                const currentFunctionalities = mobileData.functionalities || [];
                const filteredFunctionalities = currentFunctionalities.filter(func => !func.startsWith('Autre: '));
                setData(prev => ({
                    ...prev,
                    functionalities: filteredFunctionalities
                }));
            }
        };

        const handleNext = () => {
            if (mobileData.functionalities && mobileData.functionalities.length > 0) {
                  try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step3MobileVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
                console.log("mise a jour", mobileData);
            }
        };

        return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Mobile Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Quelques détails supplémentaires</p>
                </div>

                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quelles sont les principales fonctionnalités que vous voulez ?
                    </label>
                    
                    {functionalityTypes.map((functionality, index) => (
                        <div
                            key={index}
                            onClick={() => handleFunctionalityChange(functionality)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                                mobileData.functionalities?.includes(functionality)
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded ${
                                    mobileData.functionalities?.includes(functionality)
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {mobileData.functionalities?.includes(functionality) && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-semibold">{functionality}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="relative w-full">
                        <div className="flex items-center w-full pl-5 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl">
                            <div className={`w-5 h-5 border-2 rounded mr-3 ${
                                customFunctionality.trim() ? 'bg-[#2AA4E7] border-[#2AA4E7]' : 'border-gray-300'
                            }`}>
                                {customFunctionality.trim() && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={customFunctionality}
                                onChange={(e) => handleCustomFunctionalityChange(e.target.value)}
                                placeholder="Autres fonctionnalités"
                                className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={!mobileData.functionalities || mobileData.functionalities.length === 0}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        mobileData.functionalities && mobileData.functionalities.length > 0
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
        
        const durationTypes = [
            '<30s',
            '30s-1min',
            '1min-3min',
            '>3min'
        ];

        const handleScriptChange = (hasScript: boolean) => {
            setData(prev => ({
                ...prev,
                haveScript: hasScript
            }));
        };

        const handleDurationChange = (duration: string) => {
            setData(prev => ({
                ...prev,
                videoDuration: duration
            }));
        };

        const handleNext = () => {
            if (filmmakingData.haveScript !== undefined && filmmakingData.videoDuration) {
                  try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step3filmmakingVisited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
                nextStep();
                console.log("mise a jour", filmmakingData);
            }
        };

        return (
            <div className="w-full mt-10">
                <div>
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Filmmaking Services</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Quelques détails supplémentaires</p>
                </div>

                <div className='mt-8 flex flex-col items-start'>
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Avez-vous déjà un script ?
                    </label>
                    <div className='flex gap-2 w-full'>
                        <div
                            onClick={() => handleScriptChange(true)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                filmmakingData.haveScript === true
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded-full ${
                                    filmmakingData.haveScript === true
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {filmmakingData.haveScript === true && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">Oui</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleScriptChange(false)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                filmmakingData.haveScript === false
                                    ? 'border-[#2AA4E7] bg-blue-50'
                                    : 'border-[#E8EBEF] hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded-full ${
                                    filmmakingData.haveScript === false
                                        ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                        : 'border-gray-300'
                                }`}>
                                    {filmmakingData.haveScript === false && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">Non</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 flex flex-col items-start'>
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quelle est la durée que vous voulez pour votre vidéo ?
                    </label>
                    <div className='space-y-2 w-full'>
                        {durationTypes.map((duration, index) => (
                            <div
                                key={index}
                                onClick={() => handleDurationChange(duration)}
                                className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                                    filmmakingData.videoDuration === duration
                                        ? 'border-[#2AA4E7] bg-blue-50'
                                        : 'border-[#E8EBEF] hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className={`w-5 h-5 border-2 rounded-full ${
                                        filmmakingData.videoDuration === duration
                                            ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                            : 'border-gray-300'
                                    }`}>
                                        {filmmakingData.videoDuration === duration && (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="pl-2">
                                        <h3 className="font-semibold">{duration}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={filmmakingData.haveScript === undefined || !filmmakingData.videoDuration}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        filmmakingData.haveScript !== undefined && filmmakingData.videoDuration
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