import Link from "next/link";

interface ILinkDict {
    [key: string]: string
}

const NavbarLinks = () => {
    const linkDict: ILinkDict = {
        "Portfolio": "#portfolio",
        "About": "#about-me",
        "Contact": "#contact-me"
    }

    return ( 
        <ul className="flex space-x-18 place-content-end align-center text-center items-center">
            {
                Object.entries(linkDict).map(([key, value]) => (
                    <Link key={key + linkDict[key]} href={linkDict[key]} className="hover:text-[#545454] duration-100">
                        <li className="tracking-widest">{key}</li>
                    </Link>
                ))
            }
        </ul>
    );
}
 
export default NavbarLinks;