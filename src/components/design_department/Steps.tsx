"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import first_person from '@/assets/images/first_person.svg'
import second_person from '@/assets/images/second_person.svg'
import third_person from '@/assets/images/third_person.svg'
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export interface ProcessTemplate {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    icon: string;
    color: string;
}

export default function Process({ step }: { step: string }){ 
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const { t } = useLanguage();
  
  // Utilisez les clés de traduction au lieu du JSON statique
  const steps = [
    {
      id: 1,
      key: t(`${step}.Steps.step1`),
      title: t(`${step}.Steps.step1.title`),
      description: t(`${step}.Steps.step1.description`),
      image : first_person
    },
    {
      id: 2,
      key: t(`${step}.Steps.step2`),
      title: t(`${step}.Steps.step2.title`),
      description: t(`${step}.Steps.step2.description`),
      image : second_person
    },
    {
      id: 3,
      key: t(`${step}.Steps.step3`),
      title: t(`${step}.Steps.step3.title`),
      description: t(`${step}.Steps.step3.description`),
      image : third_person
    }
  ];
  
  // Hook pour suivre le scroll avec des offsets plus précis
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.5"]
  });

  // Transform pour une progression plus fluide
  const progress = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  // Animation variants
  const sidebarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const sidebarItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  // Effet de scroll automatique pour changer le processus actif
  useEffect(() => {
    const unsubscribe = progress.onChange((latest) => {
      // Arrondir à l'entier le plus proche et s'assurer que c'est dans les limites
      const newActiveIndex = Math.round(Math.max(0, Math.min(steps.length - 1, latest)));
      setActiveProcess(newActiveIndex);
    });

    return () => unsubscribe();
  }, [progress,steps.length]);

  // Alternative avec Intersection Observer pour plus de précision
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step') || '0');
            setActiveProcess(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observer chaque step
    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-[200vh] sm:min-h-[250vh] lg:min-h-[300vh] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 items-center justify-center overflow-x-hidden lg:overflow-x-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Titre principal avec traduction */}
      <div className="text-primary-gradient font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto pb-8 sm:pb-12 lg:pb-20 break-words">
        {t('process.title')}
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Sidebar gauche avec navigation - cachée sur mobile */}
          <motion.div 
            className="hidden lg:block lg:col-span-3"
            variants={sidebarVariants}
          >
            <div className="sticky top-24">
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-6 break-words">
                  {t('process.title')}
                </h3>
                
                <div className="space-y-4">
                  {steps.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={sidebarItemVariants}
                      className="relative"
                    >
                      {/* Ligne de connexion */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-8 bg-gray-200" />
                      )}
                      
                      <motion.button
                        onClick={() => setActiveProcess(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 relative ${
                          activeProcess === index
                            ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Indicateur actif */}
                        <div className={`w-2 h-2 rounded-full absolute left-3 top-5 transition-all duration-300 ${
                          activeProcess === index ? 'bg-blue-500' : 'bg-gray-300'
                        }`} />
                        
                        <div className="ml-6">
                          <div className="font-medium text-sm break-words">{item.title}</div>
                        </div>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <motion.div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{Math.round(((activeProcess + 1) / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeProcess + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu principal */}
          <motion.div 
            className="col-span-1 lg:col-span-9 w-full"
            variants={contentVariants}
          >
            <div className="space-y-16 sm:space-y-20 lg:space-y-32 w-full">
              {steps.map((item, index) => (
                <motion.div 
                  key={item.id}
                  data-step={index}
                  className={`flex flex-col lg:flex-row items-center justify-center lg:gap-8 xl:gap-12 space-y-8 lg:space-y-0 min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] w-full ${
                    index % 2 === 0 ? '' : 'flex-col-reverse lg:flex-row-reverse'
                  }`}
                  animate={{
                    scale: activeProcess === index ? 1 : 0.95,
                    opacity: 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Contenu texte */}
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 text-center lg:text-left order-2 lg:order-1 w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
                    <motion.p 
                      className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-outfit text-primary-gradient w-full break-words"
                      animate={{
                        y: activeProcess === index ? 0 : 20,
                        opacity: 1
                      }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {item.title}
                    </motion.p>
                    <motion.p 
                      className="text-[#9FA2A7] font-medium text-sm sm:text-base lg:text-lg font-outfit transition-opacity w-full tracking-wide break-words"
                      animate={{
                        y: activeProcess === index ? 0 : 20,
                        opacity: 1
                      }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Image */}
                  <motion.div
                    className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-1/2 flex justify-center"
                    animate={{
                      scale: activeProcess === index ? 1 : 0.9,
                      opacity: 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={item.image}
                      alt={`step-${item.id}`}
                      className='w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto max-w-full'
                      priority={index === 0}
                    />
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Bouton CTA */}
              <div className="flex justify-center lg:justify-start w-full px-4 sm:px-6 lg:px-0">
                <Link href={'/Devis'}>
                  <motion.button 
                    className="bg-[#0A60AD] cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 md:px-10 lg:px-12 rounded-4xl duration-200 text-sm sm:text-base font-outfit shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(`${step}.button`)}
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div> 
    </motion.section>
  );
}