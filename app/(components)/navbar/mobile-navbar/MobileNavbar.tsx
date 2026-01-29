"use client"

import { NavbarMenuContext } from "@/app/(context)/NavbarMenuContext"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useContext, useState } from "react"

const MobileNavbar = () => {
    
    const { isMenuOpen, toggleMenu } = useContext(NavbarMenuContext)

    const changeState = () => {
        toggleMenu()
    }

    return (
        <div className="flex sm:hidden justify-end text-black ">
            <button className="hover:cursor-pointer"
            onClick={changeState}
            >
                {
                    isMenuOpen ? 
                    <XMarkIcon 
                    className="w-10 h-10"
                    /> :
                    <Bars3Icon 
                    className="w-10 h-10" 
                    />
                }
            </button>
        </div>
    )
}
 
export default MobileNavbar;