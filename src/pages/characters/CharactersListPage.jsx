import axios from "axios";
import CharacterListCard from "../../components/CharacterListCard";
import { useState, useEffect } from "react";

export default function CharactersListPage() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    function fetchCharacters(currentPage) {
        axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
            .then(response => setCharacters(response.data.results))
            .catch(error => console.warn(error))
    }

    useEffect(() => {
        fetchCharacters(page)
    }, [page]);

    function nextPage() {
        setPage(() => setPage(page + 1));
    }

    function prevPage() {
        if (page > 1) {
            setPage(() => setPage(page - 1));
        }
    }

    return (
        <main className="container">
            <header>
                <section className="pagination">

                    <h1>Database Personaggi</h1>
                    <section className="pagination">
                        <button
                            className="btn btn-secondary pagination-button"
                            onClick={prevPage}
                            disabled={page === 1}
                        >
                            ← Precedente
                        </button>

                        <span className="pagination-info">Pagina {page}</span>

                        <button
                            className="btn btn-secondary pagination-button"
                            onClick={nextPage}
                        >
                            Successiva →
                        </button>
                    </section>
                </section>
            </header>


            <section className="characters">
                {characters.map(character => (
                    <CharacterListCard
                        key={character.id}
                        character={character}
                        isDetail={false}
                    />
                ))}
            </section>
        </main>
    );
}

