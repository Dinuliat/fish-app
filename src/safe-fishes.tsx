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
                <div className="SafeFishesName">Безопасные рыбы Красного моря</div>

                <div className='SafeFishes-box'>
                    <div className='SafeFishes-box1'>
                        <div onClick={onAngel} className='Angel'>
                            <p className="Angel_text">Рыба-ангел</p>
                        </div>
                        <div onClick={onAntias} className='Antias'>
                            <p className="Antias_text">Антиас</p>
                        </div>
                        <div onClick={onGrupper} className='Grupper'>
                            <p className="Grupper_text">Группер</p>
                        </div>
                        <div onClick={onDolphin} className='Dolphin'>
                            <p className="Dolphin_text">Дельфин</p>
                        </div>
                        <div onClick={onNapoleon} className='Napoleon'>
                            <p className="Napoleon_text">Наполеон</p>
                        </div>
                    </div>
                    <div className='SafeFishes-box2'>
                        <div onClick={onParrot} className='Parrot'>
                            <p className="Parrot_text">Рыба-попугай</p>
                        </div>
                        <div onClick={onTuna} className='Tuna'>
                            <p className="Tuna_text">Тунец</p>
                        </div>
                        <div onClick={onSolders} className='Solders'>
                            <p className="Solders_text">Солдатики</p>
                        </div>
                        <div onClick={onZebrosoma} className='Zebrosoma'>
                            <p className="Zebrosoma_text">Зебрасома</p>
                        </div>
                        <div onClick={onKabuba} className='Kabuba'>
                            <p className="Kabuba_text">Кабубы</p>
                        </div>
                    </div>
                    <div className='SafeFishes-box3'>
                        <div onClick={onNemo} className='Nemo'>
                            <p className="Nemo_text">Рыба-клоун</p>
                        </div>
                        <div onClick={onCezii} className='Cezii'>
                            <p className="Cezii_text">Цезии</p>
                        </div>
                        <div onClick={onKuzovok} className='Kuzovok'>
                            <p className="Kuzovok_text">Кузовок</p>
                        </div>
                        <div onClick={onFlute} className='Flute'>
                            <p className="Flute_text">Рыба-дудочка</p>
                        </div>
                        <div onClick={onLipsfish} className='Lipsfish'>
                            <p className="Lipsfish_text">Губаны</p>
                        </div>
                    </div>
                    <div className='SafeFishes-box4'>
                        <div onClick={onDugon} className='Dugon'>
                            <p className="Dugon_text">Дюгонь</p>
                        </div>
                        <div onClick={onPlatex} className='Platex'>
                            <p className="Platex_text">Платексы</p>
                        </div>
                        <div onClick={onWhisperers} className='Whisperers'>
                            <p className="Whisperers_text">Шептуны</p>
                        </div>
                        <div onClick={onScolopsis} className='Scolopsis'>
                            <p className="Scolopsis_text">Сколопсис</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
