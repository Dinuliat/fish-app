import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

export const SafeFishes = () => {

    const navigation = useNavigate();

    const onAngel = useCallback(() => {
        navigation("/angel")
    }, [navigation])

    const onAntias = useCallback(() => {
        navigation("/antias")
    }, [navigation])

    const onGrupper = useCallback(() => {
        navigation("/grupper")
    }, [navigation])

    const onDolphin = useCallback(() => {
        navigation("/dolphin")
    }, [navigation])

    const onNapoleon = useCallback(() => {
        navigation("/napoleon")
    }, [navigation])

    const onParrot = useCallback(() => {
        navigation("/parrot")
    }, [navigation])

    const onTuna = useCallback(() => {
        navigation("/tuna")
    }, [navigation])

    const onSolders = useCallback(() => {
        navigation("/solders")
    }, [navigation])

    const onZebrosoma = useCallback(() => {
        navigation("/zebrosoma")
    }, [navigation])

    const onKabuba = useCallback(() => {
        navigation("/kabuba")
    }, [navigation])

    const onNemo = useCallback(() => {
        navigation("/nemo")
    }, [navigation])

    const onCezii = useCallback(() => {
        navigation("/Cezii")
    }, [navigation])

    const onDugon = useCallback(() => {
        navigation("/dugon")
    }, [navigation])

    const onFlute = useCallback(() => {
        navigation("/flute")
    }, [navigation])

    const onKuzovok = useCallback(() => {
        navigation("/kuzovok")
    }, [navigation])

    const onLipsfish = useCallback(() => {
        navigation("/lipsfish")
    }, [navigation])

    const onPlatex = useCallback(() => {
        navigation("/platex")
    }, [navigation])

    const onWhisperers = useCallback(() => {
        navigation("/whisperers")
    }, [navigation])

    const onScolopsis = useCallback(() => {
        navigation("/scolopsis")
    }, [navigation])

    return (
        <div className="p-5">
            <div className="MagicContainer">
                <div className="FishesName">Безопасные рыбы Красного моря</div>

                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onAngel} className='Angel Fish'>
                            <img src="image/safe-fishes/angel/ангел10.jpg" width="350" height="250" />
                            <p className="Fish_text ">Рыба-ангел</p>
                        </div>
                        <div onClick={onAntias} className='Antias Fish'>
                            <img src="image/safe-fishes/antias/антиас6.jpg" width="350" height="250" />
                            <p className="Fish_text ">Антиас</p>
                        </div>
                        <div onClick={onGrupper} className='Grupper Fish'>
                            <img src="image/safe-fishes/gruppers/группер7.jpg" width="350" height="250" />
                            <p className="Fish_text ">Группер</p>
                        </div>
                        <div onClick={onDolphin} className='Dolphin Fish'>
                            <img src="image/safe-fishes/dolphins/дельфин5.jpg" width="350" height="250" />
                            <p className="Fish_text ">Дельфин</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onParrot} className='Parrot Fish'>
                            <img src="image/safe-fishes/parrot/попугай9.jpg" width="350" height="250" />
                            <p className="Fish_text ">Рыба-попугай</p>
                        </div>
                        <div onClick={onTuna} className='Tuna Fish'>
                            <img src="image/safe-fishes/tuna/тунец3.jpg" width="350" height="250" />
                            <p className="Fish_text ">Тунец</p>
                        </div>
                        <div onClick={onSolders} className='Soldiers Fish'>
                            <img src="image/safe-fishes/soldiers/солдат1.jpg" width="350" height="250" />
                            <p className="Fish_text ">Солдатики</p>
                        </div>
                        <div onClick={onZebrosoma} className='Zebrosoma Fish'>
                            <img src="image/safe-fishes/zebrosoma/зебрасомы2.jpg" width="350" height="250" />
                            <p className="Fish_text ">Зебрасома</p>
                        </div>

                    </div>
                    <div className='Box'>
                        <div onClick={onNemo} className='Nemo Fish'>
                            <img src="image/safe-fishes/nemo/немо4.jpg" width="350" height="250" />
                            <p className="Fish_text">Рыба-клоун</p>
                        </div>
                        <div onClick={onCezii} className='Cezii Fish'>
                            <img src="image/safe-fishes/cezii/цезии4.jpg" width="350" height="250" />
                            <p className="Fish_text">Цезии</p>
                        </div>
                        <div onClick={onKuzovok} className='Kuzovok Fish'>
                            <img src="image/safe-fishes/kuzovok/кузовок4.jpg" width="350" height="250" />
                            <p className="Fish_text">Кузовок</p>
                        </div>
                        <div onClick={onFlute} className='Flute Fish'>
                            <img src="image/safe-fishes/flute/дудочка14.jpg" width="350" height="250" />
                            <p className="Fish_text">Рыба-дудочка</p>
                        </div>

                    </div>
                    <div className='Box'>
                        <div onClick={onDugon} className='Dugon Fish'>
                            <img src="image/safe-fishes/dugon/дюгонь5.jpg" width="350" height="250" />
                            <p className="Fish_text">Дюгонь</p>
                        </div>
                        <div onClick={onPlatex} className='Platex Fish'>
                            <img src="image/safe-fishes/platex/платекс2.jpg" width="350" height="250" />
                            <p className="Fish_text ">Платексы</p>
                        </div>
                        <div onClick={onWhisperers} className='Whisperers Fish'>
                            <img src="image/safe-fishes/whisperers/шептуны2.jpg" width="350" height="250" />
                            <p className="Fish_text">Шептуны</p>
                        </div>
                        <div onClick={onScolopsis} className='Scolopsis Fish'>
                            <img src="image/safe-fishes/scolopsis/Scolopsis-ghanam2.jpg" width="350" height="250" />
                            <p className="Fish_text">Сколопсис</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onNapoleon} className='Napoleon Fish'>
                            <img src="image/safe-fishes/napoleons/наполеон7.jpg" width="350" height="250" />
                            <p className="Fish_text">Наполеон</p>
                        </div>
                        <div onClick={onLipsfish} className='Lipsfish Fish'>
                            <img src="image/safe-fishes/lips-fish/губан2.jpg" width="350" height="250" />
                            <p className="Fish_text">Губаны</p>
                        </div>
                        <div onClick={onKabuba} className='Kabuba Fish'>
                            <img src="image/safe-fishes/kabubas/кабубы2.jpg" width="350" height="250" />
                            <p className="Fish_text">Кабубы</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
