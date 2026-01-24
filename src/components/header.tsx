import { Link } from "react-router-dom";
import "../header.css";

export const Header = () => {
    return (
        <header className="fixed-header">
            <nav className="nav-menu">
                <Link to="/" className="nav-item">Домой</Link>
                <Link to="/safe-fishes" className="nav-item">Безопасные рыбы</Link>
                <Link to="/dangerous-fishes" className="nav-item">Опасные рыбы</Link>
                <Link to="/no-fishes" className="nav-item">Не рыбы</Link>
                <Link to="/contacts" className="nav-item">Контакты</Link>
            </nav>
        </header>
    );
};
