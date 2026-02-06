import PhotographyCard, { PhotographyCardProps } from "./PhotographyCard";

const PhotographyCards = () => {
    function generateCardComponents(source: string, number: number) {
        let imageComponents: any[] = []

        for (let i = 1; i <= number; i++) {
            imageComponents.push(
            <PhotographyCard
            key={`${source}-${i}`}
            src={`/media/photography/${source}${i}.jpg`}
            />
        )
        }

        return imageComponents
    }

    return (
        <div className="space-y-10">
            <div className="flex justify-center px-5 lg:px-20">
                <div className="">
                    <h2 className="text-4xl font-bold">Nature Pictures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
                        {
                            generateCardComponents('nature-', 56).map((image) => image)
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-5 lg:px-20">
                <div className="">
                    <h2 className="text-4xl font-bold">Urban Pictures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
                        {
                            generateCardComponents('urban-', 13).map((image) => image)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PhotographyCards;