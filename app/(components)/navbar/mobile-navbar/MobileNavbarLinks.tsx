"use client"

import { NavbarMenuContext } from "@/app/(context)/NavbarMenuContext"
import { PencilSquareIcon, PhoneIcon, UserIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { useContext } from "react"

interface ILinkDict {
    [key: string]: {
        link: string;
        text: string;
    }
}

interface MobileNavbarLinkProps {
    text: string;
    link: string;
    icon_url?: string;
}

const MobileNavbarLink = ({ text, link, icon_url }: MobileNavbarLinkProps) => {
    return (
        <Link href={link}
        className="px-[1.25rem] py-[2rem] w-full text-black 
        text-2xl hover:bg-gray-100 sticky"
        key={text+link}
        >
            {
                icon_url ? 
                <div className="">
                    
                </div>
                : <></>
            }
            {text}
        </Link>
    )
}

const MobileNavbarLinks = () => {
    const { isMenuOpen, toggleMenu } = useContext(NavbarMenuContext)

    const linkDict: ILinkDict = {
        "Portfolio": {
            link: "#portfolio",
            text: "PORTFOLIO"
        },
        "About": {
            link: "#about-me",
            text: "ABOUT ME"
        },
        "Contact": {
            link: "#contact-me",
            text: "CONTACT ME"
        }
    }

    const get_keys = (dict: ILinkDict) => {
        return Object.keys(dict)
    }

    const changeMenuState =() => {
        toggleMenu()
    }

    return (
        <>
        {
            isMenuOpen ?
            <div className="absolute sm:hidden z-30 w-full h-full top-0">
                <div onClick={changeMenuState}
                className="absolute z-30 w-full bg-black/20 h-full top-0"></div> 

                {/* Mobile Navbar Link */}
                <div className="flex flex-col sticky top-0 z-40
                bg-white w-[13rem] h-full space-y-10">
                    <ul className="flex flex-col sticky top-0 pt-[5rem] font-bold text-">
                        <li className="p-2">
                            <Link href={linkDict["Portfolio"]['link']}
                            onClick={changeMenuState}
                            className="flex items-center px-[1.25rem] py-[2rem] w-full 
                            hover:bg-[#d4e4ff] active:bg-[#e6efff] transition 
                            duration-100 rounded-xl" >
                                <PencilSquareIcon className="w-8 h-8 mr-2"/>
                                {linkDict['Portfolio']['text']}
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href={linkDict["About"]['link']} key={get_keys(linkDict)[1]}
                            onClick={changeMenuState}
                            className="flex items-center px-[1.25rem] py-[2rem] w-full 
                            hover:bg-[#d4e4ff] active:bg-[#e6efff] transition 
                            duration-100 rounded-xl" >
                                <UserIcon className="w-8 h-8 mr-2"/>
                                {linkDict['About']['text']}
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href={linkDict["Contact"]['link']} key={get_keys(linkDict)[2]}
                            onClick={changeMenuState}
                            className="flex items-center px-[1.25rem] py-[2rem] w-full 
                            hover:bg-[#d4e4ff] active:bg-[#e6efff] transition 
                            duration-100 rounded-xl" >
                                <PhoneIcon className="w-8 h-8 mr-2"/>
                                {linkDict['Contact']['text']}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            : <></>
        }
        </>
    )
}

export default MobileNavbarLinks;