import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about-me" className="grid grid-rows-[min, auto] lg:grid-rows-1 grid-cols-0
        lg:grid-cols-5 text-[#010550] px-5 md:px-20 pt-32">
            <div className="row-start-2 lg:row-start-1  lg:col-span-3 h-full w-full">
                <Image
                className="w-full h-auto object-cover"
                src={'/media/about-me/emily-2.png'}
                alt="Emily Picture No Background"
                width={500}
                height={500}
                />
            </div>
            <div className="flex flex-col space-y-5 col-span-1 lg:col-span-2">
                <div className="">
                    <h2 className="font-bold text-4xl md:text-5xl tracking-wide">
                        About Me
                    </h2>
                    <div className="bg-[#010550] w-55 md:w-75 h-0.5"></div>
                </div>
                <div className="text-lg md:text-xl leading-widest">
                    <p>
                        I'm Emily, a dedicated and results-driven BCom student at McGill University, specializing in Finance. With a diverse background in SEO marketing, digital marketing, blog writing, photography, and fashion design.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default AboutMe;