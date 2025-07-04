import Image from 'next/image'
import React, { useState } from 'react'
import num01 from '@/assets/images/num01.svg';

const SubServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sub_services: { id: number }[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
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
          <div className="text-primary-gradient font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center">
            Sub-Services
          </div>
          <div className="text-[#9FA2A7] sm:font-medium text-[10px] sm:text-[12px] lg:text-[16px] font-outfit text-center max-w-3xl">
            {`Chez Zidny, le design couvre tous les points de contact : logos iconiques,
            interfaces intuitives et publications sociales qui attirent l'œil.`}
          </div>

          <div className="w-[100%] lg:w-[70%] grid grid-rows-3 lg:flex mt-6 items-center justify-center gap-6 lg:gap-4">
            {sub_services.map((item, index) => (
              <div
                key={item.id}
                className={`h-[400px] lg:h-[500px] overflow-hidden z-20 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 rounded-xl ${hoveredIndex === index ? 'flex-[1_1_600px] lg:flex-[1_1_300px] border-[#E8EBEF] border-1' : 'flex[0_1_300px] lg:flex-[0_1_250px] border-0'}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: hoveredIndex === index ? 'white' : '#2AA4E7',
                }}
              >
                <div className="flex flex-col gap-2">
                  <p className={`font-bold text-[18px] sm:text-[24px] font-outfit ${
                    hoveredIndex === index ? 'text-primary-gradient' : 'text-white'
                  }`}>
                    Identité Visuelle
                  </p>
                  <p className={`text-[#9FA2A7] font-medium text-[11px] sm:text-[14px] font-outfit transition-opacity ${
                    hoveredIndex === index ? 'opacity-100 duration-1000' : 'opacity-0 duration-300'
                  }`}>
                    {`Nous créons des logos, des systèmes de couleurs, des typographies et des chartes
                    graphiques complètes, cohérents partout où vous apparaissez. Une identité distinctive
                    aujourd'hui, évolutive demain.`}
                  </p>
                </div>
                <div className="w-full mt-4">
                  <Image
                    src={num01}
                    alt="Service Image"
                    className={`object-contain translate-x-3 translate-y-6 ${hoveredIndex === index ? 'translate-x-18 translate-y-12' : ''}`}
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