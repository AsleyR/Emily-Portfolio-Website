import Link from "next/link";

// const smoothScroll = (target: string) => {
//     const element = document.querySelector(target);
//     if (element) {
//         element.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//             inline: 'nearest',
//         });
//     }
// };

const NavbarLink = ({ link, text }: { link: string, text: string }) => {

    return (
        <div className="relative">
            <Link href={link}
            className="">
                <li className="tracking-widest p-2 hover:bg-gray-200 duration-100
                    rounded-full">{text}</li>
            </Link>
        </div>
    );
}
 
export default NavbarLink;