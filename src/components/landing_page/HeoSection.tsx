import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[93vh] overflow-hidden">
      {/* Animated background fallback */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2AA4E7] via-[#07467D] to-[#0C224B] overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] bg-[#2AA4E7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[30%] left-[60%] w-[120px] h-[120px] bg-white/5 rounded-full blur-xl animate-pulse" />
      </div>


      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block w-full h-full object-cover"
          
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>

        {/* Mobile video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block sm:hidden w-full h-full object-cover"
          
        >
          <source src="/videos/hero_mobile.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex  justify-center h-3/4  px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col justify-center text-center gap-y-1 sm:gap-y-0 max-w-[100%] sm:max-w-[70%] md:max-w-[50%] xl:max-w-[80%] mt-20 sm:mt-0">
          <p className="text-[#2AA4E7] md:text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[80px]">
            {t("heroSection.title1")}
          </p>

          <p className="text-[#2AA4E7] md:text-white font-black font-outfit text-[42px] sm:text-[52px] lg:text-[80px] -translate-y-[15px] sm:-translate-y-[20px]">
            {t("heroSection.title2")}
          </p>
          <p className="text-[#2AA4E7] md:text-white font-medium font-outfit text-[20px] sm:text-[18px] lg:text-[20px]">
            {t("heroSection.description")}
          </p>
            <Link href="/Devis">
            <button className="mt-5 border bg-[#0A60AD]  text-white rounded-4xl py-3 px-5 sm:px-8 text-lg cursor-pointer hover:bg-[#0C224B] transition">
              {t("heroSection.button")}
            </button>
          </Link>      
            </div>
      </div>
    </div>
  );
}