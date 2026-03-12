import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterListCard from "../../components/CharacterListCard";
import { useCount } from "../../contexts/CountContext";


export default function CharacterDetailPage() {
    const [data] = useCount();
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const navigate = useNavigate();

    function fetchCharacter() {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setCharacter(response.data))
            .catch(error => {
                navigate("/characters")
            })
    }

    useEffect(() => {
        fetchCharacter()
        // alert(id);
    }, []);

    return (
        <main className="container">
            {character ? (
                <>
                    <h1>
                        Single Character Page : {character.name}, {character.species},  {character.status}
                    </h1>
                    <h3>
                        {data.darkMode ? 'dark mode attiva' : 'dark mode inattiva'}
                    </h3>

                    <CharacterListCard
                        character={character}
                        isDetail={true}
                    />
                </>

            ) :
                (
                    <p>
                        Loading  character...
                    </p>
                )}

        </main>
    );
}

