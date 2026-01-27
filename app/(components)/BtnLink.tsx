import Link from "next/link";
import { ButtonLinkType } from "@/app/(types)/index.types"

const ButtonLink = ({ button }: { button: ButtonLinkType }) => {
    return (
        <button className="bg-[#FCA311] hover:scale-105 
        duration-300 rounded-lg">
            <Link href={button.link} className="flex px-8 py-3 font-bold">
                {button.text}
            </Link>
        </button>
    );
}
 
export default ButtonLink;