import { useLanguage } from "@/hooks/useLanguage";
import footer_bg_1 from "@/assets/images/footer_bg_1.svg";
import footer_bg_2 from "@/assets/images/footer_bg_2.svg";
import gradient from "@/assets/images/gradient.png"
import tiktok_icon from "@/assets/images/tiktok_colored.svg";
import instagram_icon from "@/assets/images/instagram_colored.svg";
import linkedin_icon from "@/assets/images/linked.svg";
import gmail_icon from "@/assets/images/gmail_colored.svg";
import logo from "@/assets/images/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Footer() {
  const { t } = useLanguage();


  const navigateGmail = () => {
    window.location.href = "mailto:contact@zidnyagency.com";
  };

  const navigateLinkedIn = () => {
    window.open("https://www.linkedin.com/in/zidny-agency/", "_blank");
  };

  const navigateInstagram = () => {
    window.open("https://www.instagram.com/zidny.agency/", "_blank");
  };

  const navigateTikTok = () => {
    window.open("https://www.tiktok.com/@zidny.agency", "_blank");
  };



  return (
    <section className="relative  text-center overflow-hidden">
      {/* Arrière-plan superposé */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footer_bg_1}
          alt="Background 1"
          className="w-full h-full object-cover"
        />
        <Image
          src={footer_bg_2}
          alt="Background 2"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>

      <div className="absolute z-20 sm:flex justify-center items-center text-center right-0 top-1/3 sm:top-1/2 -translate-y-1/2 w-1/3 sm:w-1/4">
        <Image src={gradient} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute z-9 sm:flex text-center left-0 sm:left-[-120px] sm:top-1/2 top-1/3 w-1/3 ">
        <Image src={gradient} alt="" className="w-full h-auto" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-3">
        {/* Titre et CTA */}
        <div className="w-full max-w-xl mb-6 flex flex-col items-center gap-4">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-[42px] leading-tight font-bold">
            {t("footer.title")}
          </h1>
          <p className="text-white text-sm sm:text-base">{t("footer.description")}</p>
          <Link href="/Devis">
            <button className="border border-white text-white rounded-3xl py-2 px-6 sm:px-8 cursor-pointer hover:bg-[#0C224B] transition">
              {t("footer.start")}
            </button>
          </Link>
        </div>

        {/* Bloc principal */}
        <div className="w-full max-w-6xl bg-white rounded-2xl p-4 sm:p-12 mt-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Colonne 1 : Logo */}
            <div className="flex md:block justify-center md:justify-start">
              <Image src={logo} alt="Logo" className="w-32 sm:w-40" />
            </div>

            {/* Colonne 2 : Navigation */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-[#808080] text-sm sm:text-base">Zidny</p>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">{t("navigation.home")}</p></Link>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">{t("navigation.about")}</p></Link>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">{t("navigation.contact")}</p></Link>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-[#808080] text-sm sm:text-base">Services</p>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">Web</p></Link>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">Mobile</p></Link>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">Design</p></Link>
                <Link href="/"><p className="hover:text-[#808080] text-neutral-gray-2 text-sm sm:text-base">Filming & Editing</p></Link>
              </div>
            </div>

            {/* Colonne 3 : Réseaux sociaux */}
            <div className="flex flex-col items-center md:items-start gap-3">
              {[{
                icon: instagram_icon,
                navigate: navigateInstagram,
                text: t("footer.instagram")
              }, {
                icon: linkedin_icon,
                navigate: navigateLinkedIn,                
                text: t("footer.linkedin")
              }, {
                icon: gmail_icon,
                navigate: navigateGmail,
                text: t("footer.email")
              }, {
                icon: tiktok_icon,
                navigate: navigateTikTok,
                text: t("footer.tiktok")
              }].map((item, index) => (
                <Link key={index} href="/" onClick={item.navigate}  className="w-full max-w-xs ">
                  <div className="flex items-center gap-3 border border-gray-300 rounded-3xl py-2 px-4 hover:text-[#808080]">
                    <Image  src={item.icon} alt="" className="w-5 h-5" />
                    <p className="text-neutral-gray-2 text-sm sm:text-base">{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-white mt-6 text-xs sm:text-sm">© Zidny. All rights reserved</p>
      </div>
    </section>
  );
}
