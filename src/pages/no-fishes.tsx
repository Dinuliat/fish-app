
import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"

export const NoFishes = () => {
    const navigation = useNavigate();

    const onCorals = useCallback(() => {
        navigation("/corals")
    }, [navigation])

    const onMollusks = useCallback(() => {
        navigation("/mollusks")
    }, [navigation])

    const onOctopus = useCallback(() => {
        navigation("/octopus")
    }, [navigation])

    const onSquids = useCallback(() => {
        navigation("/squids")
    }, [navigation])

    const onStars = useCallback(() => {
        navigation("/stars")
    }, [navigation])

    const onTurtles = useCallback(() => {
        navigation("/turtles")
    }, [navigation])

    const onJellyfish = useCallback(() => {
        navigation("/jellyfish")
    }, [navigation])

    return (
        <div className="p-5">
            <div className="MagicContainer">
                <div className="FishesName">Не рыбы</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <FishImage
                            src="image/no-fishes/turtles/морская черепаха7.jpg"
                            onClick={onTurtles}
                            text="Черепаха"
                        />
                        <FishImage
                            src="image/no-fishes/octopus/осьминог4.jpg"
                            onClick={onOctopus}
                            text="Осьминог"
                        />
                        <FishImage
                            src="image/no-fishes/squids/кальмары1.jpg"
                            onClick={onSquids}
                            text="Кальмар"
                        />
                        <FishImage
                            src="image/no-fishes/Jellyfish/aureliia-aurita.jpg"
                            onClick={onJellyfish}
                            text="Медузы"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/no-fishes/corals/кораллы4.jpg"
                            onClick={onCorals}
                            text="Кораллы"
                        />
                        <FishImage
                            src="image/no-fishes/mollusks/молюски5.jpg"
                            onClick={onMollusks}
                            text="Моллюски"
                        />
                        <FishImage
                            src="image/no-fishes/stars/звезда3.jpg"
                            onClick={onStars}
                            text="Звезды"
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}


