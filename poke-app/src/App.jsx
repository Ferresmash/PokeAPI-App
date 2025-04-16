import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header';
import PokeStorage from './PokeStorage';
import DetailsPanel from './DetailsPanel';

function App() {


//current pokemon is both, latest searched pokemon and selected pokemon
const [currPokemon, setCurrPokemon] = useState(null);

  return (
    <>
    		<div className="max-h-screen h-screen flex flex-col bg-base-300 overflow-hidden">
        <Header/>
        </div>
        
        <PokeStorage onPokemonSelect={(pokemon) => setCurrPokemon(pokemon)} />
        <DetailsPanel pokemon={currPokemon} />
        <button onClick={() => getPokemon((count) => count + 1 )}/>


    </>
  )
}

export default App
