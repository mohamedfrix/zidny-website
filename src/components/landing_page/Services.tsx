'use client';

import {useLanguage} from "@/hooks/useLanguage";
import {useEffect} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const services : {id : number}[] = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
]

function ServicesSection () {

    const { t } = useLanguage();
    useEffect(() => {
        console.log(t("services.title"));
        console.log(t("aboutUs.description"));
    }, [t]);

    return (
        <>
            <div className={`w-full flex justify-center`}>
                <div className={`w-full md:max-w-[700px] lg:max-w-[900px] grid grid-rows-[auto_auto_auto] grid-cols-1 justify-items-center gap-y-3 py-12 px-4`}>
                    <p className={`text-primary-gradient row-start-1 font-bold text-[48px] md:text-[64px] lg:text-[72px] text-center`}>{t('services.title')}</p>
                    <p className={`text-[14px] row-start-2 md:text-[16px] lg:font-medium lg:text-[18px] text-tertiary text-center max-w-[95%]`}>{t('services.description')}</p>

                    <div className={`w-full lg:max-w-[700px] px-4 row-start-3 grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-2 mt-3`}>
                        {
                            services.map((service, index) => (
                                <AspectRatio key={index} ratio={1} className={`w-full max-w-[500px] bg-gray-200`}></AspectRatio>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default ServicesSection;