'use client';

import { createContext, useState, useContext, useEffect } from "react";

interface NavBarContextType {
    open: boolean;
    toggleNavBar: () => void;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

interface NavBarProviderProps {
    children: React.ReactNode;
}

export function NavBarProvider({ children }: NavBarProviderProps) {
    const [open, setOpen] = useState(false);

    const toggleNavBar = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        console.log("NavBar is now", open ? "open" : "closed");
    }, [open])

    return (
        <NavBarContext.Provider value={{ open, toggleNavBar }}>
            {children}
        </NavBarContext.Provider>
    );
}

export function useNavBar(): NavBarContextType {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error("useNavBar must be used within a NavBarProvider");
    }
    return context;
}