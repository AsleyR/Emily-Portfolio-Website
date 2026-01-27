import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex">
            <Link href={'/'} className="">
                <h1 className="font-black text-3xl hover:underline underline-offset-2">Emily Lim</h1>
            </Link>
        </div>
    );
}
 
export default Logo;