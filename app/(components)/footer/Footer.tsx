import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center px-mobilex py-5 
        text-sm text-center bg-bggray border-t border-gray-200 shadow-xl">
            <p>This site was hand-crafted, with ❤️.</p>
            <p>Licensed under <Link className="underline hover:text-gray-500" href={'https://github.com/AsleyR/Emily-Portfolio-Website/blob/main/LICENSE.md'} target={'_blank'}>GPL-3.0-or-later</Link>. <Link className="underline hover:text-gray-500" href={'https://asleyrobleto.com'} target={'_blank'}>Asley Robleto</Link>. 2026. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer