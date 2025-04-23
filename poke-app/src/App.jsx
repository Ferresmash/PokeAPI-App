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
            <div className="flex flex-col overflow-auto bg-base-300 items-center  h-full w-full">
                <div className="container flex flex-col overflow-hidden w-2/3">
                    <Header onPokemonSearch={handlePokemonSearch} />
                    <div className="flex flex-row bg-base-100 m-2 justify-between rounded-lg">
                        <PokeStorage
                            onPokemonSelect={(pokemon) => setCurrPokemon(pokemon)}
                        />
                        <DetailsPanel pokemon={currPokemon} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;