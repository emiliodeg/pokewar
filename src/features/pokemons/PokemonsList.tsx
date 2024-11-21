import PokemonCard, { IPokemon } from './PokemonCard'
import { gql, useQuery } from 'urql'

const PokemonsQuery = gql`
  query samplePokeAPIquery {
    pokemons: pokemon_v2_pokemon(order_by: { id: asc }, limit: 20, offset: 0) {
      id
      name
      height
      base_experience
    }
  }
`
export default function PokemonsList () {
  const [result] = useQuery({
    query: PokemonsQuery
  })

  const {
    data,
    fetching: loading,
    error
  } = result

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  if (!Array.isArray(data.pokemons) || !data.pokemons.length)
    return <div>No results</div>

  return (
    <>
      <h1>Select your pokemon and start the game</h1>

      <div className='cards'>
        {(data.pokemons as IPokemon[]).map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

      {/* {(data.next || data.previous) && (
        <div>
          {data.previous && (
            <button onClick={() => setUrl(data.previous)}>Previous</button>
          )}
          {data.next && <button onClick={() => setUrl(data.next)}>Next</button>}
        </div>
      )} */}
    </>
  )
}
