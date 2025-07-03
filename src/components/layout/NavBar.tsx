'use client';

import logo from "@/assets/images/logo.svg";
import menu_icon from "@/assets/images/menu_icon.svg";
import Image from "next/image";
import { LanguageSwitcher } from "../ui/language-switcher";
import { useNavBar } from "@/hooks/useNavBar";

export default function NavBar() {
    const { toggleNavBar } = useNavBar();

    return (
        <>
            <div className="w-full min-h-[50px] px-4 py-4 sm:px-12 flex justify-between items-center sticky top-0 z-50">
                {/* Couche de fond avec blur - méthode 1 */}
                <div className="absolute inset-0 bg-gray-200/50 backdrop-blur-md sm:backdrop-blur-lg"></div>
                
                {/* Alternative : Couche de fond avec blur - méthode 2 */}
                {/* <div className="absolute inset-0 bg-gray-200/80 backdrop-blur-sm supports-[backdrop-filter]:bg-gray-200/30 supports-[backdrop-filter]:backdrop-blur-lg"></div> */}
                
                {/* Contenu par-dessus */}
                <div className="relative z-10 w-full flex justify-between items-center">
                    <Image 
                        src={logo} 
                        alt="Logo" 
                        className="w-[120px] sm:w-[160px] lg:w-[200px]" 
                    />
                    <div className="flex items-center gap-x-6 sm:gap-x-12 lg:gap-x-20">
                        <LanguageSwitcher />
                        <Image 
                            src={menu_icon} 
                            alt="Menu" 
                            className="w-[25px] sm:w-[30px] lg:w-[35px] cursor-pointer hover:opacity-80 transition-opacity" 
                            onClick={() => {toggleNavBar()}}
                        />
                    </div>
                </div>
            </div>

            {/* Version alternative avec CSS personnalisé */}
            <style jsx>{`
                @supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
                    .navbar-blur {
                        background: rgba(229, 231, 235, 0.3);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                    }
                }
                @supports not (backdrop-filter: blur(0)) and not (-webkit-backdrop-filter: blur(0)) {
                    .navbar-blur {
                        background: rgba(229, 231, 235, 0.85);
                    }
                }
            `}</style>
        </>
    );
}