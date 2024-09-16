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
        <div className="h-100 p-5">
            <div className="MagicContainer h-100 w-100">

                <div className="Search"><input placeholder="поиск" type='text'></input></div>
                <div className="Banner">
                    <p className="Banner_text">Волшебный подводный мир Красного моря</p>
                </div>
                <div className='Section'>
                    <div onClick={onSafeFishes} className='Chapter1'>
                        <p className="Chapter1_text">Безопасные рыбы</p>
                    </div>
                    <div onClick={onDangerousFishes} className='Chapter2'>
                        <p className="Chapter2_text">Опасные рыбы</p>
                    </div>
                    <div onClick={onNoFishes} className='Chapter3'>
                        <p className="Chapter3_text">Не рыбы</p>
                    </div>
                </div>
            </div>
        </div>

    )
}