import SectionTitle from "../SectionTitle";

interface HeroContainerProps {
    title: string;
    subTitle: string;
    className?: string;
}

const HeroContainer = (props: HeroContainerProps) => {
    return (
        <div className={`${props.className} w-full h-full z-0 text-white relative grid 
            grid-cols-1 px-5 lg:px-20 py-55`}>
            <div className="space-y-1">
                <SectionTitle title={props.title} className="h-13"/>
                <p className="">{props.subTitle}</p>
            </div>
            <div className="w-full h-full absolute bg-black/40 -z-10"></div>
        </div>
    );
}
 
export default HeroContainer;