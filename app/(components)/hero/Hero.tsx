import Image from "next/image";
import ButtonLink from "../BtnLink";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 space-x-0 hero-bg-pic relative">
            <div className="text-lg md:text-2xl text-white flex-col px-5 md:px-20 pt-40 
            pb-20 space-y-8 font-medium z-20 absolute">
                <h1 className="font-bold text-4xl md:text-7xl">
                    Hi, I'm Emily.
                </h1>
                <div className="space-y-4">
                    {/* <p className="text-2xl md:text-4xl">
                        I'm Emily
                    </p> */}
                    <p className="">
                        BCom Student at McGill University.
                    </p>
                </div>
                <ButtonLink button={{
                    "link": "/#portfolio",
                    "text": "See my Projects"
                    }}/>
            </div>
            <div className="w-full h-150 overflow-hidden"></div>
            <div className="absolute bg-black/40 h-full w-full z-10"></div>
        </div>
    );
}
 
export default Hero;