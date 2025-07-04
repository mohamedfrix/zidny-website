import Image from 'next/image'
import React from 'react'
import description from "@/assets/images/description.svg";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export const Description = ({ step }: { step: string }) => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 px-4 sm:pt-20 sm:px-6 md:pt-24 md:px-8 lg:pt-32 lg:pl-32 lg:pr-8 xl:pr-16 overflow-y-hidden">
      <div className="w-full h-full max-w-7xl mx-auto lg:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Contenu texte */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl  md:text-4xl lg:text-4xl xl:text-5xl text-primary-gradient font-outfit font-semibold text-center lg:text-left leading-tight">
              {t(`${step}.title`)}
            </h2>
            
            <p className="text-[#9FA2A7] font-medium text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-center lg:text-left font-outfit max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t(`${step}.description`)}
            </p>
            
            <div className="flex justify-center lg:justify-start pt-2">
              <Link href={'/Devis'}>
              <button className="bg-[#0A60AD] cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 md:px-12 rounded-4xl  duration-200 text-sm sm:text-base font-outfit shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                {t(`${step}.button`)}
              </button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] w-full order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={description}
                alt="Description illustration"
                fill
                className="object-contain lg:object-cover lg:-translate-x-8 xl:-translate-x-12"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}