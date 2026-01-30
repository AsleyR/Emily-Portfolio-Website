import Link from "next/link";

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
        <ul className="hidden sm:flex space-x-18 place-content-end align-center text-center items-center">
            {
                Object.entries(linkDict).map(([key, value]) => (
                    <div  key={key + linkDict[key]} className="relative">
                        <Link href={linkDict[key].link} 
                        className="hover:text-main-2 duration-0 py-2">
                            <li className="tracking-widest">{key}</li>
                        </Link>
                        {/* {
                            value.subLinks ?
                                <div className="absolute flex flex-col
                                gap-5 text-left w-[10rem] h-min bg-white mt-3">
                                    {
                                        value.subLinks.map((subLink) => (
                                            <Link href={subLink.link}
                                            key={subLink.title}
                                            className="w-full h-full p-2 hover:bg-gray-100"
                                            >
                                                {subLink.title}
                                            </Link>
                                        ))
                                    }
                                </ div>
                            : <></>
                        } */}
                    </div>
                ))
            }
        </ul>
    );
}
 
export default NavbarLinks;