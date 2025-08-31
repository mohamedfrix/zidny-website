import bg1 from "@/assets/images/Hero/bg1.svg"
import Image from "next/image";
import bg2 from "@/assets/images/Hero/bg2.svg"
import card1 from "@/assets/images/Hero/card1.svg"
import card2 from "@/assets/images/Hero/card2.svg"
import card3 from "@/assets/images/Hero/card3.svg"
import card4 from "@/assets/images/Hero/card4.svg"
import { motion } from "framer-motion"
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function HeroSectionV2() {

    const {t} = useLanguage()

    return (
        <div className="min-h-screen w-full relative bg-[#07142C] overflow-hidden  " style={{ WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(239, 246, 255, 0.4) 100%)', mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(239, 246, 255, 0.4)  100%)'}}>

            <Image src={bg2} alt="bg2" className="z-10 absolute inset-0 w-full h-full object-cover "  />            
            <Image  src={bg1}  alt="Bg1" className="absolute text-blu right-0 inset-0 w-full h-full  z-20 object-cover " style={{ WebkitMask: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', mask: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'}}  />
           
            <motion.svg 
                className="hidden lg:block absolute right-1/3 z-30 object-cover h-full w-full inset-0" 
                width="318" 
                height="615" 
                viewBox="0 0 318 615" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path 
                    d="M1 819L1 501.914V400.609V222C1 208.745 11.7452 198 25 198H169.667H293.5C306.755 198 317.5 187.255 317.5 174V0.5" 
                    stroke="url(#paint0_linear_952_989)"
                    strokeDasharray="2000"
                  
                />
                <defs>
                    <linearGradient id="paint0_linear_952_989" x1="317" y1="9" x2="53" y2="687.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.485577" stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white"/>
                    </linearGradient>
                </defs>
            </motion.svg>



            <motion.svg 
                className="hidden lg:block absolute right-0 z-30 object-cover" 
                width="179" 
                height="339" 
                viewBox="0 0 179 339" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path 
                    d="M339 338H25C11.7452 338 1 327.255 1 314V-79C1 -92.2548 11.7452 -103 25 -103H85.5" 
                    stroke="url(#paint0_linear_960_932)"
                    strokeDasharray="1500"
                
                />
                <defs>
                    <linearGradient id="paint0_linear_960_932" x1="170" y1="-103" x2="170" y2="338" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white"/>
                    </linearGradient>
                </defs>
            </motion.svg>

            <motion.svg 
                className="hidden lg:block absolute right-0 z-30 object-cover top-2/3"  
                width="179" 
                height="424" 
                viewBox="0 0 179 424" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path 
                    d="M339 1H25C11.7452 1 1 11.7452 1 25V418C1 431.255 11.7452 442 25 442H85.5" 
                    stroke="url(#paint0_linear_960_934)"
                    strokeDasharray="1800"
               
                />
                <defs>
                    <linearGradient id="paint0_linear_960_934" x1="170" y1="1" x2="29" y2="394" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.451923" stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white"/>
                    </linearGradient>
                </defs>
            </motion.svg>


            <div className="absolute inset-1 z-40 h-screen grid grid-rows-2 xl:grid-cols-2 pt-4 sm:pt-6 md:pt-8 lg:pt-10 mt-20 md:mt-16 lg:mt-20">

                {/* Images section - apparaît en premier sur mobile, en second sur desktop */}
                <div className="order-1 lg:order-2 grid items-center justify-center grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-0 ">
                    <div>
                        <div className="w-full h-auto">
                            <Image src={card1} alt="" className="" />
                        </div>
                        <div className="w-4/5 md:w-3/4 lg:w-2/3 ml-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                            <Image src={card2} alt="" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={card3} alt="" className="mt-4 sm:mt-6 md:mt-8 lg:mt-10" />

                        </div>
                        <div>
                            <Image src={card4} alt="" className="mt-4 sm:mt-6 md:mt-8 lg:mt-10" />
                        </div>
                    </div>
                </div>

                {/* Text section - apparaît en second sur mobile, en premier sur desktop */}
                <div className="order-2 lg:order-1 text-white font-outfit flex flex-col lg:mt-30 sm:justify-center ml-4 sm:ml-6 md:ml-8 lg:ml-12 gap-3 sm:gap-4 md:gap-5 lg:gap-5">
                    <p className="text-sm md:text-base lg:text-[16px] font-normal">On digitalise même ta grand-mère.</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">{t("heroSection.title1")}</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-normal w-full sm:w-3/4 md:w-4/5 lg:w-2/3">{t("heroSection.description")}.</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-5">
                        <Link href="/Devis" ><p  className="cursor-pointer bg-[#0A60AD] px-4 sm:px-5 md:px-6 lg:px-6 py-2 rounded-3xl text-base">{t("heroSection.button")}</p></Link>
                        <div className="flex border-[1px] border-white rounded-3xl px-3 sm:px-4 md:px-5 py-2 cursor-pointer">
                            <p className="text-base">Explore</p>
                            <svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.894 12.7V3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8998 20.3539C13.1558 20.3539 17.1708 13.9899 16.4488 13.2679C15.7268 12.5459 8.14181 12.4769 7.35081 13.2679C6.55981 14.0599 10.6448 20.3539 11.8998 20.3539Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSectionV2