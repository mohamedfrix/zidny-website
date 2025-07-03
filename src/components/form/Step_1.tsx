import React, { useState } from 'react';
import { StepsProps, ServiceType } from '@/pages_component/DevisPage';
import form_icon_1 from '@/assets/images/form_icon_1.svg'
import Image from 'next/image'


export default function Step_1({ data, setData, nextStep }: StepsProps) {
   
    const [projectName, setProjectName] = useState(data.projectName || "");

    const handleServiceTypeChange = (type: ServiceType) => {
        setData(prev => ({
            ...prev,
            projectType: type
        }));
    };

    const handleProjectNameChange = (name: string) => {
        setProjectName(name);
        setData(prev => ({
            ...prev,
            projectName: name
        }));
    };
   
    const handleNext = () => {
        if (data.projectType ) {
            nextStep();
            console.log("Les données", data)
        }
    };

    return (
        <div className="w-full mt-10  ">
            {/* Champ pour le nom du projet */}
            <div>
                <h1 className='text-[36px] text-[#2AA4E7] font-outfit font-semibold'>Welcome To Zidny</h1>
                <p className='text-[#C2C4C7] font-outfit  '>Remplis ce formulaire en moins de 2 minutes et ton projet prend une autre dimension! </p>
            </div>

            <div className='my-15'>
                
                    <div className='flex flex-col items-start'>
                    <label htmlFor="projectName" className="text-neutral-gray-2 text-[16px] font-outfit font-semibold mb-2">
                    Your Project Name 
                    </label>
                    <div className="relative w-full">
                    <Image
                        src={form_icon_1}
                        alt=""
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => handleProjectNameChange(e.target.value)}
                        placeholder="Donnez un nom à votre projet"
                        className="text-neutral-gray-2 font-outfit text-[18px] font-semibold w-full pl-14 pr-5 py-2 border-2 border-[#E8EBEF] rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent"
                    />
                    </div>


                </div>
            </div>

            <div className="space-y-2 flex flex-col items-start">
                <label htmlFor="projectName" className="mb-2 text-neutral-gray-2 text-[16px] font-outfit font-semibold ">
                    Quel est le service qui vous interesse le plus
                    </label>
                <div
                    onClick={() => handleServiceTypeChange('design')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.projectType === 'design'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.projectType === 'design'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.projectType === 'design' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Design (Logo, identité visuelle , prints...)</h3>
                        </div>
                        
                    </div>
                </div>
                  <div
                    onClick={() => handleServiceTypeChange('web')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.projectType === 'web'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.projectType === 'web'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.projectType === 'web' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Web (sites vitrines , solutions web...)</h3>
                        </div>
                        
                    </div>
                </div>

                

                <div
                    onClick={() => handleServiceTypeChange('mobile')}
                    className={` cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.projectType === 'mobile'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.projectType === 'mobile'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.projectType === 'mobile' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">Mobile (iOS, Android, solutions mobile...)</h3>
                        </div>
                        
                    </div>
                </div>

                

               <div
                    onClick={() => handleServiceTypeChange('filmmaking')}
                    className={`cursor-pointer text-neutral-gray-2 font-outfit font-semibold w-full pl-5 pr-5 py-2 border-2  rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 focus:border-transparent ${
                        data.projectType === 'filmmaking'
                            ? 'border-[#2AA4E7] bg-blue-50'
                            : 'border-[#E8EBEF] hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center ">
                        <div className={`w-5 h-5 border-2 rounded-full ${
                            data.projectType === 'filmmaking'
                                ? 'bg-[#2AA4E7] border-[#2AA4E7]'
                                : 'border-gray-300'
                        }`}>
                            {data.projectType === 'filmmaking' && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold ">filmmaking (publicité, contenu, montage...)</h3>
                        </div>
                        
                    </div>
                </div>
             </div>
            <button
                onClick={handleNext}
                disabled={!data.projectType} 
                className={`w-full mt-8 py-3 px-6 rounded-3xl font-semibold transition-all duration-200  ${
                    data.projectType
                        ? 'bg-[#0A60AD] text-white cursor-pointer '
                        : 'bg-gray-200 text-neutral-gray-2 cursor-not-allowed'
                }`}
            >
                Continuer
            </button>
        </div>
    );
}