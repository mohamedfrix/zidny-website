import React from 'react';
import { StepsProps  } from '@/pages_component/DevisPage';

export default function Step_4({ data, setData, nextStep, previousStep }: StepsProps) {
    
    // Configuration des budgets et durées par service
    const serviceConfig = {
        design: {
            title: 'Design Services',
            budgets: [
                '< 20 000Da',
                '20 000Da - 50 000Da',
                '50 000Da - 100 000Da',
                '+ 100 000Da'
            ],
            durations: [
                '< 1 semaine',
                '1 - 2 semaines',
                '2 semaines - 1 mois',
                '+ 1 mois',
            ]
        },
        web: {
            title: 'Web Services',
            budgets: [
                '< 45 000Da',
                '45 000Da - 100 000Da ',
                '100 000Da - 180 000Da',
                '180 000Da - 300 000Da',
                '+ 300 000Da'
            ],
            durations: [
                '< 1 semaine',
                '1-2 semaines',
                '2-6 semaines',
                '+ 6 semaines',
            ]
        },
        mobile: {
            title: 'Mobile Services',
            budgets: [
                '< 90 000Da',
                '90 000Da - 150 000Da',
                '150 000Da - 280 000Da',
                '280 000Da - 400 000Da',
                '+ 400 000da'
            ],
            durations: [
                '< 2 semaines ',
                '2-5 semaines ',
                '5-8 semaines ',
                '+ 8 semaines' 
            ]
        },
        filmmaking: {
            title: 'Filmmaking Services',
            budgets: [
                '< 25 000Da',
                '25 000Da - 50 000Da',
                '50 000Da - 100 000Da',
                '100 000Da - 150 000Da',
                '+ 150 000Da' 
            ],
            durations: [
                '< 5 jours',
                '5-10 jours',
                '10-21 jours',
                '+ 21 jours',
            ]
        }
    };

    // Récupération de la configuration selon le type de projet
    const currentConfig = serviceConfig[data.projectType as keyof typeof serviceConfig];

    const handleBudgetChange = (budget: string) => {
        setData(prev => ({
            ...prev,
            estimationPrice: budget
        }));
    };

    const handleDurationChange = (duration: string) => {
        setData(prev => ({
            ...prev,
            estimationDuration: duration
        }));
    };

    const handleNext = () => {
        if (data.estimationPrice && data.estimationDuration) {
              try {
                    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
                        window.fbq('track', 'Step4Visited');
                    } 
                } catch (error) {
                    console.error('Error tracking Facebook Pixel event:', error);
                }
            nextStep();
            console.log("mise a jour", data);
        }
    };

    // Si pas de configuration trouvée, afficher une erreur
    if (!currentConfig) {
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

    return (
        <div className="w-full mt-10">
            <div>
                <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>{currentConfig.title}</h1>
                <p className='text-[#C2C4C7] font-outfit'>Budget et délais de livraison</p>
            </div>

            {/* Question 1: Budget estimé */}
            <div className="space-y-2 mt-8 flex flex-col items-start">
                <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                    Quel est votre budget estimé ?
                </label>
                
                {currentConfig.budgets.map((budget, index) => (
                    <div
                        key={index}
                        onClick={() => handleBudgetChange(budget)}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                            data.estimationPrice === budget
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-center">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                                data.estimationPrice === budget
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {data.estimationPrice === budget && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="ml-3">
                                <h3 className="font-semibold">{budget}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Question 2: Durée de livraison */}
            <div className="space-y-2 mt-8 flex flex-col items-start">
                <label className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                    Quelle est la durée de livraison souhaitée ?
                </label>
                
                {currentConfig.durations.map((duration, index) => (
                    <div
                        key={index}
                        onClick={() => handleDurationChange(duration)}
                        className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2 rounded-3xl transition duration-300 ${
                            data.estimationDuration === duration
                                ? 'border-[#2AA4E7] bg-blue-50'
                                : 'border-[#E8EBEF] hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-center">
                            <div className={`w-5 h-5 border-2 rounded-full ${
                                data.estimationDuration === duration
                                    ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                    : 'border-gray-300'
                            }`}>
                                {data.estimationDuration === duration && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </div>
                            <div className="ml-3">
                                <h3 className="font-semibold">{duration}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleNext}
                disabled={!data.estimationPrice || !data.estimationDuration}
                className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200 ${
                    data.estimationPrice && data.estimationDuration
                        ? 'bg-[#0A60AD] text-white cursor-pointer'
                        : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                }`}
            >
                Continuer
            </button>
        </div>
    );
}