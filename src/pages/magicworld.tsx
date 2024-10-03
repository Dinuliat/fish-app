import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

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
            <div className="MagicContainer">

                <div className="Search"><input placeholder="поиск" type='text'></input></div>
                <div className="Banner">
                    <p className="Banner_text">Волшебный подводный мир Красного моря</p>
                </div>
                <div className='Section'>
                    <div onClick={onSafeFishes} className='Chapter1 Chapter'>
                        <img src="image/safe-fishes/kabubas/кабубы2.jpg" width="350" height="250" />
                        <p className="Chapter_text">Безопасные рыбы</p>
                    </div>
                    <div onClick={onDangerousFishes} className='Chapter2 Chapter'>
                        <img src="image/dangerous-fishes/tigger-fish/тигровая акула6.jpg" width="350" height="250" />
                        <p className="Chapter_text">Опасные рыбы</p>
                    </div>
                    <div onClick={onNoFishes} className='Chapter3 Chapter'>
                        <img src="image/no-fishes/squids/кальмары6.jpg" width="350" height="250" />
                        <p className="Chapter_text">Не рыбы</p>
                    </div>
                </div>
            </div>
        </div>

    )
}