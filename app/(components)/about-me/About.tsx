import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about-me" className="grid grid-rows-[min, auto] lg:grid-rows-1 grid-cols-0
        lg:grid-cols-2 text-white px-0 lg:px-20 pt-20 lg:pt-30
        items-center relative about-gradientg bg-[#14213D]">
            <div className="row-start-2 lg:row-start-1  lg:col-span-1 
            h-full w-[20rem] lg:w-[26rem] justify-self-center">
                <Image
                className="w-full h-auto object-cover"
                src={'/media/about-me/emily-5.png'}
                alt="Emily Picture No Background"
                width={500}
                height={500}
                />
            </div>
            <div className="flex flex-col space-y-5 px-5 md:px-20 lg:px-0
             col-span-1 lg:col-span-auto">
                <div className="">
                    <h2 className="font-bold text-4xl md:text-6xl tracking-wide">
                        About Me
                    </h2>
                    <div className="bg-white w-55 md:w-85 h-0.5"></div>
                </div>
                <div className="text-lg md:text-xl leading-9">
                    <p>
                        I'm Emily, a dedicated and results-driven BCom student at McGill University, specializing in Finance. With a diverse background in SEO marketing, digital marketing, blog writing, photography, and fashion design.
                    </p>
                </div>
            </div>
            {/* <div className="bg-[url(/)] absolute w-full h-full"></div> */}
        </section>
    );
}
 
export default AboutMe;