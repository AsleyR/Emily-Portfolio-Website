import BubbleButton, { ButtonProps } from "./bubble-btn/BubbleButton";

const ContactMe = () => {
    const contactMeIcons: ButtonProps[] = [
        {
            icon_url: "/media/icons/email.svg",
            link: "mailto:lim.emily567@gmail.com"
        },
        {
            icon_url: "/media/icons/linkedin.svg",
            link: "https://www.linkedin.com/in/emily-y-lim/"
        },
        {
            icon_url: "/media/icons/youtube.svg",
            link: "https://www.youtube.com/@ChicPandaInteriors"
        },
    ]

    return (
        <section id="contact-me" className="bg-[#d4e4ff] px-5 md:px-20 py-20 grid grid-cols-auto 
        transition-all justify-center">
            <div className="justify-center bg-white p-5 md:p-15 space-y-5">
                <div className="flex flex-col space-y-5 col-span-2 place-content-center text-center">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-4xl md:text-5xl tracking-wide">
                            Let's Connect!
                        </h2>
                        <div className="w-full h-auto flex justify-center">
                            <div className="bg-[#010550] w-80 md:w-96.25 h-0.5"></div>
                        </div>
                    </div>
                    <div className="text-lg md:text-xl leading-widest">
                        <p>
                            I'm excited about the prospect of collaborating on innovative projects that marry finance with creativity. Feel free to reach out to discuss potential opportunities or simply to connect!
                        </p>
                    </div>
                </div>
                <div className="flex items-center align-middle justify-center space-x-5">
                {
                    contactMeIcons.map((icon, index) => (
                        <BubbleButton
                        key={"Bubble Icon " + index}
                        icon_url={icon.icon_url}
                        link={icon.link}
                        />
                    ))
                }
            </div>
            </div>
        </section>
    );
}
 
export default ContactMe;