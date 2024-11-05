import { PokeAPI } from 'pokeapi-types'

export default function PokemonImage ({
  pokemon,
  width,
  height,
  ...props
}: {
  pokemon: PokeAPI.NamedAPIResource
  width?: number
  height?: number
  [key: string]: any
}) {
  const [_, id] = pokemon.url.match(/\/(\d+)\/$/) ?? []

  if (!id) return null

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <img
      src={src}
      alt={pokemon.name}
      width={width ?? 100}
      height={height ?? 100}
      {...props}
    />
  )
}
