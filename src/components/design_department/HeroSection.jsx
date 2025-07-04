import { useLanguage } from "@/hooks/useLanguage";
// import VideoBackground from "@/components/ui/video-background";

export default function HeroSection() {

    const { t } = useLanguage();

    return (
        <>
            <div className={`w-full h-[93vh] flex-col justify-center grid grid-rows-1 grid-cols-1 overflow-hidden relative`}>
                <div className={`max-w-[100%] sm:max-w-[70%] md:max-w-[50%] xl:max-w-[40%] flex flex-col gap-y-2 sm:gap-y-0 px-8 lg:px-12 xl:px-16 row-start-1 col-start-1 z-20 h-full justify-center`}>
                    <p className={`text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[72px]`}>{t("heroSection.title1")}</p>
                    <p className={`text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[72px] -translate-y-[15px] sm:-translate-y-[20px]`}>{t("heroSection.title2")}</p>
                    <p className={`text-white font-medium font-outfit text-[16px] sm:text-[18px] lg:text-[20px]`}>{t("heroSection.description")}</p>
                </div>
                {/* Animated background only for hero section */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2AA4E7] via-[#07467D] to-[#0C224B] overflow-hidden -z-10">
                  {/* Animated circles */}
                  <div className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] bg-[#2AA4E7]/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute top-[30%] left-[60%] w-[120px] h-[120px] bg-white/5 rounded-full blur-xl animate-pulse" />
                </div>
            </div>
        </>
    );
}