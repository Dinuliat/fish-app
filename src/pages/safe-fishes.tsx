import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"

export const SafeFishes = () => {

    const navigation = useNavigate();

    const onAngel = useCallback(() => {
        navigation("/fish/angel")
    }, [navigation])

    const onAntias = useCallback(() => {
        navigation("/fish/antias")
    }, [navigation])

    const onGrupper = useCallback(() => {
        navigation("/fish/grupper")
    }, [navigation])

    const onDolphin = useCallback(() => {
        navigation("/fish/dolphin")
    }, [navigation])

    const onNapoleon = useCallback(() => {
        navigation("/fish/napoleon")
    }, [navigation])

    const onParrot = useCallback(() => {
        navigation("/fish/parrot")
    }, [navigation])

    const onTuna = useCallback(() => {
        navigation("/fish/tuna")
    }, [navigation])

    const onSolders = useCallback(() => {
        navigation("/fish/solders")
    }, [navigation])

    const onZebrosoma = useCallback(() => {
        navigation("/fish/zebrosoma")
    }, [navigation])

    const onKabuba = useCallback(() => {
        navigation("/fish/kabuba")
    }, [navigation])

    const onNemo = useCallback(() => {
        navigation("/fish/nemo")
    }, [navigation])

    const onCezii = useCallback(() => {
        navigation("/fish/cezii")
    }, [navigation])

    const onDugon = useCallback(() => {
        navigation("/fish/dugon")
    }, [navigation])

    const onFlute = useCallback(() => {
        navigation("/fish/flute")
    }, [navigation])

    const onKuzovok = useCallback(() => {
        navigation("/fish/kuzovok")
    }, [navigation])

    const onLipsfish = useCallback(() => {
        navigation("/fish/lipsfish")
    }, [navigation])

    const onPlatex = useCallback(() => {
        navigation("/fish/platex")
    }, [navigation])

    const onWhisperers = useCallback(() => {
        navigation("/fish/whisperers")
    }, [navigation])

    const onScolopsis = useCallback(() => {
        navigation("/fish/scolopsis")
    }, [navigation])

    const onAluter = useCallback(() => {
        navigation("/fish/aluter")
    }, [navigation])

    return (
        <div className="p-1">
            <div className="MagicContainer">
                <div className="FishesName">Безопасные рыбы Красного моря</div>
                <div className='Fishes-box'>
                    <div className='Box'>
                        <FishImage
                            src="image/safe-fishes/angel/ангел10.jpg"
                            onClick={onAngel}
                            text="Рыба-ангел"
                        />
                        <FishImage
                            src="image/safe-fishes/antias/антиас6.jpg"
                            onClick={onAntias}
                            text="Антиас"
                        />
                        <FishImage
                            src="image/safe-fishes/gruppers/группер7.jpg"
                            onClick={onGrupper}
                            text="Групер"
                        />
                        <FishImage
                            src="image/safe-fishes/dolphins/дельфин5.jpg"
                            onClick={onDolphin}
                            text="Дельфин"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/safe-fishes/parrot/попугай9.jpg"
                            onClick={onParrot}
                            text="Рыба-попугай"
                        />
                        <FishImage
                            src="image/safe-fishes/tuna/тунец3.jpg"
                            onClick={onTuna}
                            text="Каранкс"
                        />
                        <FishImage
                            src="image/safe-fishes/soldiers/солдат1.jpg"
                            onClick={onSolders}
                            text="Рыба-солдат"
                        />
                        <FishImage
                            src="image/safe-fishes/zebrosoma/зебрасомы2.jpg"
                            onClick={onZebrosoma}
                            text="Зебрасома"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/safe-fishes/nemo/немо4.jpg"
                            onClick={onNemo}
                            text="Рыба-клоун"
                        />
                        <FishImage
                            src="image/safe-fishes/cezii/цезии4.jpg"
                            onClick={onCezii}
                            text="Цезии"
                        />
                        <FishImage
                            src="image/safe-fishes/kuzovok/кузовок4.jpg"
                            onClick={onKuzovok}
                            text="Кузовок"
                        />
                        <FishImage
                            src="image/safe-fishes/flute/дудочка14.jpg"
                            onClick={onFlute}
                            text="Рыба-флейта"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/safe-fishes/dugon/дюгонь5.jpg"
                            onClick={onDugon}
                            text="Дюгонь"
                        />
                        <FishImage
                            src="image/safe-fishes/platex/платекс2.jpg"
                            onClick={onPlatex}
                            text="Платаксы"
                        />
                        <FishImage
                            src="image/safe-fishes/whisperers/шептуны2.jpg"
                            onClick={onWhisperers}
                            text="Шептуны"
                        />
                        <FishImage
                            src="image/safe-fishes/scolopsis/Scolopsis-ghanam2.jpg"
                            onClick={onScolopsis}
                            text="Сколопсис"
                        />
                    </div>
                    <div className='Box'>
                        <FishImage
                            src="image/safe-fishes/napoleons/наполеон7.jpg"
                            onClick={onNapoleon}
                            text="Наполеон"
                        />
                        <FishImage
                            src="image/safe-fishes/lips-fish/губан2.jpg"
                            onClick={onLipsfish}
                            text="Губановые"
                        />
                        <FishImage
                            src="image/safe-fishes/kabubas/кабубы2.jpg"
                            onClick={onKabuba}
                            text="Кабубы"
                        />
                        <FishImage
                            src="image/safe-fishes/aluter/хвост (3).jpg"
                            onClick={onAluter}
                            text="Расписные алутеры"
                        />

                    </div>
                </div>
            </div>
        </div>

    )
}
