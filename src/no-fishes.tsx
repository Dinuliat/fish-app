
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
                <div className="NoFishesName">Не рыбы</div>
                <div className='NoFishes-box'>
                    <div className='NoFishes-box1'>
                        <div onClick={onTurtles} className='Turtles'>
                            <p className="Turtles_text">Черепаха</p>
                        </div>
                        <div onClick={onOctopus} className='Octopus'>
                            <p className="Octopus_text">Осьминог</p>
                        </div>
                        <div onClick={onSquids} className='Squids'>
                            <p className="Squids_text">Кальмар</p>
                        </div>
                        <div onClick={onJellyfish} className='Jellyfish'>
                            <p className="Jellyfish_text">Медузы</p>
                        </div>
                    </div>
                    <div className='NoFishes-box2'>
                        <div onClick={onCorals} className='Corals'>
                            <p className="Corals_text">Кораллы</p>
                        </div>
                        <div onClick={onMollusks} className='Mollusks'>
                            <p className="Mollusks_text">Моллюски</p>
                        </div>
                        <div onClick={onStars} className='Stars'>
                            <p className="Stars_text">Звезды</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


