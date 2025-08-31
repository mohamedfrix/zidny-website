import filmmaking_service from '../../assets/images/Services/Filmmaking/Filming service.svg';
import Ruban from '../../assets/images/Services/Filmmaking/Ruban.svg';
import { motion,MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface FilmmakingServiceProps {
  progress:  MotionValue<number>; // MotionValue<number>
  i: number;
  range: number[];
  targetScale: number;
}

function Filmmaking_Service({ progress,  range, targetScale }: FilmmakingServiceProps) {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const ref = useRef(null);
  const {t} = useLanguage()

  return (
    <motion.div 
      className="flex items-center justify-center h-auto sticky  px-4"
      style={{ 
        scale,
        transformOrigin: 'start start'
      }}
    >
      {/* Conteneur principal responsive */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden ">
        {/* Layout pour desktop */}
        <div className="hidden lg:block relative">
          {/* Image de fond - référence principale */}
          <Image 
            src={filmmaking_service} 
            alt="filmmaking Service" 
            className="h-auto w-full block"
          />

          {/* Ruban - positionné par rapport à l'image avec animation */}
          <motion.div 
            ref={ref}
            className="absolute bottom-0 right-0 w-auto h-full"
           
          >
            <Image 
              src={Ruban} 
              alt="Ruban" 
              className="w-full h-auto object-contain" 
            />
          </motion.div>

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
              className="flex items-center gap-3 bg-[#0A60AD] text-white rounded-4xl py-3 px-8 text-lg cursor-pointer hover:bg-[#0C224B] transition-all duration-300"
            >
                {t("Portfolio.Button")} 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7 12.1064H3.75" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.3539 12.1002C20.3539 10.8442 13.9899 6.82919 13.2679 7.55119C12.5459 8.27319 12.4769 15.8582 13.2679 16.6492C14.0599 17.4402 20.3539 13.3552 20.3539 12.1002Z" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
        </div>

{/* Layout pour tablettes et mobiles - carte plus longue avec image de fond étirée */}
<div className="lg:hidden mb-8 relative overflow-hidden min-h-[680px] md:min-h-[700px] rounded-2xl shadow-lg">
  {/* Image de fond qui couvre tout le div et est étirée en hauteur */}
  <div className="absolute inset-0 w-full h-full">
    <Image 
      src={filmmaking_service} 
      alt="filmmaking Service" 
      className="w-full h-full object-cover"
      style={{ 
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  </div>

  {/* Filtre de flou graduel en haut */}

  {/* Overlay pour améliorer la lisibilité du texte */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]"></div>

    {/* Ruban animé - repositionné derrière le texte avec z-index plus bas */}
    <motion.div 
    ref={ref}
    className="absolute bottom-0 -right-20 z-5"
    style={{
      maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)'
    }}
  >
    <Image 
      src={Ruban} 
      alt="Ruban" 
      className="w-full h-full object-contain drop-shadow-lg" 
    />
  </motion.div>

  {/* Contenu textuel par-dessus l'image */}
  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between ">
    <div className="flex-1">
      <h1 className='text-[clamp(2rem,12vw,4rem)] font-bold font-outfit text-[#0C224B] leading-tight mb-4 drop-shadow-sm'>
        FILMING & EDITING 
      </h1>
      
      <p className='font-outfit text-[clamp(1rem,5vw,1.55rem)] font-normal text-[#0C224B]  mb-6 drop-shadow-sm   rounded-lg '>
                {t('filmmaking.description')} 
      </p>
    </div>
    
    {/* Bouton fixé en bas */}
    <div className="fixed bottom-12   ">
      <Link href="/Devis">
        <motion.button 
          className=" flex items-center gap-3 bg-[#0A60AD] text-white rounded-4xl py-3 px-6 md:px-8 text-base md:text-lg cursor-pointer hover:bg-[#0C224B] transition-all duration-300 shadow-lg"
        >
                {t("Portfolio.Button")} 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7 12.1064H3.75" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.3539 12.1002C20.3539 10.8442 13.9899 6.82919 13.2679 7.55119C12.5459 8.27319 12.4769 15.8582 13.2679 16.6492C14.0599 17.4402 20.3539 13.3552 20.3539 12.1002Z" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </Link>
    </div>
  </div>
</div>
      </div>
    </motion.div>
  );
}

export default Filmmaking_Service;