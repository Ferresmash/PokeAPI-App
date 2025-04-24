import React from 'react';

const DetailsPanel = ({ pokemon }) => {
    if (!pokemon) {
        return (
            <article className='prose lg:prose-xl m-2 ml-3 w-full'>
                <h2 className='heading'>Choose a pokémon!</h2>
            </article >
        );
    }

    return (
        <article className='prose lg:prose-xl m-2 ml-3 w-full'>
            <div className='container flex justify-between'>
                <h2 className='heading my-auto'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img
                    src={pokemon.sprites?.front_default}
                    alt={pokemon.name}
                    style={{ width: '10rem', height: '10rem' }}
                    className='rounded-lg bg-base-200 my-auto'
                />
            </div>

            <div className='bg-base-300 rounded-lg px-4'>
                <table >
                    <thead>
                        <tr>
                            <th className='text-primary'>Id:</th>
                            <th className='text-secondary'>Base Experience</th>
                            <th className='text-error'>Height</th>
                            <th className='text-warning'>Weight</th>
                            <th className='text-success'>Type</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{pokemon.id}</td>
                            <td>{pokemon.base_experience}</td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                            <td>{pokemon.types.map(t => t.type.name).join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='bg-base-300 rounded-lg px-4'>
                <table className='bg-base-300 p-2 rounded-lg'>
                    <thead>
                        <tr>
                            {pokemon.stats.map((stat, index) => (
                                <th key={index}>
                                    {stat.stat.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {pokemon.stats.map((stat, index) => (
                                <td key={index}>
                                    {stat.base_stat}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>



            <h3><strong>Abilities:</strong></h3>
            <details>
                <summary>Show/Hide Abilities</summary>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>
                            {ability.ability.name} {ability.is_hidden && '(Hidden)'}
                        </li>
                    ))}
                </ul>
            </details>

            <h3>Held Items:</h3>
            <details>
                <summary>Show/Hide Held Items</summary>
                {pokemon.held_items.length > 0 ? (
                    <ul>
                        {pokemon.held_items.map((item, index) => (
                            <li key={index}>{item.item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No held items</p>
                )}
            </details>
            <h3>Moves:</h3>
            <details>
                <summary>Show/Hide Moves</summary>
                <ul>
                    {pokemon.moves.slice(0, 10).map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </details>


            <h3>Cries:</h3>
            <audio controls key={pokemon.cries?.latest || 'no-cry'}>
                <source src={pokemon.cries?.latest} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </article >
    );
};

export default DetailsPanel;