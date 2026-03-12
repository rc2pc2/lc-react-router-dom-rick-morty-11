import { NavLink } from "react-router-dom";
import { useCount } from "../contexts/CountContext";

export default function Header() {
    const [data, setData] = useCount();

    function toggleDarkMode() {
        setData({ ...data, darkMode: !data.darkMode });
    }

    return (
        <header className="main-header">
            <div className="header-brand">
                <NavLink to="/">React: Rick & Morty #WDPT11</NavLink>
            </div>

            <nav className="header-nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/characters" className="nav-link">Characters</NavLink>
                <button to="/characters" className="btn btn-large" onClick={toggleDarkMode}>Dark mode!</button>
            </nav>
        </header>
    );
}