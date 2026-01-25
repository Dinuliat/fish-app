import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"

export const DangerousFishes = () => {
    const navigation = useNavigate();

    const onArotron = useCallback(() => {
        navigation("/fish/arototron")
    }, [navigation])

    const onBaracuda = useCallback(() => {
        navigation("/fish/baracuda")
    }, [navigation])

    const onCrocodile = useCallback(() => {
        navigation("/fish/crocodile")
    }, [navigation])

    const onHammerfish = useCallback(() => {
        navigation("/fish/hammerfish")
    }, [navigation])

    const onLionfish = useCallback(() => {
        navigation("/fish/lionfish")
    }, [navigation])

    const onLongwingedfish = useCallback(() => {
        navigation("/fish/longwingedfish")
    }, [navigation])

    const onMurena = useCallback(() => {
        navigation("/fish/murena")
    }, [navigation])

    const onSeasnake = useCallback(() => {
        navigation("/fish/seasnake")
    }, [navigation])

    const onSharksblackfeather = useCallback(() => {
        navigation("/fish/sharksblackfeather")
    }, [navigation])

    const onSharkscow = useCallback(() => {
        navigation("/fish/sharkscow")
    }, [navigation])

    const onSharksmaco = useCallback(() => {
        navigation("/fish/sharksmaco")
    }, [navigation])

    const onSharksnuss = useCallback(() => {
        navigation("/fish/sharksnuss")
    }, [navigation])

    const onSharkswhite = useCallback(() => {
        navigation("/fish/sharkswhite")
    }, [navigation])

    const onSharkszebra = useCallback(() => {
        navigation("/fish/sharkszebra")
    }, [navigation])

    const onSkat = useCallback(() => {
        navigation("/fish/skat")
    }, [navigation])

    const onSkatorlyak = useCallback(() => {
        navigation("/fish/skatorlyak")
    }, [navigation])

    const onSkatmantu = useCallback(() => {
        navigation("/fish/skatmantu")
    }, [navigation])

    const onSpinorog = useCallback(() => {
        navigation("/fish/spinorog")
    }, [navigation])

    const onStonefish = useCallback(() => {
        navigation("/fish/stonefish")
    }, [navigation])

    const onSurgeon = useCallback(() => {
        navigation("/fish/surgeon")
    }, [navigation])

    const onTiggerfish = useCallback(() => {
        navigation("/fish/tiggerfish")
    }, [navigation])

    const onTulozure = useCallback(() => {
        navigation("/fish/tulozure")
    }, [navigation])

    const onWhalesharks = useCallback(() => {
        navigation("/fish/whalesharks")
    }, [navigation])

    const onBalistod = useCallback(() => {
        navigation("/fish/balistod")
    }, [navigation])

    return (
        <div className="p-0">
            <div className="MagicContainer">
                <div className="FishesName">Опасные рыбы Красного моря</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/arotron/аротрон4.jpg"
                            onClick={onArotron}
                            text="Аротрон"
                        />
                        <FishImage
                            src="image/dangerous-fishes/baracuda/баракуда4.jpg"
                            onClick={onBaracuda}
                            text="Барракуда"
                        />
                        <FishImage
                            src="image/dangerous-fishes/crocodile/крокодил2.jpg"
                            onClick={onCrocodile}
                            text="Рыба-крокодил"
                        />
                        <FishImage
                            src="image/dangerous-fishes/hammer-fish/рыба-молот4.jpg"
                            onClick={onHammerfish}
                            text="Рыба-молот"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/lionfish/крылатка3.jpg"
                            onClick={onLionfish}
                            text="Крылатка"
                        />
                        <FishImage
                            src="image/dangerous-fishes/long-winged-fish/длиннокрылая акула1.jpeg"
                            onClick={onLongwingedfish}
                            text="Длиннокрылая акула"
                        />
                        <FishImage
                            src="image/dangerous-fishes/murena/мурена5.jpg"
                            onClick={onMurena}
                            text="Мурена"
                        />
                        <FishImage
                            src="image/dangerous-fishes/sea-snake/морская змея 1.jpg"
                            onClick={onSeasnake}
                            text="Морская змея"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/sharks-black-feather/Черноперая_рифовая_акула9.jpg"
                            onClick={onSharksblackfeather}
                            text="Рифовая акула"
                        />
                        <FishImage
                            src="image/dangerous-fishes/sharks-cow/бычья акула1.jpg"
                            onClick={onSharkscow}
                            text="Тупорылая акула"
                        />
                        <FishImage
                            src="image/dangerous-fishes/sharks-maco/акула мако 4.jpg"
                            onClick={onSharksmaco}
                            text="Акула мако"
                        />
                        <FishImage
                            src="image/dangerous-fishes/sharks-nuss/акула нянька.jpg"
                            onClick={onSharksnuss}
                            text="Акула-нянька"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/sharks-white/белая акула1.jpg"
                            onClick={onSharkswhite}
                            text="Белая акула"
                        />
                        <FishImage
                            src="image/dangerous-fishes/sharks-zebra/зебровая акула.jpg"
                            onClick={onSharkszebra}
                            text="Акула-зебра"
                        />
                        <FishImage
                            src="image/dangerous-fishes/tigger-fish/тигровая акула2.jpg"
                            onClick={onTiggerfish}
                            text="Тигровая акула"
                        />
                        <FishImage
                            src="image/dangerous-fishes/whale-sharks/китовая акула6.jpg"
                            onClick={onWhalesharks}
                            text="Китовая акула"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/stone-fish/рыба-камень 4.jpg"
                            onClick={onStonefish}
                            text="Рыба-камень"
                        />
                        <FishImage
                            src="image/dangerous-fishes/skat/скат7.jpg"
                            onClick={onSkat}
                            text="Скат-хвостокол"
                        />
                        <FishImage
                            src="image/dangerous-fishes/skat/скат 12.jpg"
                            onClick={onSkatorlyak}
                            text="Орляк"
                        />
                        <FishImage
                            src="image/dangerous-fishes/skat/скат9.jpg"
                            onClick={onSkatmantu}
                            text="Манта"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/dangerous-fishes/tulozure/тилозур6.jpg"
                            onClick={onTulozure}
                            text="Тилозур"
                        />
                        <FishImage
                            src="image/dangerous-fishes/surgeon/хирург7.jpg"
                            onClick={onSurgeon}
                            text="Хирург"
                        />
                        <FishImage
                            src="image/dangerous-fishes/spinorog/спинорог9.jpg"
                            onClick={onBalistod}
                            text="Балистод"
                        />
                        <FishImage
                            src="image/dangerous-fishes/spinorog/спинорог17.jpg"
                            onClick={onSpinorog}
                            text="Спинорог"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

