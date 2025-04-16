import { useState, useRef } from 'react';
import './App.css';
import Header from './header';
import PokeStorage from './PokeStorage';
import DetailsPanel from './DetailsPanel';

function App() {
    // Current Pokémon is both the latest searched Pokémon and the selected Pokémon
    const [currPokemon, setCurrPokemon] = useState(null);

    const handlePokemonSearch = (pokemon, addPokemon) => {
        setCurrPokemon(pokemon);
        addPokemon(pokemon); // Call addPokemon in PokeStorage
    };

    return (
        <>
            <div className="max-h-screen h-screen flex flex-col bg-base-300 overflow-hidden">
                <Header onPokemonSearch={handlePokemonSearch} />
                <div className="flex flex-row">
                <PokeStorage
                    onPokemonSelect={(pokemon) => setCurrPokemon(pokemon)}
                />
                <DetailsPanel pokemon={currPokemon} />
                </div>

            </div>
        </>
    );
}

export default App;