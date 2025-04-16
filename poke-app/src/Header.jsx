import React from "react";

const Header = () => {
    return (
        <div className='bg-base-300 flex justify-between items-center p-4 pt-3 pb-0'>
            <article class="prose lg:prose-xl">
                <h1>PokeAPI</h1>
                <input className='textarea' placeholder="Search for pokémon!" />
            </article>
        </div>
    )
};

export default Header;