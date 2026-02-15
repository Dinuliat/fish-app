import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "../header.css";
import "./header/burger-menu.css";

//  single menu list  + event loop  
const menuItems = []
// {menuItems.map((item, index) => (
//     <a key={index} id={item.id} className="menu-item" href={item.href}>{item.label}</a>
// ))}

export const Header = () => {
    return (
        <>
            <Menu pageWrapId='main'>
                <a id="home" className="menu-d" href="/">Домой</a>
                <a id="safe-fishes" className="menu-item" href="/safe-fishes">Безопасные рыбы</a>
                <a id="dangerous-fishes" className="menu-item" href="/dangerous-fishes">Опасные рыбы</a>
                <a id="no-fishes" className="menu-item" href="/no-fishes">Не рыбы</a>
                <a id="map" className="menu-item" href="/map">Карта</a>
                <a id="yandex-map" className="menu-item" href="/yandex-map">Яндекс Карта</a>
                <a id="contacts" className="menu-item" href="/contacts">Контакты</a>
            </Menu>
            <header className="fixed-header">
                <nav className="nav-menu">
                    <Link to="/" className="nav-item">Домой</Link>
                    <Link to="/safe-fishes" className="nav-item">Безопасные рыбы</Link>
                    <Link to="/dangerous-fishes" className="nav-item">Опасные рыбы</Link>
                    <Link to="/no-fishes" className="nav-item">Не рыбы</Link>
                    <Link to="/contacts" className="nav-item">Контакты</Link>
                    <Link to="/yandex-map" className="nav-item">Карта коралловых рифов</Link>
                </nav>
            </header>
        </>
    );
};
