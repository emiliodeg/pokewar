import { Avatar } from '@mui/material'
import { PokeAPI } from 'pokeapi-types'

export default function PokemonImage ({
  pokemon
}: {
  pokemon: PokeAPI.NamedAPIResource
}) {
  const [_, id] = pokemon.url.match(/\/(\d+)\/$/) ?? []

  if (!id) return null

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return <Avatar src={src} alt={pokemon.name} sx={{ width: 56, height: 56 }} />
}
