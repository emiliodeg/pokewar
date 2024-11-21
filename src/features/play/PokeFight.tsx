import { Icon, IconButton } from '@mui/material'
import { IPokemon } from '../pokemons/PokemonCard'
import useGame from '../../hooks/useGame'

export default function PokeWar ({ opponent }: { opponent: IPokemon }): JSX.Element | null {
  const { battle, ready, player } = useGame()

  const handleBattle = () => battle(opponent)

  if (!ready || player?.id === opponent.id) return null

  return (
    <IconButton aria-label='fight' onClick={handleBattle}>
      <Icon>rocket</Icon>
    </IconButton>
  )
}
