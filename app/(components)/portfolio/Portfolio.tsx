import Card, { CardProps } from "../card/Card";

const Portfolio = () => {
    const portfolioCards: CardProps[] = [
        {
            img: "/media/sofas/sofa-1.png",
            title: "Digital Marketing",
            text: "Graphic Design, SEO Research and Implementation",
            alt: "Digital Marketing"
        },
        {
            img: "/media/blog-writing/blog-writing-thumbnail.png",
            title: "Blog Writing",
            text: "How to Guides, Interior Concept Ideas and Copywriting",
            alt: "Blog Writing"
        },
        {
            img: "/media/video-production/video-production-thumbnail.png",
            title: "Video Production",
            text: "Filmmaking, Video Editing, and Promotion",
            alt: "Video Production"
        },
        {
            img: "/media/fashion-design/fashion-thumbnail.png",
            title: "Fashion Designs",
            text: "Concept Ideas, Pattern Making, and Garment Construction",
            alt: "Fashion Design"
        },
        {
            img: "/media/photography/photography-thumbnail.jpg",
            title: "Photography",
            text: "Color Grading and Amateur Photography",
            alt: "Photography"
        },
    ]

    return (
        <section id="portfolio" className="bg-[#d4e4ff] grid grid-rows-auto 
        space-y-10 px-5 md:px-20 py-20">
            <div className="grid space-y-2 place-content-center md:place-content-start
            transition-all duration-25">
                <h2 className="font-bold text-center md:text-left text-5xl tracking-wide">
                    My Portfolio
                </h2>
                <div className="bg-[#010550] w-75 h-0.5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 
            justify-items-center gap-4">
                {
                    portfolioCards.map((card) => (
                        <Card
                        key={card.alt}
                        img={card.img}
                        title={card.title}
                        text={card.text}
                        alt={card.alt}
                        />
                    ))
                }
            </div>
        </section>
    );
}
 
export default Portfolio;