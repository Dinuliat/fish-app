
import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

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
        <div className="h-100 p-5">
            <div className="MagicContainer h-100 w-100">
                <div className="FishesName">Не рыбы</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onTurtles} className='Turtles Fish'>
                            <p className="Fish_text">Черепаха</p>
                        </div>
                        <div onClick={onOctopus} className='Octopus Fish'>
                            <p className="Fish_text">Осьминог</p>
                        </div>
                        <div onClick={onSquids} className='Squids Fish'>
                            <p className="Fish_text">Кальмар</p>
                        </div>
                        <div onClick={onJellyfish} className='Jellyfish Fish'>
                            <p className="Fish_text">Медузы</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onCorals} className='Corals Fish'>
                            <p className="Fish_text">Кораллы</p>
                        </div>
                        <div onClick={onMollusks} className='Mollusks Fish'>
                            <p className="Fish_text">Моллюски</p>
                        </div>
                        <div onClick={onStars} className='Stars Fish'>
                            <p className="Fish_text">Звезды</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


