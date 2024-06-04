export const Magicworld = () => {
    return (
        <div className="h-100 p-5">
            <div className="MagicContainer h-100 w-100">

                <div className="Menu row">
                    <div className='Menu1 col'>Безопасные рыбы</div>
                    <div className='Menu2 col'>Опасные рыбы</div>
                    <div className='Menu3 col'>Не рыбы</div>
                    <div className='Menu4 col'>Контакты</div>

                </div>
                <div className="Search"><input placeholder="поиск" type='text'></input></div>
                <div className="Banner">
                    <p className="Banner_text">Волшебный подводный мир Красного моря</p>
                </div>

                <div className='Section row'>

                    <div className='Chapter1 col'>Безопасные рыбы</div>
                    <div className='Chapter2 col'>Опасные рыбы</div>
                    <div className='Chapter3 col'>Не рыбы</div>

                </div>
            </div>
        </div>

    )
}