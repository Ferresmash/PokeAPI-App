import React from 'react';

const PokeList = ({ pokemons, onPokemonSelect, onPokemonRemove }) => {
    return (
        <article className='prose lg:prose-xl m-2 ml-3 w-full overflow-auto'>
            <h2 className='py-2'>Stored Pokémon</h2>

                {[...pokemons].reverse().map((pokemon) => (
                    <div key={pokemon?.id} className='container flex justify-between items-center bg-base-300 rounded-lg my-2 p-2'onClick={() => onPokemonSelect(pokemon)}>
                        <div className='flex flex-row justify-between'>
                            <h3 className='my-auto pr-2'>                        
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </h3>
                            <button className='btn bg-200' onClick={() => onPokemonRemove(pokemon)}>X</button>
                        </div>
                        
                        <img
                            src={pokemon.sprites?.front_default}
                            alt={pokemon.name}
                            style={{ width: '5rem', height: '5rem' }}
                            className='rounded-lg bg-base-200 my-auto'
                        />
                    </div>
                ))}

        </article>
    );
};

export default PokeList;