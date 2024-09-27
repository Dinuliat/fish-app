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
        <div className="h-100 p-5">
            <div className="MagicContainer h-100 w-100">
                <div className="FishesName">Безопасные рыбы Красного моря</div>

                <div className='Fishes-box'>
                    <div className='Box'>
                        <div onClick={onAngel} className='Angel Fish'>
                            <p className="Fish_text ">Рыба-ангел</p>
                        </div>
                        <div onClick={onAntias} className='Antias Fish'>
                            <p className="Fish_text ">Антиас</p>
                        </div>
                        <div onClick={onGrupper} className='Grupper Fish'>
                            <p className="Fish_text ">Группер</p>
                        </div>
                        <div onClick={onDolphin} className='Dolphin Fish'>
                            <p className="Fish_text ">Дельфин</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onParrot} className='Parrot Fish'>
                            <p className="Fish_text ">Рыба-попугай</p>
                        </div>
                        <div onClick={onTuna} className='Tuna Fish'>
                            <p className="Fish_text ">Тунец</p>
                        </div>
                        <div onClick={onSolders} className='Soldiers Fish'>
                            <p className="Fish_text ">Солдатики</p>
                        </div>
                        <div onClick={onZebrosoma} className='Zebrosoma Fish'>
                            <p className="Fish_text ">Зебрасома</p>
                        </div>

                    </div>
                    <div className='Box'>
                        <div onClick={onNemo} className='Nemo Fish'>
                            <p className="Fish_text">Рыба-клоун</p>
                        </div>
                        <div onClick={onCezii} className='Cezii Fish'>
                            <p className="Fish_text">Цезии</p>
                        </div>
                        <div onClick={onKuzovok} className='Kuzovok Fish'>
                            <p className="Fish_text">Кузовок</p>
                        </div>
                        <div onClick={onFlute} className='Flute Fish'>
                            <p className="Fish_text">Рыба-дудочка</p>
                        </div>

                    </div>
                    <div className='Box'>
                        <div onClick={onDugon} className='Dugon Fish'>
                            <p className="Fish_text">Дюгонь</p>
                        </div>
                        <div onClick={onPlatex} className='Platex Fish'>
                            <p className="Fish_text ">Платексы</p>
                        </div>
                        <div onClick={onWhisperers} className='Whisperers Fish'>
                            <p className="Fish_text">Шептуны</p>
                        </div>
                        <div onClick={onScolopsis} className='Scolopsis Fish'>
                            <p className="Fish_text">Сколопсис</p>
                        </div>
                    </div>
                    <div className='Box'>
                        <div onClick={onNapoleon} className='Napoleon Fish'>
                            <p className="Fish_text">Наполеон</p>
                        </div>
                        <div onClick={onLipsfish} className='Lipsfish Fish'>
                            <p className="Fish_text">Губаны</p>
                        </div>
                        <div onClick={onKabuba} className='Kabuba Fish'>
                            <p className="Fish_text">Кабубы</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
