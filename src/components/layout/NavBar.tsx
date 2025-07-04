'use client';

import logo from "@/assets/images/logo.svg";
import menu_icon from "@/assets/images/menu_icon.svg";
import Image from "next/image";
import { LanguageSwitcher } from "../ui/language-switcher";
import { useNavBar } from "@/hooks/useNavBar";

export default function NavBar () {

    const { toggleNavBar } = useNavBar();

    return (
        <>
            <div className={`w-full min-h-[50px] px-4 py-4 sm:px-12 flex justify-between items-center sticky top-0 bg-gray-200 z-100`}>
                <Image src={logo} alt="Logo" className={`w-[100px] sm:w-[120px] lg:w-[140px]`} />
                <div className={`flex items-center gap-x-6 sm:gap-x-12 lg:gap-x-20`}>
                    <LanguageSwitcher />
                    <Image src={menu_icon} alt="Menu" className={`w-[25px] sm:w-[30px] lg:w-[35px]`} 
                        onClick={() => {toggleNavBar()}}
                    />
                </div>
            </div>
        </>
    );
}