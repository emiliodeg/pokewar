import { Avatar } from '@mui/material'

export default function PokemonImage ({
  id,
  name
}: {
  id: number
  name: string
}) {
  if (!id) return null

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return <Avatar src={src} alt={name} sx={{ width: 56, height: 56 }} />
}
