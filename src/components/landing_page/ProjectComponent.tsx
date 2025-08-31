import Image from "next/image";

import Project2 from '../../assets/images/Projects/Project2.jpg';
import Project3 from '../../assets/images/Projects/Project3.jpg';
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";


function ProjectComponent() {

   const {t} = useLanguage()

    return (
        <div>
        <div className="w-full h-screen  flex items-center justify-center bg-gray-300  mt-30 sticky top-0">

            <Image src={Project2}  alt="Project 2"  className="w-4/5 sm:w-2/5  absolute z-30 h-2/5 sm:h-1/2 md:h-3/5 lg:h-1/2 object-cover m-4 rounded-3xl shadow-lg bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm p-2"  />          
            <div className="absolute inset-0 z-10 backdrop-blur-lg bg-white/5"></div>                 
            <Image src={Project2} alt="Project 3"  className="h-screen absolute z-0 object-cover m-4 backdrop-blur-3xl bg-white/10"/>            
            <div className="absolute inset-0 z-20 font-outfit py-7 text-white justify-between text-center items-center flex flex-col">
                <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wider">   {t("Portfolio.Travail")}  </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[96px]  text-center leading-tight md:pr-32 font-medium mt-2 ">   El Heyba Architecture</p>
                </div>
                
                <div className=" flex flex-col gap-5 ">
                <Link href="https://www.behance.net/gallery/232003999/Elheyba-architecture"><p className="text-sm sm:text-base md:text-lg font-normal cursor-pointer transition-all duration-300   px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-2 rounded-3xl bg-[#0A60AD] hover:bg-[#0C224B] "> {t("Portfolio.Voir")}  </p></Link>
                </div>
            </div>

        </div>

        <div className="w-full h-screen relative flex items-center justify-center bg-gray-300">

            <Image src={Project3}  alt="Project 2"  className="w-4/5 sm:w-2/5  absolute z-30 h-2/5 sm:h-1/2 md:h-3/5 lg:h-1/2 object-cover m-4 rounded-3xl shadow-lg bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm p-2"  />          
            <div className="absolute inset-0 z-10 backdrop-blur-lg bg-white/5"></div>                 
            <Image src={Project3} alt="Project 3"  className="h-screen absolute z-0 object-cover m-4 backdrop-blur-3xl bg-white/10"/>            
            <div className="absolute inset-0 z-20 font-outfit py-7 text-white justify-between text-center items-center flex flex-col">
                <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wider">    {t("Portfolio.Travail")}  </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[96px]  text-center leading-tight md:pr-32 font-medium mt-2 ">   IncubAT</p>
                </div>
                
                <div className=" flex flex-col gap-5 ">
                    <Link href="https://www.behance.net/gallery/232003713/IncubAT"> <p className="text-sm sm:text-base md:text-lg font-normal cursor-pointer transition-all duration-300   px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-2 rounded-3xl bg-[#0A60AD] hover:bg-[#0C224B] "> {t("Portfolio.Voir")}  </p></Link>
                </div>
            </div>

        </div>
        </div>
    );
}

export default ProjectComponent;