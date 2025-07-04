import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import footer_bg_1 from "@/assets/images/footer_bg_1.svg";
import footer_bg_2 from "@/assets/images/footer_bg_2.svg";
import tiktok_icon from "@/assets/images/tiktok_colored.svg";
import instagram_icon from "@/assets/images/instagram_colored.svg";
import linkedin_icon from "@/assets/images/linkedin.svg";
import gmail_icon from "@/assets/images/gmail_colored.svg";
import logo from "@/assets/images/logo.svg";

import Image from "next/image";
import Link from "next/link";

const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative text-center overflow-hidden" style={{
      transition: 'transform 0.3s ease-out',
      willChange: 'transform' // Improves animation performance
    }}>
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

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-3">
        {/* Titre et CTA */}
        <div className="w-full max-w-xl mb-6 flex flex-col items-center gap-4">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-[42px] leading-tight font-bold">
            {t("footer.title")}
          </h1>
          <p className="text-white text-sm sm:text-base">{t("footer.description")}</p>
          <Link href="/devis">
            <button className="border border-white text-white rounded-3xl py-2 px-6 sm:px-8 hover:bg-[#0C224B] transition">
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
                text: t("footer.instagram")
              }, {
                icon: linkedin_icon,
                text: t("footer.linkedin")
              }, {
                icon: gmail_icon,
                text: t("footer.email")
              }, {
                icon: tiktok_icon,
                text: t("footer.tiktok")
              }].map((item, index) => (
                <Link key={index} href="/" className="w-full max-w-xs">
                  <div className="flex items-center gap-3 border border-gray-300 rounded-3xl py-2 px-4 hover:text-[#808080]">
                    <Image src={item.icon} alt="" className="w-5 h-5" />
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
});

Footer.displayName = 'Footer';

export default Footer;