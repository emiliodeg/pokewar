import { useState } from 'react'
import useData from '../../hooks/useData'
import { PokeAPI } from 'pokeapi-types'
import PokemonCard from './PokemonCard'

export default function PokemonsList () {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const { data, loading, error } = useData<PokeAPI.NamedAPIResourceList>(url)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  if (!data?.results.length) return <div>No pokemons</div>

  return (
    <>
      <h1>Select your pokemon and start the game</h1>

      <div className='cards'>
        {data.results.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

      {(data.next || data.previous) && (
        <div>
          {data.previous && (
            <button onClick={() => setUrl(data.previous)}>Previous</button>
          )}
          {data.next && <button onClick={() => setUrl(data.next)}>Next</button>}
        </div>
      )}
    </>
  )
}
