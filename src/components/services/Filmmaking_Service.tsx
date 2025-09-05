import filmmaking_service_des from '../../assets/images/Services/Filmmaking/Filmmaking_service_desktop.png';
import filmmaking_service_mob from '../../assets/images/Services/Filmmaking/Filmmaking_service_mobile.png';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface FilmmakingServiceProps {
  progress: MotionValue<number>;
  i: number;
  range: number[];
  targetScale: number;
}

function Filmmaking_Service({ progress, range, targetScale }: FilmmakingServiceProps) {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const { t } = useLanguage();  

  return (
    <motion.div 
      className="flex items-center justify-center h-auto sticky px-4"
      style={{ 
        scale,
        transformOrigin: 'start start'
      }}
    >
      {/* Conteneur principal responsive */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Layout pour desktop */}
        <div className="hidden lg:block relative">
          {/* Image de fond - référence principale */}
          <Image 
            src={filmmaking_service_des} 
            alt="filmmaking Service" 
            className="h-auto w-full block"
            priority
          />

          {/* Ruban - positionné par rapport à l'image avec animation */}
        

          {/* Contenu textuel - positionné par rapport à l'image */}
          <motion.div className="absolute top-[12%] left-[5%] w-[60%]">
            <div>
              <h1 className='text-[clamp(2rem,5vw,4.5rem)] font-bold font-outfit text-[#0C224B] leading-tight'>
                FILMING & EDITING 
              </h1>
              
              <p className='font-outfit mt-[1.5rem] text-[clamp(1rem,2vw,1.5rem)] w-[70%] font-normal text-[#0C224B] leading-relaxed'>
                {t('filmmaking.description')} 
              </p>
            </div>
          </motion.div>

          {/* Bouton - positionné par rapport à l'image */}
          <Link href="/Devis" className='absolute bottom-[15%] left-[5%]'>
            <motion.button 
              className="flex items-center gap-3 bg-[#0A60AD] text-white rounded-full py-3 px-8 text-lg cursor-pointer hover:bg-[#0C224B] transition-all duration-300"
            >
              {t("Portfolio.Button")} 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7 12.1064H3.75" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.3539 12.1002C20.3539 10.8442 13.9899 6.82919 13.2679 7.55119C12.5459 8.27319 12.4769 15.8582 13.2679 16.6492C14.0599 17.4402 20.3539 13.3552 20.3539 12.1002Z" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
        </div>

        {/* Layout pour tablettes et mobiles - VERSION ULTRA-SIMPLIFIÉE pour Safari */}
        <div className="block lg:hidden mt-16 relative overflow-hidden min-h-[680px] border-2 md:min-h-[700px] rounded-2xl ">
          {/* Version simplifiée sans object-fit cover pour éviter les bugs Safari */}
          <div className="relative w-full ">
            
            {/* Image de fond - méthode alternative pour Safari */}
            <div className="absolute inset-0 w-full h-full object-cover object-center overflow-hidden">
            <Image 
              src={filmmaking_service_mob} 
              alt="Design Service" 
              className="w-full scale-110 h-full object-cover"
     
         
            />
          </div>

            {/* Overlay très simple */}

            {/* Contenu - layout simplifié */}
            <div className="relative z-10 p-6 md:p-8 min-h-[680px] flex flex-col">
              
              {/* Section titre et texte */}
              <div className="flex-1 pt-8">
                <h1 className="text-4xl md:text-5xl font-bold font-outfit text-[#0C224B] leading-tight mb-6">
                  FILMING & EDITING 
                </h1>
                
                <div className="max-w-md">
                  <p className="font-outfit text-lg md:text-xl font-normal text-[#0C224B] leading-relaxed">
                    {t('filmmaking.description')} 
                  </p>
                </div>
              </div>
              
              {/* Section bouton - toujours visible en bas */}
            
            </div>

            {/* Ruban décoratif - très simplifié pour Safari */}
           
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Filmmaking_Service;