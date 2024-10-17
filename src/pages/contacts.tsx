export const Contacts = () => {
    return (
        <div className="p-1">
            <div className="MagicContainer" style={{ minHeight: "100vh" }}>
                <div className="FishesName">Контакты</div>
                <div className='Fishes-box'>
                    <div className="Box">
                        <div className="Chapter">
                            <img src="image/no-fishes/corals/кораллы1.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/dangerous-fishes/skat/скат8.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/dangerous-fishes/murena/мурена6.jpg" width="350" height="250" />
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Chapter">
                            <img src="image/dangerous-fishes/whale-sharks/китовая_акула4.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/safe-fishes/napoleons/наполеон6.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/safe-fishes/dugon/дюгонь4.jpg" width="350" height="250" />
                        </div>
                    </div>
                    <div className="Mail">
                        <div className="Email">dinuliat@mail.ru</div>
                        <div className="Network">
                            <div className="Telegramm media-icon"></div>
                            <div className="VK media-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}