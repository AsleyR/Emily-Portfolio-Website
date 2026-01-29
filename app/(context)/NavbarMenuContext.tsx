"use client"

import { createContext, ReactNode, useState } from "react"

type NavbarMenuProps = {
    children: ReactNode;
}

export const NavbarMenuContext = createContext({ isMenuOpen: false, 
    toggleMenu: () => {} })

export const NavbarMenuProvider: React.FC<NavbarMenuProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <NavbarMenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </NavbarMenuContext.Provider>
    )
}