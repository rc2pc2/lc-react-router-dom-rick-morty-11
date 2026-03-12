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
                <h1>
                    React Data Fetching: Rick & Morty
                </h1>

                <section className="pagination">

                    {page > 1 ? (<button className="pagination-button" onClick={prevPage}>Previous Page</button>) : ('')}
                    <button className="pagination-button" onClick={nextPage}>Next Page</button>
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

