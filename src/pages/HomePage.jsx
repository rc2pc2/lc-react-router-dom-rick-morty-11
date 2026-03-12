import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <header>
                <h1>
                    Rick & Morty HOMEPAGE
                </h1>
                <ul>
                    <li>
                        <Link to="/characters">
                            View character list
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}
