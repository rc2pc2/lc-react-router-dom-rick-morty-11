import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="main-header">
            <div className="header-brand">
                <Link to="/">React: Rick & Morty #WDPT11</Link>
            </div>

            <nav className="header-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/characters" className="nav-link">Characters</Link>
            </nav>
        </header>
    );
}