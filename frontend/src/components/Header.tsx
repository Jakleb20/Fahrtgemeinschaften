import {useNavigate} from "react-router-dom";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav id="navbar">
                <div id="left-section">
                    <h1>Fahrtgemeinschaft</h1>
                </div>
                <div id="center-section">
                    <a style={{userSelect: "none"}} onClick={() => navigate("/karte")} id="nav-link">Karte</a>
                    <a style={{userSelect: "none"}} onClick={() => navigate("/allefahrtgemeinschaften")} id="nav-link">Alle Fahrtgemeinschaften</a>
                </div>
            </nav>

            {/* Rest of your homepage content */}
        </div>
    );
};

export default Header;
