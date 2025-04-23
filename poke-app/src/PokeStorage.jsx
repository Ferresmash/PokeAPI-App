import React, { useState, useImperativeHandle, forwardRef } from 'react';

const PokeStorage = forwardRef(({ onPokemonSelect }, ref) => {
    const [storedPokemon, setStoredPokemon] = useState([]);

    const addPokemon = (pokemon) => {

        console.log('Adding Pokémon:', pokemon.name);
        console.log('Stored Pokémon before:', storedPokemon);

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
                            src={pokemon.sprites?.front_default}
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
});

export default PokeStorage;