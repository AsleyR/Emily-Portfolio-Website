import HeroContainer from "@/app/(components)/hero/HeroContainer";
import PhotographyCards from "@/app/(components)/portfolio/photography/PhotographyCards";

const PhotographyPage = () => {

    return (
        <section id="#" className="transition-all w-full h-full">
            <HeroContainer
            className="photography-bg-pic"
            title="Photography"
            subTitle="Color Grading and Amateur Photography."
            />
            <div className="py-10 px-5 lg:px-20">
                <div className="text-center grid place-content-center gap-2 px-5 lg:px-20">
                    <h1 className="font-bold text-5xl">Photography</h1>
                    {/* <p>{`Wrote 8 interior design blogs for sofabedstore.com and filmed, produced, and edited 8+ 
                    interior design videos (with up to 400+ views) under the name Chic Panda Interiors to promote 
                    products and drive customer engagement, developing content marketing skills`}</p> */}
                    {/* <div className="bg-[#010550] w-[360px] h-[6px]"></div> */}
                </div>
            </div>
            <PhotographyCards />
        </section>
    );
}
 
export default PhotographyPage;