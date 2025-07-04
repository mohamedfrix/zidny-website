import Image from 'next/image'
import React from 'react'
import description from "@/assets/images/description.svg";


export const Description = () => {
  return (
    <div className="pt-28 lg:pl-32 lg:py-32 overflow-hidden">
        <div className="w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl text-primary-gradient font-outfit font-semibold text-center lg:text-left">
                        Design department<br />
                        description
                    </h2>
                        
                    <p className="text-[#9FA2A7] sm:font-medium text-[10px] sm:text-[12px] text-center lg:text-left lg:text-[16px] font-outfit max-w-lg">
                        Nous transformons les idées en identités vivantes. Que vous 
                        lanciez une start-up ou redonnez vie à une marque existante, 
                        nos designers conçoivent des visuels qui résonnent et 
                        performent. Du premier croquis au livrable final, chaque pixel 
                        est façonné pour marquer les esprits et inspirer la confiance.
                    </p>
                        
                    <button className="bg-[#0A60AD] hover:bg-blue-700 text-center lg:mt-6 ml-24 sm:ml-0 text-white place-items-center lg:place-items-start font-semibold py-3 px-10 rounded-3xl transition-colors duration-200">
                        Façonner mon image
                    </button>
                </div>
          
                <div className="relative overflow-hidden h-full w-full">
                    <Image 
                        src={description}
                        alt='firstshpae'
                        fill
                        className=' lg:-translate-x-30 w-[20px] lg:w-3xl'
                    />
                </div>
            </div>
        </div>
    </div>

  )
}
