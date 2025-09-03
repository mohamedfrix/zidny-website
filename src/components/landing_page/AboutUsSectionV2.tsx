 import Image from "next/image"
import Titre_Component from "./Titre_Component"
import iPhone from "@/assets/images/AboutUs/iPhone.png"
import Flash from "@/assets/images/AboutUs/Flash.svg"
import Flash2 from "@/assets/images/AboutUs/Flash2.svg"
import LogoAT from "@/assets/images/AboutUs/LogoAT.svg"
import ZidnyPicture from "@/assets/images/AboutUs/ZidnyPicture.jpg"
import Greek from "@/assets/images/AboutUs/greek_bg.svg"

import { useLanguage } from '@/hooks/useLanguage';



function AboutUsSectionV2() {

    const { t } = useLanguage();
     
    return(
        <div className="">

                <Titre_Component title={t('aboutUs.title')} subtitle={t('aboutUs.description')} />
                <div className=" flex flex-col sm:grid    lg:grid-cols-[30%_70%]  mx-6 sm:mx-20 gap-5 mt-15 sm:mt-7 xl:h-screen">

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#050520] to-[#194393] h-[650px]">

                       <Image src={iPhone} alt="iPhone"  className="absolute z-10 top-1/6 "/>
                       <p className=" z-20  leading-tight pl-4 font-outfit text-lg mt-4 font-normal text-white">{t("aboutUs.description1")}</p> 

                    </div>

                    <div className=" grid lg:grid-rows gap-5">

                        <div className="relative overflow-hidden rounded-3xl border-[1px] border-gray-900 h-[330px] lg:h-auto ">
                          <div className="absolute w-full h-48 lg:h-56 overflow-hidden">
                                <Image 
                                    src={ZidnyPicture} 
                                    alt="ZidnyPic" 
                                    fill
                                    className="object-cover"
                                />
                           </div>
                            <div className="h-full flex flex-col justify-between ">
                                <div >
                                    
                                </div>
                                <div className="mb-6 w-3/4">
                              <p className=" leading-tight pl-4 font-outfit text-lg mt-4 font-semibold text-[#0C224B]">Zidny </p>
                              <p className=" leading-tight   pl-4 font-outfit text-lg   font-light text-[#9FA2A7]">{t("aboutUs.description2")}</p> 
       
                                </div>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-5  ">
                           <div className="rounded-3xl border-[1px] border-gray-900 h-[330px] lg:h-auto relative overflow-hidden">
                        <div className="absolute inset-0 z-10">
                            <Image 
                            src={Greek} 
                            alt="greek" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 z-20 flex flex-col justify-start p-4">
                            <p className="leading-tight font-outfit text-lg font-semibold text-[#0C224B] mb-2">
                            {t("aboutUs.title2")}
                            </p>
                            <p className="leading-tight font-outfit text-lg font-light text-[#9FA2A7]">
                            {t("aboutUs.description3")}
                            </p>
                            </div>
                        </div>

                            <div className="relative rounded-3xl  bg-[#050520] overflow-hidden h-[330px] lg:h-auto">
                              <p className=" z-20  leading-tight pl-4 font-outfit text-lg mt-4 font-normal text-white"> {t("aboutUs.description4")}</p> 
                              <Image src={Flash} alt="Flash" className="absolute z-10" /> 
                              <Image src={Flash2} alt="Flash" className="absolute z-10" /> 

                              <Image src={LogoAT} alt="Logo Algérie Telecom " className="absolute z-20 inset-1/2 -translate-x-1/2 -translate-y-1/2" />

                            </div>

                        </div>

                    </div>

                </div>
        </div>
    )
}

export default AboutUsSectionV2