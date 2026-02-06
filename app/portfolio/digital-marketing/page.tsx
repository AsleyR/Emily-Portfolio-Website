import Image from "next/image";
import SofaCarousel from "../../(components)/portfolio/digital-marketing/SofaCarousel";
import HeroContainer from "@/app/(components)/hero/HeroContainer";

const PortfolioPage = () => {
    return (
        <section className="flex flex-col
        transition-all">
            <HeroContainer
            className="digital-marketing-bg-pic"
            title="Digital Marketing"
            subTitle="Graphic Design, SEO Research and Implementation."
            />
            <div className="bg-[#d4e4ff] px-5 md:px-20 py-20 space-y-10">
                <div id="" 
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10
                items-center">
                    <div className="space-y-5 py-10">
                        <div className="">
                            <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                            <h3 className="">August 2020 - August 2025</h3>
                        </div>
                        <p className="text-lg">Curated digital images of the company's products which were used in its marketing materials and webstore.</p>
                    </div>
                    <div className="w-full h-60 lg:h-fit row-start-1 lg:col-start-2">
                        <Image 
                        className="w-full h-full object-cover rounded-md"
                        src="/media/sofas/sofa-1.png"
                        alt="Sofa 1"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#14213D] px-5 md:px-20 py-20 space-y-10">
                <div className="text-center grid place-content-center gap-2 text-white">
                    <h1 className="font-bold text-5xl">Interior Design</h1>
                    <div className="bg-white w-[450px] h-[6px]"></div>
                </div>
                <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                 rounded-xl shadow-2xl p-10 border-2 border-gray-100">
                    <div className="text-center lg:text-left space-y-4">
                        <div className="">
                            <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                            <h3>August 2020 - August 2025</h3>
                        </div>
                        <p className="text-lg">
                            Used AI tools and digital art software to create 34+ interior design mockups for marketing materials and the website gallery; collaborated with professional graphic designers on social media posts and seasonal promotions.
                        </p>
                    </div>
                    <div className="overflow-hidden bg-black/70 rounded-2xl w-full border border-gray-500">
                        <SofaCarousel />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-20 px-5 md:px-20 pt-20 pb-40">
                <div className="text-center grid place-content-center gap-2">
                    <h1 className="font-bold text-5xl">SEO Services</h1>
                    <div className="bg-[#010550] w-[360px] h-[6px]"></div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center w-fit lg:w-4xl">    
                        <div className="flex flex-col gap-5 self-center text-xl">
                            <div className="">
                                <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                                <h3>August 2020 - August 2025</h3>
                            </div>
                            <p className="text-lg">
                                Wrote SEO optimized meta descriptions and meta tags based on market research and supported a team of SEO professionals with backlinking.
                            </p>
                        </div>
                        <div className="w-[20rem] h-full justify-self-center lg:justify-self-end ">
                            <Image
                            className="w-full h-full object-cover"
                            src={'/media/digital-marketing/seo-1.svg'}
                            alt="SEO Illustration Web Search"
                            width={500}
                            height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center w-fit lg:w-4xl">    
                        <div className="w-full h-full">
                            <Image
                            className="w-full h-full object-cover border-2 border-gray-300 
                            drop-shadow-md rounded"
                            src={'/media/digital-marketing/ahrefs-1.png'}
                            alt="SEO Illustration Web Search"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="flex flex-col gap-5 self-center text-xl">
                            <div className="">
                                <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                                <h3>August 2020 - August 2025</h3>
                            </div>
                            <p className="text-lg">
                                Managed the company's Ahrefs account and researched, planned, and implemented SEO strategies, including backlinking, keyword targeting, and content optimization, contributing to a 4.4 point increase in Domain Rating from 2.6 to 7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#14213D] w-full h-20"></div>
        </section>
    );
}
 
export default PortfolioPage;