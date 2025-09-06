import design_service from '../../assets/images/Services/Design/design_service.svg';
import design_service_mobile from '../../assets/images/Services/Design/design_service_mobile.png';
import design_name from '../../assets/images/Services/Design/design_name.svg';
import Ai from '../../assets/images/Services/Design/Ai.svg';
import assiete from '../../assets/images/Services/Design/assiete.svg';
import Figma from '../../assets/images/Services/Design/Figma.svg';
import Ps from '../../assets/images/Services/Design/Ps.svg';
import pellicule from '../../assets/images/Services/Design/pellicule.svg';
import { motion, MotionValue, useInView, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface FilmmakingServiceProps {
  progress: MotionValue<number>;
  i: number;
  range: number[];
  targetScale: number;
}

function Design_Service({ progress,  range, targetScale }: FilmmakingServiceProps) {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});

  // Coordonnées du rectangle pour que le curseur suive le contour
  const rectPath = [
    { x: "1.77566", y: "30.4975" },    // Coin supérieur gauche
    { x: "386.711", y: "2.32172" },    // Coin supérieur droit
    { x: "397.161", y: "145.098" },    // Coin inférieur droit
    { x: "12.2259", y: "173.274" },    // Coin inférieur gauche
    { x: "1.77566", y: "30.4975" },    // Retour au coin supérieur gauche
    { x: "380", y: "140" }             // Position finale : près du coin inférieur droit mais dans les limites du SVG
  ];

  // Variants pour l'animation du stroke
  
  const { t } = useLanguage();

  return (
    <motion.div 
      className="flex items-center justify-center h-auto sticky top-10 px-4"
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
            src={design_service} 
            alt="Design Service" 
            className="h-auto w-full block" 
            priority={false}    // false = lazy load automatique

          />

          {/* Éléments design flottants - positionnés par rapport à l'image */}
          <motion.div 
            ref={ref} 
            className="absolute bottom-[-21%] right-[-13%]" 
            initial={{ opacity: 0, y: 100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}         
            transition={{ duration: 2 }} 
          >
            <Image src={assiete} alt="Assiette design" className="w-full h-auto object-contain"  priority={false}  />

          </motion.div>
          
          <motion.div 
            className="absolute bottom-[2%] right-[18%] w-[40%]" 
            initial={{ opacity: 0, y: -100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}         
            transition={{ duration: 2, delay: 0.25}} 
          >
            <Image src={pellicule} alt="Pellicule" className="w-full h-auto object-contain"  priority={false}  />

          </motion.div>

          <motion.div 
            className="absolute bottom-[4%] right-[15%] w-[25%]" 
            initial={{ opacity: 0, y: -100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}         
            transition={{ duration: 2, delay: 0.25 }} 
          >
            <Image src={Ai} alt="Adobe Illustrator" className="w-full h-auto object-contain"  priority={false}  />

          </motion.div>

          <motion.div 
            className="absolute bottom-[0%] right-[-12%] w-[32%]"  
            initial={{ opacity: 0, y: -100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}         
            transition={{ duration: 2, delay: 0.25}} 
          >
            <Image src={Figma} alt="Figma" className="w-full h-auto object-contain"  priority={false}   />

          </motion.div>

          <motion.div 
            className="absolute bottom-[1%] right-[5%] w-[25%]" 
            initial={{ opacity: 0, y: -100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}         
            transition={{ duration: 2, delay: 0.25 }} 
          >
            <Image src={Ps} alt="Adobe Photoshop" className="w-full h-auto object-contain"  priority={false}   />

          </motion.div>

          {/* Section titre avec design_name et SVG décoratifs */}
          <motion.div className="absolute top-[8%] left-[5%] w-[45%]">
            <div className='flex relative items-start'>
              <Image src={design_name} alt="Design Service Name" className="w-auto h-auto max-w-full"  priority={false}  />

              {/* SVG du cadre de dessin */}
              <motion.svg 
                width="411" 
                height="186" 
                viewBox="0 0 411 186"  
                fill="none"  
                xmlns="http://www.w3.org/2000/svg" 
                className='absolute -top-[1.5rem] -left-[1.25rem] w-full max-w-[25rem] h-auto opacity-90'
              > 
                <motion.rect 
                  x="9.2864" 
                  y="36.9838" 
                  width="383.158" 
                  height="140.351" 
                  transform="rotate(-4.18638 9.2864 36.9838)" 
                  stroke="#2AA4E7" 
                  strokeWidth="2.80702" 
                  fill='none' 
                  initial={"hidden"}   
                  animate={isInView ? "visible" : "hidden"}      
                />
                
                {/* Coins du rectangle */}
                {rectPath.slice(0, 4).map((corner, i) => (
                  <motion.rect
                    key={i}
                    x={corner.x}
                    y={corner.y}
                    width="11.2281"
                    height="11.2281"
                    transform={`rotate(-4.18638 ${corner.x} ${corner.y})`}
                    fill="white"
                    stroke="#2AA4E7"
                    strokeWidth="2.80702"
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                ))}
                
                {/* SVG du curseur intégré dans le même SVG pour suivre les bonnes coordonnées */}
                <motion.g
                  animate={isInView ? "moving" : { x: parseFloat(rectPath[5].x), y: parseFloat(rectPath[5].y) }}
                  initial={{ x: parseFloat(rectPath[5].x), y: parseFloat(rectPath[5].y) }}
                >
                  <path 
                    d="M17.5495 22.3426L0.461914 0.138672L27.4999 5L15.402 8.93034L17.5495 22.3426Z" 
                    fill="#2AA4E7"
                    transform="scale(0.8)"
                  />
                </motion.g>
              </motion.svg>
            </div>

            {/* Description */}
            <p className='font-outfit mt-[1.5rem] text-[clamp(1rem,2vw,1.5rem)] font-normal text-[#0C224B] leading-relaxed'>
                {t('Design.description')} 
           </p>
          </motion.div>

          {/* Bouton - positionné par rapport à l'image */}
          <Link href="/Devis" className='absolute bottom-[15%] left-[5%]'>
            <motion.button 
              className="flex items-center gap-3 bg-[#0A60AD] text-white rounded-4xl py-3 px-3 sm:px-8 text-[clamp(0.9rem,1.5vw,1.1rem)] cursor-pointer hover:bg-[#0C224B] transition-all duration-300">
                {t("Portfolio.Button")} 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7 12.1064H3.75" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.3539 12.1002C20.3539 10.8442 13.9899 6.82919 13.2679 7.55119C12.5459 8.27319 12.4769 15.8582 13.2679 16.6492C14.0599 17.4402 20.3539 13.3552 20.3539 12.1002Z" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
        </div>

        {/* Layout pour tablettes et mobiles - carte plus longue avec image de fond étirée */}
        <div className="block lg:hidden mt-16 relative overflow-hidden min-h-[680px] md:min-h-[700px] rounded-2xl shadow-lg">
          {/* Image de fond qui couvre tout le div et est étirée en hauteur */}
          <div className="absolute inset-0 w-full h-full object-cover object-center overflow-hidden">
            <Image 
              src={design_service_mobile} 
              alt="Design Service" 
              className="w-full h-full object-cover"  />
          </div>


          <div className="relative z-10 p-6 md:p-8 min-h-[700px] flex flex-col ">
            <div className="flex-1">
              <div className='flex relative items-start mb-4'>

                             
              </div>
              
              <p className='font-outfit text-[clamp(1rem,5vw,1.55rem)] font-normal text-[#0C224B] mb-6 mt-28 drop-shadow-lg'>
                {t('Design.description')} 
              </p>
            </div>
            
            {/* Bouton fixé en bas */}
         
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Design_Service;