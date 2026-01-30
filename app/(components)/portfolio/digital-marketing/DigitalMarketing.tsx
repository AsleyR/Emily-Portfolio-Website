import Image from "next/image";
import SofaCarousel from "./SofaCarousel";

const DigitalMarketing = () => {
    return (
        <section className="grid grid-cols-auto space-y-10">
            <div id="sofa-bed-store" 
            className="grid grid-cols-2 gap-5 items-center">
                <div className="space-y-5">
                    <h2 className="font-bold text-4xl">SofaBedStore.com</h2>
                    <p className="text-2xl font-medium">Curated digital images of the company's products which were used in its marketing materials and webstore.</p>
                </div>
                <div className="">
                    <Image 
                    src="/media/sofas/sofa-1.png"
                    alt="Sofa 1"
                    width={500}
                    height={500}
                    />
                </div>
            </div>
            <div className="">
                <p className="text-xl text-center">
                    Used AI tools and digital art software to create 34+ interior design mockups for marketing materials and the website gallery; collaborated with professional graphic designers on social media posts and seasonal promotions.
                </p>
                <div className="grid">
                    <SofaCarousel />
                </div>
                {/* <div className="grid grid-cols-3 space-x-[100px]">
                    <div className="w-full h-auto overflow-hidden">
                        <Image 
                        className="object-cover w-full h-full"
                        src="/media/sofas/sofa-2.png"
                        alt="Sofa 1"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-full h-auto overflow-hidden">
                        <Image 
                        className="object-cover w-full h-full"
                        src="/media/sofas/sofa-3.png"
                        alt="Sofa 1"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-full h-auto overflow-hidden">
                        <Image 
                        className="object-cover w-full h-full"
                        src="/media/sofas/sofa-4.png"
                        alt="Sofa 1"
                        width={500}
                        height={500}
                        />
                    </div>
                </div> */}
            </div>
        </section>
    );
}
 
export default DigitalMarketing;