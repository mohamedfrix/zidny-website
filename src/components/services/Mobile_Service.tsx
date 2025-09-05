import mobile_service from '../../assets/images/Services/Mobile/mobile_service.svg';
import iphone from         '../../assets/images/Services/Mobile/iphone.svg';
import notification_1 from '../../assets/images/Services/Mobile/Notification_1.svg';
import notification_2 from '../../assets/images/Services/Mobile/Notification_2.svg';
import notification_3 from '../../assets/images/Services/Mobile/Notification_3.svg';
import { motion, MotionValue, useInView, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface FilmmakingServiceProps {
  progress:  MotionValue<number> ;
  i: number;
  range: number[];
  targetScale: number;
}

function Mobile_Service({ progress, range, targetScale }: FilmmakingServiceProps) {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});
  const {t} = useLanguage()

  return (
    <motion.div 
      className="flex items-center justify-center h-auto sticky top-10 px-4"
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
            src={mobile_service} 
            alt="Mobile Service" 
            className="h-auto w-full block" 
          />

          {/* iPhone - positionné par rapport à l'image */}
          <motion.div            
            ref={ref}         
            className="absolute bottom-[-50%] right-[-5%] h-auto" 
            initial={{ opacity: 0, y: 100 }}         
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}         
            transition={{ duration: 2 }} 
          >             
            <Image src={iphone} alt="iPhone" className="w-full h-auto object-contain" />         
          </motion.div>

          {/* Notifications positionnées relativement à l'iPhone et à l'image */}
          <motion.div  
            className="absolute bottom-[10%] right-[-8%]" 
            initial={{ opacity: 0, x: -150 , scale: 0 , y: -150 }}         
            animate={isInView ? { opacity: 1, x: 0 , scale : 1 , y: 0 } : { opacity: 0, x: -150 , scale: 0 , y: -150}}         
            transition={{ duration: 2 , delay:1.5}} 
          >
            <Image  src={notification_1} alt="Notification 1" className="w-full h-auto object-contain"/>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-[-5%] right-[22%]" 
            initial={{ opacity: 0, x: 200 , scale: 0 , y: -200 }}         
            animate={isInView ? { opacity: 1, x: 0 , scale : 1 , y: 0 } : { opacity: 0, x: 200 , scale: 0 , y: -200}}         
            transition={{ duration: 2 , delay:2}} 
          >
            <Image  src={notification_2}  alt="Notification 2"  className="w-full h-auto object-contain" />
          </motion.div>
          
          <motion.div 
            className="absolute top-[15%] right-[2%]"
            initial={{ opacity: 0, x: -100 , scale: 0 , y: 200 }}         
            animate={isInView ? { opacity: 1, x: 0 , scale : 1 , y: 0 } : { opacity: 0, x: -100 , scale: 0 , y: 200}}         
            transition={{ duration: 2 , delay:2.5}} 
          >
            <Image src={notification_3}  alt="Notification 3" className="w-full h-auto object-contain" />
          </motion.div>

          {/* Contenu textuel - positionné par rapport à l'image */}
          <motion.div className="absolute top-[12%] left-[5%] w-[40%]">
            <h1 className='text-[clamp(2rem,5vw,4.5rem)] font-semibold font-outfit text-white leading-tight'>
              &lt; Mobile Dev &gt;
            </h1>

            <p className='font-outfit mt-[1.5rem] text-[clamp(1rem,2vw,1.5rem)] font-normal text-white leading-relaxed'>
               {t('mobile.description')} 
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
          <div className="absolute inset-0 w-full h-full ">
            <Image 
              src={mobile_service} 
              alt="Mobile Service" 
              className="w-full h-full object-cover"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>

          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>

          {/* iPhone mobile - repositionné pour mobile avec effet de fondu */}
          <motion.div            
            className="absolute  top-[20%]  z-5  h-auto "
          >    
            <Image src={iphone} alt="iPhone" className="w-auto h-full object-contain drop-shadow-lg" />         
          </motion.div>

          {/* Notifications repositionnées pour mobile */}
          <motion.div  
            className="absolute bottom-[20%] left-[15%]  z-20" 
            
          >
            <Image src={notification_1} alt="Notification 1" className="w-1/2 h-auto   object-contain "/>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-[15%] left-[65%]  z-6" 
           
          >
            <Image src={notification_2} alt="Notification 2" className="w-full h-auto object-contain " />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-[30%] left-[50%]   z-6"
          
          >
            <Image src={notification_3} alt="Notification 3" className=" h-auto object-contain drop-shadow-lg" />
          </motion.div>

          {/* Contenu textuel par-dessus l'image */}
          <div className="relative z-10 p-6 md:p-8 min-h-[700px] flex flex-col ">
            <div className="flex-1">
              <h1 className='text-[clamp(2rem,12vw,4rem)] font-semibold font-outfit text-white leading-tight mb-4 drop-shadow-lg'>
                &lt; Mobile Dev &gt;
              </h1>
              
              <p className='font-outfit text-[clamp(1rem,5vw,1.55rem)] font-normal text-white mb-6 drop-shadow-lg'>
               {t('mobile.description')} 
              </p>
            </div>
            
            {/* Bouton fixé en bas */}
          
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Mobile_Service;