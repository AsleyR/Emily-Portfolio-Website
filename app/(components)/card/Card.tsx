import Image from "next/image";
import Link from "next/link";

export interface CardProps {
    img: string;
    title: string;
    text: string;
    alt: string;
    link: string;
    className?: string;
    imgClassName?: string;
    textClassName?: string;
}

const Card = ({ img, title, text, alt, link, 
    className, imgClassName, textClassName }: CardProps) => {
    return (
        <Link href={link}
        className={`${className ? className : ""} 
        grid grid-rows-auto bg-gray-100 rounded-3xl
        drop-shadow-2xl hover:scale-102 duration-250 cursor-pointer 
        w-full max-w-120 h-fit justify-center-safe 
        outline outline-transparent hover:outline-black`}>
            <div className="relative overflow-hidden w-full h-full">
                <div className="absolute bg-black/20 h-full w-full z-0 rounded-t-3xl"></div>
                <Image
                className={`${imgClassName ? imgClassName : ""}
                    w-120 h-80 object-cover rounded-t-3xl -z-10`}
                src={img}
                alt={alt}
                width={300}
                height={300}
                />
            </div>
            <div className={`text-lg ${textClassName ? imgClassName : ""}
                flex flex-col space-y-2 p-5 h-40 overflow-hidden`}>
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="h-full">{text}</p>
            </div>
        </Link>
    );
}
 
export default Card;