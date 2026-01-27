import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about-me" className="grid grid-cols-5 text-[#010550] px-20 pt-32">
            <div className="col-span-3">
                <Image
                className="w-full h-auto object-cover"
                src={'/media/about-me/placeholder-no-bg.png'}
                alt="Emily Picture No Background"
                width={500}
                height={500}
                />
            </div>
            <div className="flex flex-col space-y-5 col-span-2">
                <div className="">
                    <h2 className="font-bold text-5xl tracking-wide">
                        About Me
                    </h2>
                    <div className="bg-[#010550] w-[300px] h-[2px]"></div>
                </div>
                <div className="text-xl leading-widest">
                    <p>
                        I'm Emily, a dedicated and results-driven BCom student at McGill University, specializing in Finance. With a diverse background in SEO marketing, digital marketing, blog writing, photography, and fashion design.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default AboutMe;