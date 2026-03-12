import { Link } from "react-router-dom"

export default function CharacterListCard({ character, isDetail }) {

    return (
        <article key={character.id} className="character">
            <div className="character-image">
                <img src={character.image} alt="" />
            </div>
            <div className="character-info">
                <p className="character-name">
                    {character.name}
                </p>
                <p className="character-origin">
                    {character.origin.name} - {character.status === 'Alive' ? "vivo" : "meno vivo"}
                </p>
                <p>
                    {!isDetail && <Link to={`/characters/${character.id}`} className="btn">
                        View more...
                    </Link>}
                </p>
            </div>
        </article>
    )
}

