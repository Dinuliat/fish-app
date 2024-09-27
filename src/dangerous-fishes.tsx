import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

export const DangerousFishes = () => {
    const navigation = useNavigate();

    const onArototron = useCallback(() => {
        navigation("/arototron")
    }, [navigation])

    const onBaracuda = useCallback(() => {
        navigation("/baracuda")
    }, [navigation])

    const onCrocodile = useCallback(() => {
        navigation("/crocodile")
    }, [navigation])

    const onHammerfish = useCallback(() => {
        navigation("/hammerfish")
    }, [navigation])

    const onLionfish = useCallback(() => {
        navigation("/lionfish")
    }, [navigation])

    const onLongwingedfish = useCallback(() => {
        navigation("/longwingedfish")
    }, [navigation])

    const onMurena = useCallback(() => {
        navigation("/murena")
    }, [navigation])

    const onSeasnake = useCallback(() => {
        navigation("/seasnake")
    }, [navigation])

    const onSharksblackfeather = useCallback(() => {
        navigation("/sharksblackfeather")
    }, [navigation])

    const onSharkscow = useCallback(() => {
        navigation("sharkscow")
    }, [navigation])

    const onSharksmaco = useCallback(() => {
        navigation("/sharksmaco")
    }, [navigation])

    const onSharksnuss = useCallback(() => {
        navigation("/sharksnuss")
    }, [navigation])

    const onSharkswhite = useCallback(() => {
        navigation("/sharkswhite")
    }, [navigation])

    const onSharkszebra = useCallback(() => {
        navigation("/sharkszebra")
    }, [navigation])

    const onSkat = useCallback(() => {
        navigation("/skat")
    }, [navigation])

    const onSkatorlyak = useCallback(() => {
        navigation("/skatorlyak")
    }, [navigation])

    const onSkatmantu = useCallback(() => {
        navigation("/skatmantu")
    }, [navigation])

    const onSpinorog = useCallback(() => {
        navigation("/spinorog")
    }, [navigation])

    const onStonefish = useCallback(() => {
        navigation("/stonefish")
    }, [navigation])

    const onSurgeon = useCallback(() => {
        navigation("/surgeon")
    }, [navigation])

    const onTiggerfish = useCallback(() => {
        navigation("/tiggerfish")
    }, [navigation])

    const onTulozure = useCallback(() => {
        navigation("/tulozure")
    }, [navigation])

    const onWhalesharks = useCallback(() => {
        navigation("/whalesharks")
    }, [navigation])

    const onBalistod = useCallback(() => {
        navigation("/balistod")
    }, [navigation])

    return (
        <div className="h-100 p-5">
            <div className="MagicContainer h-100 w-100">
                <div className="FishesName">Опасные рыбы Красного моря</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onArototron} className='Arototron Fish'>
                            <p className="Fish_text">Арототрон</p>
                        </div>
                        <div onClick={onBaracuda} className='Baracuda Fish'>
                            <p className="Fish_text">Баракуда</p>
                        </div>
                        <div onClick={onCrocodile} className='Crocodile Fish'>
                            <p className="Fish_text">Рыба-крокодил</p>
                        </div>
                        <div onClick={onHammerfish} className='Hammerfish Fish'>
                            <p className="Fish_text">Рыба-молот</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onLionfish} className='Lionfish Fish'>
                            <p className="Fish_text">Крылатка</p>
                        </div>
                        <div onClick={onLongwingedfish} className='Longwingedfish Fish'>
                            <p className="Fish_text">Длиннокрылая акула</p>
                        </div>
                        <div onClick={onMurena} className='Murena Fish'>
                            <p className="Fish_text">Мурена</p>
                        </div>
                        <div onClick={onSeasnake} className='Seasnake Fish'>
                            <p className="Fish_text">Морская змея</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onSharksblackfeather} className='Sharksblackfeather Fish'>
                            <p className="Fish_text">Рифовая акула</p>
                        </div>
                        <div onClick={onSharkscow} className='Sharkscow Fish'>
                            <p className="Fish_text">Бычья акула</p>
                        </div>
                        <div onClick={onSharksmaco} className='Sharksmaco Fish'>
                            <p className="Fish_text">Акула мако</p>
                        </div>
                        <div onClick={onSharksnuss} className='Sharksnuss Fish'>
                            <p className="Fish_text">Акула-нянька</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onSharkswhite} className='Sharkswhite Fish'>
                            <p className="Fish_text">Белая акула</p>
                        </div>
                        <div onClick={onSharkszebra} className='Sharkszebra Fish'>
                            <p className="Fish_text">Акула-зебра</p>
                        </div>
                        <div onClick={onTiggerfish} className='Tiggerfish Fish'>
                            <p className="Fish_text">Тигровая акула</p>
                        </div>
                        <div onClick={onWhalesharks} className='Whalesharks Fish'>
                            <p className="Fish_text">Китовая акула</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onStonefish} className='Stonefish Fish'>
                            <p className="Fish_text">Рыба-камень</p>
                        </div>
                        <div onClick={onSkat} className='Skat Fish'>
                            <p className="Fish_text">Скат-хвостокол</p>
                        </div>
                        <div onClick={onSkatorlyak} className='Skatorlyak Fish'>
                            <p className="Fish_text">Орляк</p>
                        </div>
                        <div onClick={onSkatmantu} className='Skatmantu Fish'>
                            <p className="Fish_text">Манту</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onTulozure} className='Tulozure Fish'>
                            <p className="Fish_text">Тилозур</p>
                        </div>
                        <div onClick={onSurgeon} className='Surgeon Fish'>
                            <p className="Fish_text">Хирург</p>
                        </div>
                        <div onClick={onBalistod} className='Balistod Fish'>
                            <p className="Fish_text">Балистод</p>
                        </div>
                        <div onClick={onSpinorog} className='Spinorog Fish'>
                            <p className="Fish_text">Спинорог</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

