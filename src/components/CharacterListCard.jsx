import { Link } from "react-router-dom";

export default function CharacterListCard({ character, isDetail }) {
    // # Assegna a statusClass, se il character e' Alive :   
    // $ valore status-alive, altrimenti
    // % se e' Dead valore status-dead,
    // ^ in tutti gli altri casi lascia status-unknown 
    const statusClass = character.status === 'Alive' ? 'status-alive'
        : character.status === 'Dead' ? 'status-dead'
            : 'status-unknown';

    return (
        <article className={`character ${isDetail ? 'character-detail' : 'character-list'}`}>
            <div className="character-image">
                <img src={character.image} alt={`Ritratto di ${character.name}`} />
            </div>

            <div className="character-info">
                <div className="character-header">
                    <h2 className="character-name">{character.name}</h2>
                    <span className="status-wrapper">
                        <span className={`status-indicator ${statusClass}`}></span>
                        {character.status} - {character.species}
                    </span>
                </div>

                {isDetail ? (
                    // $ Se sono nella pagina di dettaglio
                    <div className="character-details-extended">
                        <div className="info-group">
                            <span className="info-label">Genere:</span>
                            <span className="info-value">{character.gender}</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Origine:</span>
                            <span className="info-value">{character.origin?.name}</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Ultima posizione nota:</span>
                            <span className="info-value">{character.location?.name}</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Apparizioni:</span>
                            <span className="info-value">{character.episode?.length} episodi</span>
                        </div>
                        <div className="actions">
                            <Link to="/characters" className="btn btn-secondary">
                                ← Torna alla lista
                            </Link>
                        </div>
                    </div>
                ) : (
                    // * Se invece sono nella pagina di elenco
                    <div className="character-list-preview">
                        <div className="info-group">
                            <span className="info-label">Ultima posizione:</span>
                            <span className="info-value">{character.location?.name}</span>
                        </div>
                        <Link to={`/characters/${character.id}`} className="btn">
                            Dettagli completi
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
}