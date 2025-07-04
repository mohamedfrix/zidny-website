'use client';

import {useLanguage} from "@/hooks/useLanguage";
import {AspectRatio} from "@/components/ui/aspect-ratio";

import Image from "next/image";

import feature_1 from "@/assets/images/feature_1.png";
import feature_2 from "@/assets/images/feature_2.png";
import feature_3 from "@/assets/images/feature_3.png";
import feature_4 from "@/assets/images/feature_4.png";
import feature_5 from "@/assets/images/feature_5.png";
import feature_6 from "@/assets/images/feature_6.png";


function FeaturesSection () {

    const { t } = useLanguage();

    return (
        <>
            <div className={`w-full min-h-[70vh] mt-20 lg:mt-20 flex justify-center`}>
                <div className={`w-full flex flex-col items-center gap-y-10`}>
                    <div className={`w-full h-min grid grid-rows-[auto_auto_auto] grid-cols-1 gap-y-2 justify-items-center`}>
                        <p className={`text-primary-gradient row-start-1 font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center`}>{t('features.title')}</p>
                        <p className={`max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-[14px] row-start-2 md:text-[16px] lg:font-medium lg:text-[18px] text-tertiary text-center`}>{t('features.description')}</p>
                    </div>

                    {/* Version Mobile - Stack vertical */}
                    <div className={`w-full max-w-[90%] md:hidden flex flex-col gap-4`}>
                        <div className={`w-full h-[220px] bg-card-1 rounded-[16px] overflow-hidden relative `}>
                            <Image src={feature_1} alt="Feature Image" className={`w-full h-full object-cover`} />
                            <div className={`absolute inset-0 flex flex-col   px-4 py-4 gap-y-1 bg-black/20`}>
                                <p className={`text-white text-2xl font-bold  font-outfit md:justify-center md:text-center`}>{t('features.featuresList.0.title')}</p>
                                <p className={`text-white text-[12px] font-outfit md:text-center leading-tight w-32 font-semibold`}>{t('features.featuresList.0.description')}</p>
                            </div>
                        </div>

                        <div className={`w-full h-[200px] bg-card-4 rounded-[16px] overflow-hidden relative`}>
                            <Image src={feature_2} alt="Feature Image" className={`w-full h-full object-cover`} />
                            <div className={`absolute inset-0 flex flex-col justify-between px-4 py-6 gap-y-1 bg-gradient-to-t from-white/80 to-transparent`}>
                                <div></div>
                                <div><p className={`text-[#0C224B] text-[22px] font-bold font-outfit`}>{t('features.featuresList.1.title')}</p>
                                <p className={`text-neutral-gray-2 text-[12px] font-outfit font-bold `}>{t('features.featuresList.1.description')}</p></div>
                            </div>
                        </div>

                        <div className={`w-full grid grid-cols-2 gap-3`}>
                            <div className={`h-[160px] bg-card-4 rounded-[16px] overflow-hidden relative`}>
                                <Image src={feature_3} alt="Feature Image" className={`w-full h-full object-cover`} />
                                <div className={`absolute inset-0 flex flex-col justify-between px-3 py-4 bg-gradient-to-t from-white/80 to-transparent`}>
                                     <div></div>
                                    <p className={`text-[#0C224B] text-[14.5px] font-bold font-outfit leading-tight w-32`}>{t('features.featuresList.2.title')}</p>
                                </div>
                            </div>

                            <div className={`h-[160px] bg-card-2 rounded-[16px] overflow-hidden relative`}>
                                <Image src={feature_4} alt="Feature Image" className={`w-full h-full object-cover`} />
                                <div className={`absolute inset-0 flex flex-col justify-center px-3 py-4 gap-y-1 bg-black/20`}>
                                    <p className={`text-white font-bold text-[16px] font-outfit`}>{t('features.featuresList.3.title')}</p>
                                    <p className={`text-white text-[11px] font-outfit`}>{t('features.featuresList.3.description')}</p>
                                </div>
                            </div>
                        </div>

                        <div className={`w-full h-[200px] bg-card-4 rounded-[16px] overflow-hidden relative`}>
                            <Image src={feature_5} alt="Feature Image" className={`w-full h-full object-cover`} />
                            <div className={`absolute inset-0 flex flex-col justify-start px-4 py-6 gap-y-1 bg-gradient-to-b from-white/80 to-transparent`}>
                                <p className={`text-[#0C224B] text-2xl font-bold font-outfit`}>{t('features.featuresList.4.title')}</p>
                                <p className={`text-neutral-gray-2 font-bold  text-[14px] w-60 sm:text-[12px] font-outfit leading-tight`}>{t('features.featuresList.4.description')}</p>
                            </div>
                        </div>

                        <div className={`w-full h-[200px] bg-card-3 rounded-[16px] overflow-hidden relative`}>
                            <Image src={feature_6} alt="Feature Image" className={`w-full h-full object-cover`} />
                            <div className={`absolute inset-0 flex flex-col justify-between md:justify-end px-4 py-6 gap-y-1 bg-gradient-to-t from-white/80 to-transparent`}>
                            <div className="md:hidden"></div>
                            <div >
                                <p className={`text-[#0C224B]  text-2xl font-bold font-outfit `}>{t('features.featuresList.5.title')}</p>
                                <p className={`text-neutral-gray-2 font-bold  text-[14px] sm:text-[12px] leading-tight font-outfit`}>{t('features.featuresList.5.description')}</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* Version Desktop - Grid original */}
                    <div className={`w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[70%] hidden md:block`}>
                        <AspectRatio ratio={0.9} className={`w-full`}>
                            <div className={`w-full h-full features-grid-template gap-x-1 gap-y-1 md:gap-x-2 md:gap-y-2 grid`}>
                                <div className={`w-full h-full row-start-1 row-span-2 col-start-1 col-span-2 bg-card-1 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_1} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`row-start-1 col-start-1 z-20 w-full flex flex-col items-center px-2 py-5 sm:px-4 sm:py-8 lg:px-10 lg:py-16 gap-y-2 lg:gap-y-4`}>
                                        <p className={`text-white font-bold text-[18px] sm:text-[32px] lg:text-[42px] font-outfit text-center`}>{t('features.featuresList.0.title')}</p>
                                        <p className={`text-white leading-tight sm:leading-7 sm:font-medium text-[10px] sm:text-[12px] lg:text-[16px] font-outfit text-center`}>{t('features.featuresList.0.description')}</p>
                                    </div>
                                </div>
                                <div className={`w-full h-full row-start-1 row-span-1 col-start-3 col-span-4 bg-card-4 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_2} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`w-full row-start-1 col-start-1 z-20 self-end flex flex-col px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12 gap-y-1`}>
                                        <p className={`text-[#0C224B] text-[16px] sm:text-[28px] lg:text-[42px] font-bold font-outfit`}>{t('features.featuresList.1.title')}</p>
                                        <p className={`text-neutral-gray-2 text-[10px] sm:text-[14px] lg:text-[16px] sm:font-medium font-outfit`}>{t('features.featuresList.1.description')}</p>
                                    </div>
                                </div>
                                <div className={`w-full h-full row-start-2 row-span-1 col-start-3 col-span-2 bg-card-4 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_3} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`w-full row-start-1 col-start-1 z-20 self-end flex flex-col px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-10 gap-y-1`}>
                                        <p className={`text-[#0C224B] text-[10px] md:w-48 sm:text-[15px] lg:text-[20px] xl:text-[22px] font-bold font-outfit`}>{t('features.featuresList.2.title')}</p>
                                    </div>
                                </div>
                                <div className={`w-full h-full row-start-2 row-span-1 col-start-5 col-span-2 bg-card-2 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_4} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`row-start-1 col-start-1 z-20 w-full flex flex-col px-2 py-3 sm:px-6 sm:py-10 lg:px-4 lg:py-6 gap-y-1`}>
                                        <p className={`text-white font-bold text-[16px] sm:text-[26px] lg:text-[36px] font-outfit`}>{t('features.featuresList.3.title')}</p>
                                        <p className={`text-white sm:font-medium text-[8px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-outfit `}>{t('features.featuresList.3.description')}</p>
                                    </div>
                                </div>
                                <div className={`w-full h-full row-start-3 row-span-1 col-start-1 col-span-3 bg-card-4 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_5} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`w-full row-start-1 col-start-1 z-20 self-start flex flex-col px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14 gap-y-1`}>
                                        <p className={`text-[#0C224B] text-[16px] sm:text-[28px] lg:text-[42px] font-bold font-outfit`}>{t('features.featuresList.4.title')}</p>
                                        <p className={`text-gray-900 leading-tight sm:leading-7 md:l md:text-neutral-gray-2 text-[10px] sm:text-[14px] lg:text-[16px] sm:font-medium font-outfit`}>{t('features.featuresList.4.description')}</p>
                                    </div>
                                </div>
                                <div className={`w-full h-full row-start-3 row-span-1 col-start-4 col-span-3 bg-card-3 rounded-[16px] md:rounded-[24px] overflow-hidden grid grid-rows-1 grid-cols-1`}>
                                    <Image src={feature_6} alt="Feature Image" className={`w-full h-full object-cover row-start-1 col-start-1 z-0`} />
                                    <div className={`w-full row-start-1 col-start-1 z-20 self-end flex flex-col px-2 py-2 sm:px-6 sm:py-8 lg:px-8 lg:py-12 gap-y-1`}>
                                        <p className={`text-[#0C224B] text-[16px] sm:text-[28px] lg:text-[42px] font-bold font-outfit`}>{t('features.featuresList.5.title')}</p>
                                        <p className={`text-neutral-gray-2 text-[9px] sm:leading-7 sm:text-[14px] lg:text-[16px] sm:font-medium font-outfit`}>{t('features.featuresList.5.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeaturesSection;