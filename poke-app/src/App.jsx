import { useState, useRef } from 'react';
import './App.css';
import Header from './header';
import PokeList from './PokeList';
import DetailsPanel from './DetailsPanel';

function App() {
    const [currPokemon, setCurrPokemon] = useState(null);
    const [pokeStorage, setPokeStorage] = useState([]);

    const handlePokemonSearch = (pokemon) => {
        setCurrPokemon(pokemon);
        addPokemon(pokemon);
    };

    const addPokemon = (pokemon) => {
        if (!pokeStorage.find((p) => p.id === pokemon.id)) {
            setPokeStorage((prev) => [...prev, pokemon]);
        }
    }

    const removePokemon = (pokemon) => {
        setPokeStorage((prev) => prev.filter((p) => p.id !== pokemon.id));
        if (currPokemon?.id === pokemon.id) {
            setCurrPokemon(null);
        }
    }

    return (
        <>
            <div className="flex flex-col bg-base-300 items-center w-full h-screen">
            <div className="container flex flex-col h-full">
                {/* Header */}
                <Header onPokemonSearch={handlePokemonSearch} />

                {/* Main Content */}
                <div className="flex flex-row bg-base-100 m-2 justify-between rounded-lg w-full flex-grow overflow-auto">
                    <PokeList
                        onPokemonSelect={setCurrPokemon}
                        pokemons={pokeStorage}
                        onPokemonRemove={removePokemon}
                    />
                    <DetailsPanel pokemon={currPokemon} />
                </div>
            </div>
        </div>
        </>
    );
}

export default App;