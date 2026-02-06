import Link from "next/link";
import NavbarLink from "./NavbarLink";

interface ILinkDict {
    [key: string]: {
        link: string;
        subLinks?: {
            link: string;
            title: string;
        }[]
    }
}

const NavbarLinks = () => {
    const linkDict: ILinkDict = {
        "Portfolio": {
            link: "/portfolio",
            subLinks: [
                {
                    link: "/portfolio/digital-marketing",
                    title: "Digital Marketing"
                },
                {
                    link: "/portfolio/blog-writing",
                    title: "Blog Writing"
                },
                {
                    link: "/portfolio/video-production",
                    title: "Video Production"
                },
                {
                    link: "/portfolio/fashion-designs",
                    title: "Fashion Designs"
                },
                {
                    link: "/portfolio/photography",
                    title: "Photography"
                }
            ]
        },
        "About": {
            link: "/#about-me"
        },
        "Contact": {
            link: "/#contact-me"
        }
    }

    return ( 
        <ul className="hidden sm:flex space-x-15 place-content-end 
        align-center text-center items-center transition-all">
            {
                Object.entries(linkDict).map(([key, value]) => (
                    <NavbarLink
                        key={`${key}-${value}`}
                        link={linkDict[key].link}
                        text={key}
                    />
                ))
            }
        </ul>
    );
}
 
export default NavbarLinks;