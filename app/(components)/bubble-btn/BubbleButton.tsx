import Image from "next/image";
import Link from "next/link";

export interface ButtonProps {
    icon_url: string;
    link: string;
}

const BubbleButton = ({icon_url, link}: ButtonProps) => {
    return (
        <button className="w-11 h-11 overflow-hidden rounded-full 
        border-[#010550] border-3 hover:scale-110 duration-200">
            <Link href={link} className="w-full h-full">
                <Image
                className="w-full h-full object-cover p-2"
                src={icon_url}
                alt=""
                width={100}
                height={100}
                />
            </Link>
        </button>
    );
}
 
export default BubbleButton;