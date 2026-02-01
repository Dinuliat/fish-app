
import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"

export const NoFishes = () => {
    const navigation = useNavigate();

    const onCorals = useCallback(() => {
        navigation("/fish/corals")
    }, [navigation])

    const onMollusks = useCallback(() => {
        navigation("/fish/mollusks")
    }, [navigation])

    const onOctopus = useCallback(() => {
        navigation("/fish/octopus")
    }, [navigation])

    const onSquids = useCallback(() => {
        navigation("/fish/squids")
    }, [navigation])

    const onStars = useCallback(() => {
        navigation("/fish/stars")
    }, [navigation])

    const onTurtles = useCallback(() => {
        navigation("/fish/turtles")
    }, [navigation])

    const onJellyfish = useCallback(() => {
        navigation("/fish/jellyfish")
    }, [navigation])

    const onHedgehog = useCallback(() => {
        navigation("/fish/hedgehog")
    }, [navigation])

    return (
        <div className="p-0">
            <div className="MagicContainer" style={{ minHeight: "100vh" }}>
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
                    <div className='Box pb-5'>
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
                            src="image/no-fishes/stars/еж3.jpg"
                            onClick={onHedgehog}
                            text="Морские ежи"
                        />
                        <FishImage
                            src="image/no-fishes/stars/морская звезда.jpg"
                            onClick={onStars}
                            text="Морская звезда"
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}


