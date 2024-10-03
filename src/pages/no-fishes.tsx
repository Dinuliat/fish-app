
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
        <div className="p-5">
            <div className="MagicContainer">
                <div className="FishesName">Не рыбы</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onTurtles} className='Turtles Fish'>
                            <img src="image/no-fishes/turtles/морская черепаха7.jpg" width="350" height="250" />
                            <p className="Fish_text">Черепаха</p>
                        </div>
                        <div onClick={onOctopus} className='Octopus Fish'>
                            <img src="image/no-fishes/octopus/осьминог4.jpg" width="350" height="250" />
                            <p className="Fish_text">Осьминог</p>
                        </div>
                        <div onClick={onSquids} className='Squids Fish'>
                            <img src="image/no-fishes/squids/кальмары1.jpg" width="350" height="250" />
                            <p className="Fish_text">Кальмар</p>
                        </div>
                        <div onClick={onJellyfish} className='Jellyfish Fish'>
                            <img src="image/no-fishes/Jellyfish/aureliia-aurita.jpg" width="350" height="250" />
                            <p className="Fish_text">Медузы</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onCorals} className='Corals Fish'>
                            <img src="image/no-fishes/corals/кораллы4.jpg" width="350" height="250" />
                            <p className="Fish_text">Кораллы</p>
                        </div>
                        <div onClick={onMollusks} className='Mollusks Fish'>
                            <img src="image/no-fishes/mollusks/молюски5.jpg" width="350" height="250" />
                            <p className="Fish_text">Моллюски</p>
                        </div>
                        <div onClick={onStars} className='Stars Fish'>
                            <img src="image/no-fishes/stars/звезда3.jpg" width="350" height="250" />
                            <p className="Fish_text">Звезды</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


