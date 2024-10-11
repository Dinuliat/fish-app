import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"

export const Magicworld = () => {
    const navigation = useNavigate();

    const onSafeFishes = useCallback(() => {
        navigation("/safe-fishes")
    }, [navigation])

    const onDangerousFishes = useCallback(() => {
        navigation("/dangerous-fishes")
    }, [navigation])

    const onNoFishes = useCallback(() => {
        navigation("/no-fishes")
    }, [navigation])

    return (
        <div className="p-5">
            <div className="MagicContainer" style={{ minHeight: "90vh" }}>
                <div className="Search"><input placeholder="поиск" type='text'></input></div>
                <div className="Banner">
                    <p className="Banner_text">Волшебный подводный мир Красного моря</p>
                </div>
                <div className='Box'>
                    <FishImage
                        src="image/safe-fishes/kabubas/кабубы2.jpg"
                        onClick={onSafeFishes}
                        text="Безопасные рыбы"
                    />
                    <FishImage
                        src="image/dangerous-fishes/tigger-fish/тигровая акула6.jpg"
                        onClick={onDangerousFishes}
                        text="Безопасные рыбы"
                    />
                    <FishImage
                        src="image/no-fishes/squids/кальмары6.jpg"
                        onClick={onNoFishes}
                        text="Не рыбы"
                    />
                </div>
            </div>
        </div>
    )
}