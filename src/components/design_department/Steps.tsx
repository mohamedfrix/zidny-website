"use client";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import first_person from '@/assets/images/first_person.svg'


export interface ProcessTemplate {
    id: number ;
    title : string ; 
    subtitle : string;
    desc : string;
    icon : string;
    color : string ;

  }

   const steps: { id: number }[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];


export default function Process( ) {
  const sectionRef = useRef(null);
  const [activeProcess, setActiveProcess] = useState(0);
  
  // Hook pour suivre le scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });



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
    const handleScroll = () => {
      const progress = scrollYProgress.get();
      const newActiveIndex = Math.floor(progress * steps.length);
      setActiveProcess(Math.min(newActiveIndex, steps.length - 1));
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen px-4 pt-28 items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Titre principal */}
      <div className="text-primary-gradient font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center max-w-2xl lg:pb-40 lg:translate-x-1/2">
                  Comment ça se passe chez Zidny ?
                </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar gauche avec navigation */}
          <motion.div 
            className="lg:col-span-3"
            variants={sidebarVariants}
          >
            <div className="sticky top-24">
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Process Steps</h3>
                
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
                          <div className="font-medium text-sm">                          1. Brief & Découverte 
</div>
                        </div>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <motion.div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Progress</span>
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

          {/* Contenu principal à droite */}
          <motion.div 
            className="lg:col-span-9"
            variants={contentVariants}
          >
            <div className="space-y-8">
               {
                  steps.map((item) => (
                    <div key={item.id} className='grid grid-rows-2 items-center justify-center lg:flex lg:flex-row lg:gap-40 place-items-center lg:place-items-start'>
                      <div className="flex flex-col gap-2 lg:gap-5">
                        <p className={`font-semibold text-[18px] sm:text-[52px] leading-16 font-outfit text-primary-gradient max-w-80`}>
                          1. Brief & Découverte 
                        </p>
                        <p className={`text-[#9FA2A7] lg:mt-4 font-medium text-[11px] sm:text-[14px] font-outfit transition-opacity max-w-[23rem] tracking-wide`}>
                          Vous nous dites qui vous êtes et où vous voulez aller. Grâce à un formulaire simple 
                          et une réunion de découverte, on identifie vos objectifs, vos valeurs, et vos repères visuels.
                        </p>
                        <p className={`text-[#9FA2A7] font-medium text-[11px] sm:text-[14px] font-outfit transition-opacity max-w-[21rem] tracking-wide`}>
                          Que vous ayez déjà une vision ou que vous partiez de zéro, on collecte tous les ingrédients pour créer 
                          une identité forte et unique.
                        </p>
                      </div>
                      <Image
                      src={first_person}
                      alt='first-step'
                      className='lg:-translate-y-15 w-[60%] lg:w-[47%]'
                      />
                    </div>
                  ))
                }
            </div>
          </motion.div>
        </div>
      </div> 

    </motion.section>
  );
}