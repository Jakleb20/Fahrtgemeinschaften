// Header.tsx
import { useNavigate } from "react-router-dom";
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" onClick={() => navigate("/")}>
                    <img src="/logo.png" alt="Logo" className="logo-image" />
                    <span className="logo-text">Fahrtgemeinschaft</span>
                </div>
                <nav className="nav">
                    <a className="nav-link" onClick={() => navigate("/karte")}>Karte</a>
                    <a className="nav-link" onClick={() => navigate("/allefahrtgemeinschaften")}>Alle Fahrtgemeinschaften</a>
                    <a className="nav-link" onClick={() => navigate("/allefahrtstunden")}>Alle Fahrten</a>
                    <a className="nav-link" onClick={() => navigate("/gespeichertefahrten")}>Gespeicherte Fahrten</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
