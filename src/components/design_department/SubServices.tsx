import Image from 'next/image'
import React, { useState } from 'react'
import num01 from '@/assets/images/01.svg';
import num02 from '@/assets/images/02.svg';
import num03 from '@/assets/images/03.svg';
import { useLanguage } from "@/context/LanguageContext";

const SubServices = ({ service }: { service: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const sub_services = [
    { 
      id: 1,
      title: t(`${service}.subservices.service1.title`),
      description: t(`${service}.subservices.service1.description`),
      point1: t(`${service}.subservices.service1.point1`),
      point2: t(`${service}.subservices.service1.point2`),
      point3: t(`${service}.subservices.service1.point3`),
      num : num01

    },
    { 
      id: 2,
      title: t(`${service}.subservices.service2.title`),
      description: t(`${service}.subservices.service2.description`),
      point1: t(`${service}.subservices.service2.point1`),
      point2: t(`${service}.subservices.service2.point2`),
      point3: t(`${service}.subservices.service2.point3`),
      num : num02

    },
    { 
      id: 3,
      title: t(`${service}.subservices.service3.title`),
      description: t(`${service}.subservices.service3.description`),
      point1: t(`${service}.subservices.service3.point1`),
      point2: t(`${service}.subservices.service3.point2`),
      point3: t(`${service}.subservices.service3.point3`),
      num : num03

    }
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="pt-28 px-4 sm:px-6 lg:pl-20">
      <div className="w-full h-full mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-primary-gradient font-bold text-[56px] md:text-[64px] lg:text-[72px] text-center">
            {t(`${service}.subservices.title`)}
          </div>
          <div className="text-[#9FA2A7] sm:font-medium text-[14px] sm:text-[16px] lg:text-[18px] font-outfit text-center max-w-3xl">
            {t(`${service}.subservices.description`)}
          </div>

          <div className="w-[100%] lg:w-[70%] grid grid-rows-3 lg:flex mt-6 items-center justify-center gap-6 lg:gap-4">
            {sub_services.map((item, index) => (
             <div
                key={item.id}
                className={`h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden z-20 p-3 sm:p-4 lg:p-6 flex flex-col justify-between transition-all duration-500 ease-in-out rounded-xl ${
                  hoveredIndex === index 
                    ? 'flex-[1_1_100%] sm:flex-[1_1_500px] lg:flex-[1_1_600px] border-[#E8EBEF] border-1' 
                    : 'flex-[0_1_100%] sm:flex-[0_1_280px] lg:flex-[0_1_300px] border-0'
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: hoveredIndex === index ? 'white' : '#2AA4E7',
                }}
              >
                <div className="flex flex-col gap-2">
                  <p className={`font-bold text-[20px] sm:text-[22px] lg:text-[24px] font-outfit transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-primary-gradient' : 'text-white'
                  }`}>
                    {item.title}
                  </p>
                  <p className={`text-[#9FA2A7] font-medium text-[14px] sm:text-[15px] lg:text-[16px] font-outfit transition-all duration-700 ease-in-out ${
                    hoveredIndex === index ? 'opacity-100 max-h-20 transform translate-y-0' : 'opacity-0 max-h-0 transform -translate-y-2'
                  }`}>
                    {item.description}
                  </p>
                  <ul className={`mt-2 sm:mt-4 list-disc text-[#9FA2A7] font-medium text-[14px] sm:text-[15px] lg:text-[16px] font-outfit transition-all duration-700 ease-in-out delay-100 ${
                    hoveredIndex === index ? 'opacity-100 max-h-32 transform pl-5 translate-y-0' : 'opacity-0 max-h-0 transform -translate-y-2'
                  }`}>
                    <li className="transition-all duration-500 delay-200">{item.point1}</li>
                    <li className="transition-all duration-500 delay-300">{item.point2}</li>
                    <li className="transition-all duration-500 delay-400">{item.point3}</li>
                  </ul>
                </div>
                <div className="w-full mt-2 sm:mt-4">
                  <Image
                    src={item.num}
                    alt="Service Image"
                    className={`object-contain transition-transform duration-300 ease-in-out ${
                      hoveredIndex === index 
                        ? 'translate-x-6 translate-y-6 sm:translate-x-12 sm:translate-y-8 lg:translate-x-18 lg:translate-y-12 scale-105' 
                        : 'translate-x-2 translate-y-3 sm:translate-x-3 sm:translate-y-6 scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubServices;