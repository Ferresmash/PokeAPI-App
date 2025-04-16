import React from "react";

const Header = ( {onPokemonSearch} ) => {
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    const search = async() => {
        const query = document.querySelector('.textarea').value;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const pokemon = await response.json();
            onPokemonSearch(pokemon);
        }catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    }

    return (
        <div className='bg-base-300 flex justify-between items-center p-4 pt-3 pb-0'>
            <article className="prose lg:prose-xl">
            <h1 className="text-xl lg:text-2xl">PokeAPI</h1>
            </article>
            <input className='textarea ml-4' placeholder="Search for pokémon!" onKeyUp={handleKeyPress} />
        </div>
    )
};

export default Header;