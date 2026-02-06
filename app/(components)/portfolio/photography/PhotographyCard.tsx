import Image from "next/image";

export interface PhotographyCardProps {
    src: string;
    className?: string
}

const PhotographyCard = ({ src, className }: PhotographyCardProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-fit">
                <Image
                className={`${className} w-full h-auto object-cover`}
                src={`${src}`}
                alt={`${src}`}
                width={500}
                height={500}
                />
            </div>
            <div className="">
                <div className="-space-y-2">
                    <h3 className="text-lg font-bold">Title</h3>
                    <span className="font-light text-xs">2026</span>
                </div>
                <p className="text-sm">Lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
        </div>
    );
}
 
export default PhotographyCard;