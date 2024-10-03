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
        <div className="pt-5 px-5">
            <div className="MagicContainer">
                <div className="FishesName">Опасные рыбы Красного моря</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onArototron} className='Arototron Fish'>
                            <img src="image/dangerous-fishes/arototron/аротрон4.jpg" width="350" height="250" />
                            <p className="Fish_text">Арототрон</p>
                        </div>
                        <div onClick={onBaracuda} className='Baracuda Fish'>
                            <img src="image/dangerous-fishes/baracuda/баракуда4.jpg" width="350" height="250" />
                            <p className="Fish_text">Баракуда</p>
                        </div>
                        <div onClick={onCrocodile} className='Crocodile Fish'>
                            <img src="image/dangerous-fishes/crocodile/крокодил2.jpg" width="350" height="250" />
                            <p className="Fish_text">Рыба-крокодил</p>
                        </div>
                        <div onClick={onHammerfish} className='Hammerfish Fish'>
                            <img src="image/dangerous-fishes/hammer-fish/рыба-молот4.jpg" width="350" height="250" />
                            <p className="Fish_text">Рыба-молот</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onLionfish} className='Lionfish Fish'>
                            <img src="image/dangerous-fishes/lionfish/крылатка3.jpg" width="350" height="250" />
                            <p className="Fish_text">Крылатка</p>
                        </div>
                        <div onClick={onLongwingedfish} className='Longwingedfish Fish'>
                            <img src="image/dangerous-fishes/long-winged-fish/длиннокрылая акула1.jpeg" width="350" height="250" />
                            <p className="Fish_text">Длиннокрылая акула</p>
                        </div>
                        <div onClick={onMurena} className='Murena Fish'>
                            <img src="image/dangerous-fishes/murena/мурена5.jpg" width="350" height="250" />
                            <p className="Fish_text">Мурена</p>
                        </div>
                        <div onClick={onSeasnake} className='Seasnake Fish'>
                            <img src="image/dangerous-fishes/sea-snake/морская змея 1.jpg" width="350" height="250" />
                            <p className="Fish_text">Морская змея</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onSharksblackfeather} className='Sharksblackfeather Fish'>
                            <img src="image/dangerous-fishes/sharks-black-feather/Черноперая_рифовая_акула9.jpg" width="350" height="250" />
                            <p className="Fish_text">Рифовая акула</p>
                        </div>
                        <div onClick={onSharkscow} className='Sharkscow Fish'>
                            <img src="image/dangerous-fishes/sharks-cow/бычья акула1.jpg" width="350" height="250" />
                            <p className="Fish_text">Бычья акула</p>
                        </div>
                        <div onClick={onSharksmaco} className='Sharksmaco Fish'>
                            <img src="image/dangerous-fishes/sharks-maco/акула мако 4.jpg" width="350" height="250" />
                            <p className="Fish_text">Акула мако</p>
                        </div>
                        <div onClick={onSharksnuss} className='Sharksnuss Fish'>
                            <img src="image/dangerous-fishes/sharks-nuss/акула нянька.jpg" width="350" height="250" />
                            <p className="Fish_text">Акула-нянька</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onSharkswhite} className='Sharkswhite Fish'>
                            <img src="image/dangerous-fishes/sharks-white/белая акула1.jpg" width="350" height="250" />
                            <p className="Fish_text">Белая акула</p>
                        </div>
                        <div onClick={onSharkszebra} className='Sharkszebra Fish'>
                            <img src="image/dangerous-fishes/sharks-zebra/зебровая акула.jpg" width="350" height="250" />
                            <p className="Fish_text">Акула-зебра</p>
                        </div>
                        <div onClick={onTiggerfish} className='Tiggerfish Fish'>
                            <img src="image/dangerous-fishes/tigger-fish/тигровая акула2.jpg" width="350" height="250" />
                            <p className="Fish_text">Тигровая акула</p>
                        </div>
                        <div onClick={onWhalesharks} className='Whalesharks Fish'>
                            <img src="image/dangerous-fishes/whale-sharks/китовая акула6.jpg" width="350" height="250" />
                            <p className="Fish_text">Китовая акула</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onStonefish} className='Stonefish Fish'>
                            <img src="image/dangerous-fishes/stone-fish/рыба-камень 4.jpg" width="350" height="250" />
                            <p className="Fish_text">Рыба-камень</p>
                        </div>
                        <div onClick={onSkat} className='Skat Fish'>
                            <img src="image/dangerous-fishes/skat/скат7.jpg" width="350" height="250" />
                            <p className="Fish_text">Скат-хвостокол</p>
                        </div>
                        <div onClick={onSkatorlyak} className='Skatorlyak Fish'>
                            <img src="image/dangerous-fishes/skat/скат 12.jpg" width="350" height="250" />
                            <p className="Fish_text">Орляк</p>
                        </div>
                        <div onClick={onSkatmantu} className='Skatmantu Fish'>
                            <img src="image/dangerous-fishes/skat/скат9.jpg" width="350" height="250" />
                            <p className="Fish_text">Манту</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onTulozure} className='Tulozure Fish'>
                            <img src="image/dangerous-fishes/tulozure/тилозур6.jpg" width="350" height="250" />
                            <p className="Fish_text">Тилозур</p>
                        </div>
                        <div onClick={onSurgeon} className='Surgeon Fish'>
                            <img src="image/dangerous-fishes/surgeon/хирург7.jpg" width="350" height="250" />
                            <p className="Fish_text">Хирург</p>
                        </div>
                        <div onClick={onBalistod} className='Balistod Fish'>
                            <img src="image/dangerous-fishes/spinorog/спинорог9.jpg" width="350" height="250" />
                            <p className="Fish_text">Балистод</p>
                        </div>
                        <div onClick={onSpinorog} className='Spinorog Fish'>
                            <img src="image/dangerous-fishes/spinorog/спинорог17.jpg" width="350" height="250" />
                            <p className="Fish_text">Спинорог</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

