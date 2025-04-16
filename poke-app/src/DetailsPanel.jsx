import React from 'react';

const DetailsPanel = ({ pokemon }) => {
    if (!pokemon) {
        return <div>No Pokémon selected</div>;
    }

    return (
        <div className="details-panel">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                style={{ width: '150px', height: '150px' }}
            />
            <p><strong>ID:</strong> {pokemon.id}</p>
            <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
            
            <h3>Abilities</h3>
            <ul>
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>
                        {ability.ability.name} {ability.is_hidden && '(Hidden)'}
                    </li>
                ))}
            </ul>

            <h3>Stats</h3>
            <ul>
                {pokemon.stats.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>

            <h3>Held Items</h3>
            {pokemon.held_items.length > 0 ? (
                <ul>
                    {pokemon.held_items.map((item, index) => (
                        <li key={index}>{item.item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No held items</p>
            )}

            <h3>Moves</h3>
            <ul>
                {pokemon.moves.slice(0, 10).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
            </ul>

            <h3>Cries</h3>
            <audio controls>
                <source src={pokemon.cries?.latest} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default DetailsPanel;