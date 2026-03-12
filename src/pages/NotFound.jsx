import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="text-accent">Errore 404</span>
                </h1>

                <p className="hero-subtitle">
                    Urca urca! Sei finito in una pagina in-impaginabile
                </p>

                <div className="not-found-media">
                    <img
                        src="https://i.redd.it/a8d69zb2jsz51.png"
                        alt="404 not found picture"
                    />
                </div>

                <div className="hero-actions">
                    <Link to="/" className="btn btn-large">
                        ← Torna alla home!
                    </Link>
                </div>
            </div>
        </section>
    );
}