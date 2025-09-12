'use client';
import React from 'react';
import { StepsProps, formData} from '@/pages_component/DevisPage';

export default function Step_Offers({ data, setData, nextStep}: StepsProps) {

    const renderWebStep = () => {

        const webData = data as formData & { selectedOffer?: string };
        
        const offers = [
            {
                id: 'starter',
                name: 'Offre starter - 58.000Da',
                description: 'Solution simple et efficace pour débuter',
                color: '#22C55E' // Vert pour starter
            },
            {
                id: 'business',
                name: 'Offre Business - 75.000Da',
                description: 'Solution complète pour développer votre activité',
                color: '#F59E0B' // Orange pour business
            },
            {
                id: 'premium',
                name: 'Offre Premium - 90.000Da',
                description: 'Solution avancée avec toutes les fonctionnalités',
                color: '#8B5CF6' // Violet pour premium
            }
        ];

        const handleOfferChange = (offerId: string) => {
            setData(prev => ({
                ...prev,
                selectedOffer: offerId
            }));

            // Tracking Facebook immédiat lors de la sélection
            try {
                if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                    window.fbq('track', 'OfferSelected', { offer: offerId });
                } 
            } catch (error) {
                console.error('Error tracking Facebook Pixel event:', error);
            }
        };

        const handleNext = () => {
            if (webData.selectedOffer) {
                nextStep();
            } 
        };

       return (
            <div className="w-full -mt-4 md:mt-10">
                <div>
                    <h1 className='text-[30px] md:text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Choisissez Votre Offre</h1>
                    <p className='text-[#C2C4C7] font-outfit'>Consultes l&apos;offre qui te convient le mieux et faites-le nous savoir !</p>
                </div>
              
                <div className="space-y-4 mt-3 md:mt-8 flex flex-col items-start">
                    <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                        Choisissez votre offre
                    </label>
                    
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            onClick={() => handleOfferChange(offer.id)}
                            className={`cursor-pointer text-neutral-gray-2 font-outfit w-full pl-5 pr-5 py-4 border-2 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] ${
                                webData.selectedOffer === offer.id
                                    ? `border-[#2AA4E7] bg-blue-50 `
                                    : 'border-[#E8EBEF] hover:border-gray-300 hover:shadow-md'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border-2 rounded-full transition-all duration-200 ${
                                    webData.selectedOffer === offer.id
                                        ? `bg-[#2AA4E7] `
                                        : 'border-gray-300'
                                }`}>
                                    {webData.selectedOffer === offer.id && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full "></div>
                                        </div>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <h3 className={`font-semibold text-[18px] transition-colors duration-200 ${
                                        webData.selectedOffer === offer.id ? `text-[${offer.color}]` : 'text-neutral-gray-2'
                                    }`}>
                                        {offer.name}
                                    </h3>
                                    <p className="text-[14px] text-gray-500 font-normal">{offer.description}</p>
                                </div>
                                
                                {/* Indicateur visuel supplémentaire pour l'offre sélectionnée */}
                                
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!webData.selectedOffer}
                    className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                        webData.selectedOffer
                            ? 'bg-[#0A60AD] text-white cursor-pointer shadow-lg hover:bg-[#084d8f]'
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