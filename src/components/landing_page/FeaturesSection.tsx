'use client';

import {useLanguage} from "@/hooks/useLanguage";
import {AspectRatio} from "@/components/ui/aspect-ratio";


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

                    <div className={`w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[70%]`}>
                        <AspectRatio ratio={0.9} className={`w-full`}>
                            <div className={`w-full h-full features-grid-template gap-x-2 gap-y-2 grid`}>
                                <div className={`w-full h-full row-start-1 row-span-2 col-start-1 col-span-2 bg-card-1 rounded-lg`}></div>
                                <div className={`w-full h-full row-start-1 row-span-1 col-start-3 col-span-4 bg-card-4 rounded-lg`}></div>
                                <div className={`w-full h-full row-start-2 row-span-1 col-start-3 col-span-2 bg-card-4 rounded-lg`}></div>
                                <div className={`w-full h-full row-start-2 row-span-1 col-start-5 col-span-2 bg-card-2 rounded-lg`}></div>
                                <div className={`w-full h-full row-start-3 row-span-1 col-start-1 col-span-3 bg-card-4 rounded-lg`}></div>
                                <div className={`w-full h-full row-start-3 row-span-1 col-start-4 col-span-3 bg-card-3 rounded-lg`}></div>
                            </div>
                        </AspectRatio>
                    </div>


                </div>
            </div>
        </>
    );
}
export default FeaturesSection;