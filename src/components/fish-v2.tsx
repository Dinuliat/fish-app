import { useParams } from "react-router-dom";
import { FishImage } from "./fish-image";
import { allFishes } from "../data/fishes";

export const FishV2 = () => {
    const { fishName } = useParams();

    // Находим рыбу в базе данных по id
    const fishData = allFishes.find(fish => fish.id === fishName);

    if (!fishData) {
        return (
            <div className="MagicContainer">
                <div className="Text-description">
                    Информация о рыбе не найдена
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='Box'>
                {fishData.images.map((image, index) => (
                    <FishImage
                        key={index}
                        src={image}
                    />
                ))}
            </div>
            <div className="Text-description">
                {fishData.description}
            </div>
        </>
    );
};