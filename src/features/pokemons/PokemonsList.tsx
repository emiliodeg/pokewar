import { useState } from 'react'
import useData from '../../hooks/useData'
import { PokeAPI } from 'pokeapi-types'
import PokemonImage from './PokemonImage'

export default function PokemonsList () {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const { data, loading, error } = useData<PokeAPI.NamedAPIResourceList>(url)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  if (!data?.results.length) return <div>No pokemons</div>

  return (
    <>
      <h1>Select your pokemon and start the game</h1>

      <ul className='cards'>
        {data.results.map(pokemon => (
          <li key={pokemon.name} className='card'>
            <span className='card__title'>{pokemon.name}</span>
            <PokemonImage pokemon={pokemon} />
          </li>
        ))}
      </ul>

      {(data.next || data.previous) && (
        <div>
          {data.previous && (
            <button onClick={() => setUrl(data.previous)}>Previous</button>
          )}
          {data.next && (
            <button onClick={() => setUrl(data.next)}>Next</button>
          )}
        </div>
      )}
    </>
  )
}
