export const Contacts = () => {
    return (
        <div className="p-0">
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
                    {/* <div className="Box">
                        <div className="Chapter">
                            <img src="image/dangerous-fishes/whale-sharks/китовая_акула4.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/safe-fishes/napoleons/наполеон6.jpg" width="350" height="250" />
                        </div>
                        <div className="Chapter">
                            <img src="image/safe-fishes/dugon/дюгонь4.jpg" width="350" height="250" />
                        </div>
                    </div> */}
                    <div className="Mail">
                        <a href="mailto:dinuliat@mail.ru" className="Email">dinuliat@mail.ru</a>
                        <div className="Network">
                            {/* <div className="Telegramm media-icon"></div> */}
                            <a className="telegram-icon" href="tg://resolve?domain=dinuliat" rel="nofollow noopener noreferrer">Telegramm</a>
 
                            {/* <div className="VK media-icon"></div> */}
                            <a className="vk-icon" href="https://vk.com/id11631407" rel="nofollow noopener noreferrer">VK</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}