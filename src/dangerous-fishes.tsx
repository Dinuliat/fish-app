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
                <div className="DangerousFishesName">Опасные рыбы Красного моря</div>
                <div className='DangerousFishes-box'>
                    <div className='DangerousFishes-box1'>
                        <div onClick={onArototron} className='Arototron'>
                            <p className="Arototron_text">Арототрон</p>
                        </div>
                        <div onClick={onBaracuda} className='Baracuda'>
                            <p className="Baracuda_text">Баракуда</p>
                        </div>
                        <div onClick={onCrocodile} className='Crocodile'>
                            <p className="Crocodile_text">Рыба-крокодил</p>
                        </div>
                        <div onClick={onHammerfish} className='Hammerfish'>
                            <p className="Hammerfish_text">Рыба-молот</p>
                        </div>
                    </div>
                    <div className='DangerousFishes-box2'>
                        <div onClick={onLionfish} className='Lionfish'>
                            <p className="Lionfish_text">Крылатка</p>
                        </div>
                        <div onClick={onLongwingedfish} className='Longwingedfish'>
                            <p className="Longwingedfish_text">Длиннокрылая акула</p>
                        </div>
                        <div onClick={onMurena} className='Murena'>
                            <p className="Murena_text">Мурена</p>
                        </div>
                        <div onClick={onSeasnake} className='Seasnake'>
                            <p className="Seasnake_text">Морская змея</p>
                        </div>
                    </div>
                    <div className='DangerousFishes-box3'>
                        <div onClick={onSharksblackfeather} className='Sharksblackfeather'>
                            <p className="Sharksblackfeather_text">Рифовая акула</p>
                        </div>
                        <div onClick={onSharkscow} className='Sharkscow'>
                            <p className="Sharkscow_text">Бычь акула</p>
                        </div>
                        <div onClick={onSharksmaco} className='Sharksmaco'>
                            <p className="Sharksmaco_text">Акула мако</p>
                        </div>
                        <div onClick={onSharksnuss} className='Sharksnuss'>
                            <p className="Sharksnuss_text">Акула-нянька</p>
                        </div>
                    </div>
                    <div className='DangerousFishes-box4'>
                        <div onClick={onSharkswhite} className='Sharkswhite'>
                            <p className="Sharkswhite_text">Белая акула</p>
                        </div>
                        <div onClick={onSharkszebra} className='Sharkszebra'>
                            <p className="Sharkszebra_text">Акула-зебра</p>
                        </div>
                        <div onClick={onTiggerfish} className='Tiggerfish'>
                            <p className="Tiggerfish_text">Тигровая акула</p>
                        </div>
                        <div onClick={onWhalesharks} className='Whalesharks'>
                            <p className="Whalesharks_text">Китовая акула</p>
                        </div>
                    </div>
                    <div className='DangerousFishes-box5'>
                        <div onClick={onStonefish} className='Stonefish'>
                            <p className="Stonefish_text">Рыба-камень</p>
                        </div>
                        <div onClick={onSkat} className='Skat'>
                            <p className="Skat_text">Скат-хвостокол</p>
                        </div>
                        <div onClick={onSkatorlyak} className='Skatorlyak'>
                            <p className="Skatorlyak_text">Орляк</p>
                        </div>
                        <div onClick={onSkatmantu} className='Skatmantu'>
                            <p className="Skatmantu_text">Манту</p>
                        </div>
                    </div>
                    <div className='DangerousFishes-box6'>
                        <div onClick={onTulozure} className='Tulozure'>
                            <p className="Tulozure_text">Тилозур</p>
                        </div>
                        <div onClick={onSurgeon} className='Surgeon'>
                            <p className="Surgeon_text">Хирург</p>
                        </div>
                        <div onClick={onBalistod} className='Balistod'>
                            <p className="Balistod_text">Балистод</p>
                        </div>
                        <div onClick={onSpinorog} className='Spinorog'>
                            <p className="Spinorog_text">Спинорог</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

