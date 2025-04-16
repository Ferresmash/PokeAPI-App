import React, { useState } from 'react';

const PokeStorage = ({ onPokemonSelect}) => {
    const [storedPokemon, setStoredPokemon] = useState([]);

    const addPokemon = (pokemon) => {
        if (!storedPokemon.find((p) => p.name === pokemon.name)) {
            setStoredPokemon((prev) => [...prev, pokemon]);
        }
    };

    const removePokemon = (name) => {
        setStoredPokemon((prev) => prev.filter((p) => p.name !== name));
    };

    const handlePokemonClick = (pokemon) => {
        onPokemonSelect(pokemon);
    };

    return (
        <div className="poke-storage">
            <h2>Stored Pokémon</h2>
            <div className="pokemon-list">
                {storedPokemon.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon-item">
                        <img
                            src={pokemon.icon}
                            alt={pokemon.name}
                            onClick={() => handlePokemonClick(pokemon)}
                        />
                        <span>{pokemon.name}</span>
                        <button onClick={() => removePokemon(pokemon.name)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokeStorage;