"use client"

import { NavbarMenuContext } from "@/app/(context)/NavbarMenuContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Logo = () => {
    const { toggleMenu } = useContext(NavbarMenuContext)

    const changeMenuState = () => {
        toggleMenu()
    }
    
    return (
        <div className="flex">
            <Link href={'/'} className="" onClick={toggleMenu}>
                {/* <h1 className="font-black font-sans text-3xl hover:underline underline-offset-2">Emily Lim</h1> */}
                <Image 
                className="w-40 h-full"
                src={'/media/logo/Emily-website-logo.svg'}
                alt="Emily Logo"
                width={500}
                height={500}
                />
            </Link>
        </div>
    );
}
 
export default Logo;