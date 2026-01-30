import Image from "next/image";
import SofaCarousel from "../../(components)/portfolio/digital-marketing/SofaCarousel";
import ContactMe from "@/app/(components)/ContactMe";
import SectionTitle from "@/app/(components)/SectionTitle";

const PortfolioPage = () => {
    return (
        <section className="grid grid-cols-auto
        transition-all">
            <div className="bg-[#d4e4ff] px-5 md:px-20 pt-10 pb-50 space-y-10">
                <SectionTitle title="Digital Marketing"/>
                <div id="" 
                className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-white rounded-xl">
                    <div className="space-y-5 p-10">
                        <div className="">
                            <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                            <h3 className="">August 2020 - August 2025</h3>
                        </div>
                        <p className="text-2xl font-medium">Curated digital images of the company's products which were used in its marketing materials and webstore.</p>
                    </div>
                    <div className="w-full h-full">
                        <Image 
                        className="w-full h-full object-cover rounded-r-xl"
                        src="/media/sofas/sofa-1.png"
                        alt="Sofa 1"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="-mt-40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCA311" fillOpacity="1" d="M0,128L120,133.3C240,139,480,149,720,133.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="-mt-75 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007ea7" fillOpacity="1" d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="-m-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007ea7" fillOpacity="1" d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="bg-[#007ea7] px-5 md:px-20 pb-40 space-y-10">
                <div className="text-center grid place-content-center gap-2 text-white">
                    <h1 className="font-bold text-5xl">Interior Design</h1>
                    <div className="bg-white w-[450px] h-[6px]"></div>
                </div>
                <div className="bg-gray-100 grid gap-5 rounded-2xl shadow-2xl p-10">
                    <div className="text-center">
                        <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                        <h3>August 2020 - August 2025</h3>
                    </div>
                    <p className="text-xl text-center">
                        Used AI tools and digital art software to create 34+ interior design mockups for marketing materials and the website gallery; collaborated with professional graphic designers on social media posts and seasonal promotions.
                    </p>
                    {/* MUST FIX THE DAMN CAROUSEL */}
                    <div className="overflow-hidden bg-black/70 rounded-2xl w-[60rem]">
                        <SofaCarousel />
                    </div>
                </div>
            </div>
            <div className="-mt-37">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#14213D" fillOpacity="1" d="M0,64L120,90.7C240,117,480,171,720,165.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="-mt-55">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L120,106.7C240,117,480,139,720,144C960,149,1200,139,1320,133.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="flex flex-col gap-20 px-5 md:px-20 pt-0 pb-40">
                <h1 className="font-bold text-5xl text-center">SEO Research and Implementation</h1>
                <div className="grid grid-cols-2 gap-1">    
                    <div className="flex flex-col gap-5 self-center text-xl">
                        <div className="">
                            <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                            <h3>August 2020 - August 2025</h3>
                        </div>
                        <p className="">
                            Wrote SEO optimized meta descriptions and meta tags based on market research and supported a team of SEO professionals with backlinking.
                        </p>
                    </div>
                    <div className="w-md h-full justify-self-end">
                        <Image
                        className="w-full h-full object-cover"
                        src={'/media/digital-marketing/seo-1.svg'}
                        alt="SEO Illustration Web Search"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
                <div className="w-full h-[4px] bg-gray-400 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-5">    
                    <div className="w-lg h-full">
                        <Image
                        className="w-full h-full object-cover border-3 
                        border-black rounded-md drop-shadow-lg"
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
                        <p>
                            Managed the company's Ahrefs account and researched, planned, and implemented SEO strategies, including backlinking, keyword targeting, and content optimization, contributing to a 4.4 point increase in Domain Rating from 2.6 to 7.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#14213D] w-full h-20"></div>
        </section>
    );
}
 
export default PortfolioPage;