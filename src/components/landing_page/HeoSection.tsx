
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {

    const { t } = useLanguage();

    return (
        <>
            <div className={`w-full h-[93vh] bg-gray-400 flex flex-col justify-center`}>
                <div className={`max-w-[100%] sm:max-w-[70%] md:max-w-[50%] xl:max-w-[40%] flex flex-col gap-y-2 sm:gap-y-0 px-8 lg:px-12 xl:px-16`}>
                    <p className={`text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[72px]`}>{t("heroSection.title1")}</p>
                    <p className={`text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[72px] -translate-y-[15px] sm:-translate-y-[20px]`}>{t("heroSection.title2")}</p>
                    <p className={`text-white font-medium font-outfit text-[16px] sm:text-[18px] lg:text-[20px]`}>{t("heroSection.description")}</p>
                </div>            
            </div>
        </>
    );
}