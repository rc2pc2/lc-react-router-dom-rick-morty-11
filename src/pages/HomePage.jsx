import { Link } from "react-router-dom";
import { useCount } from "../contexts/CountContext";
import { useState } from "react";


export default function HomePage() {
    const [data, setData] = useCount();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    <br />
                    <span className="text-accent">Rick and Morty</span>
                    <br />
                    <span>
                        Prodotti nel carrello:  {data.cartProducts}
                    </span>
                </h1>

                <p className="hero-subtitle">
                    L'applicazione definitiva per imparare a navigare tra i componenti, con la fantastica partecipazione di WDPT11!
                </p>

                <div className="hero-actions">
                    <Link to="/characters" className="btn btn-large">
                        Inizia l'esplorazione
                    </Link>
                    <a
                        href="https://rickandmortyapi.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-large"
                    >
                        Documentazione API
                    </a>
                </div>
            </div>
        </section>
    );
}