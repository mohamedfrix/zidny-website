'use client';
import React, { useState } from 'react';
import { StepsProps, formDataWeb} from '@/pages_component/DevisPage';



export default function Step_2({ data, setData, nextStep}: StepsProps) {

    const [customDesignType, setCustomDesignType] = useState("");

    const renderWebStep = () => {

        const webData = data as formDataWeb;
        
        const designTypes = [
            'Gestion des leads',
            'Filtration des leads',
            'Showcasing des portfolios',
            'Suivi des projets',
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
            // Vérification corrigée : s'assurer que le tableau existe ET contient des éléments
            if (webData.websiteType && webData.websiteType.length > 0) {
                // Vérification plus robuste pour Facebook Pixel
                try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'WebTypeSubmited');
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
                    <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Créer avec Zidny</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Réserve ta consultation gratuite dès maintenant sur zidnyagency.com</p>
                </div>
              
                <div className="space-y-2 mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Quel est le problème que vous avez rencontré le plus ?       
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

                <button
                    onClick={handleNext}
                    disabled={!webData.websiteType || webData.websiteType.length === 0}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                        webData.websiteType && webData.websiteType.length > 0
                            ? 'bg-[#0A60AD] text-white cursor-pointer'
                            : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                    }`}
                >
                    Continuer
                </button>
            </div>
        );
    };

    return renderWebStep();
}