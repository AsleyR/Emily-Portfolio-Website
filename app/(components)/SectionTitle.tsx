const SectionTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h1 className={`${className} font-bold text-3xl lg:text-5xl typewriter h-13`}>
            {title}
        </h1>
    );
}
 
export default SectionTitle;