import Image from "next/image";

export interface CardProps {
    img: string;
    title: string;
    text: string;
    alt: string;
}

const Card = ({ img, title, text, alt }: CardProps) => {
    return (
        <div className="grid grid-rows-auto bg-gray-100 rounded-3xl
        drop-shadow-2xl hover:scale-102 duration-250 cursor-pointer w-[20rem] h-[22rem] justify-center-safe">
            <div className="relative overflow-hidden">
                <div className="absolute bg-black/20 h-full w-full z-0 rounded-t-xl"></div>
                <Image
                className="w-full h-40 object-cover rounded-t-xl z-0"
                src={img}
                alt={alt}
                width={300}
                height={300}
                />
            </div>
            <div className="row-span-1 flex flex-col space-y-2 p-5 h-50 overflow-hidden">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-lg truncate h-full">{text}</p>
            </div>
        </div>
    );
}
 
export default Card;