import Image from "next/image";
import ButtonLink from "../BtnLink";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 space-x-0 hero_bg relative">
            <div className="text-lg md:text-2xl text-white flex-col px-5 md:px-20 py-20 space-y-8 font-medium z-20 absolute">
                <h1 className="font-bold text-4xl md:text-6xl">
                    Nice to meet you!
                </h1>
                <div className="space-y-4">
                    <p className="text-2xl md:text-4xl">
                    I'm Emily
                </p>
                <p className="">
                    BCom Student at McGill University
                </p>
                </div>
                <ButtonLink button={{
                    "link": "/#portfolio",
                    "text": "See my Projects"
                    }}/>
            </div>
            <div className="w-full h-140 overflow-hidden">
                <Image
                className="w-full h-full object-cover"
                // src={"/media/hero/person-placeholder.jpg"}
                src={"/media/hero/emily-1.png"}
                height={500}
                width={500}
                alt="Emily Lim Picture"
                />
            </div>
            <div className="absolute bg-black/40 h-full w-full z-10"></div>
        </div>
    );
}
 
export default Hero;