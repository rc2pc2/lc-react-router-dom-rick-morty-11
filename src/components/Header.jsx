import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header className="main-header">
            <div className="header-brand">
                <NavLink to="/">React: Rick & Morty #WDPT11</NavLink>
            </div>

            <nav className="header-nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/characters" className="nav-link">Characters</NavLink>
            </nav>
        </header>
    );
}