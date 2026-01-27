import Card, { CardProps } from "../card/Card";

const Portfolio = () => {
    const portfolioCards: CardProps[] = [
        {
            img: "/media/sofas/sofa-1.png",
            title: "Digital Marketing",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi a necessitatibus similique. Animi at sequi voluptatum repudiandae, est enim atque! Odit, ipsa ex consequatur beatae eius distinctio earum quia ducimus?",
            alt: "Sofabedstore Marketing Campaign"
        },
        {
            img: "/media/sofas/sofa-2.png",
            title: "Photography",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi a necessitatibus similique. Animi at sequi voluptatum repudiandae, est enim atque! Odit, ipsa ex consequatur beatae eius distinctio earum quia ducimus?",
            alt: "Sofabedstore Marketing Campaign2"
        },
        {
            img: "/media/sofas/sofa-3.png",
            title: "Video Production",
            text: "Lorem ipsum, dolor sit amet consectetur ",
            alt: "Sofabedstore Marketing Campaignf"
        },
        {
            img: "/media/sofas/sofa-4.png",
            title: "Fashion Designs",
            text: "Lorem ipsum, dolor sit amet consectetur ",
            alt: "Sofabedstore Marketing Campaignff"
        }
    ]

    return (
        <section id="portfolio" className="bg-[#d4e4ff] grid grid-rows-auto space-y-10 px-20 py-20">
            <div className="grid space-y-2">
                <h2 className="font-bold text-5xl tracking-wide">
                    My Portfolio
                </h2>
                <div className="bg-[#010550] w-[300px] h-[2px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-0 space-y-5 justify-items-center">
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