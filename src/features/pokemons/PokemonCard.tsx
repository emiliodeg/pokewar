import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PokemonImage from './PokemonImage'
import { Icon, Tooltip } from '@mui/material'
import useGame from '../../hooks/useGame'

export interface IPokemon {
  id: number
  name: string
  height: number
  base_experience: number
}

export default function PokemonCard ({ pokemon }: { pokemon: IPokemon }) {
  const { player, setPlayer, addPlayer } = useGame()

  const title =
    pokemon.id === player?.id ? 'unselect your player' : 'select your player'

  const handleSetPlayer = () => {
    if (pokemon.id === player?.id) {
      setPlayer(null)
    } else {
      setPlayer(pokemon)
    }
  }

  return (
    <Card>
      <CardHeader
        avatar={<PokemonImage id={pokemon.id} name={pokemon.name} />}
        title={pokemon.name}
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Experience: {pokemon.base_experience} <br />
          Height: {pokemon.height}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={title}>
          <IconButton
            aria-label={title}
            color={pokemon.id === player?.id ? 'primary' : 'default'}
            onClick={handleSetPlayer}
          >
            <Icon>videogame_asset</Icon>
          </IconButton>
        </Tooltip>

        <Tooltip title='add to opponents'>
          <IconButton
            aria-label='add to opponents'
            onClick={() => addPlayer(pokemon)}
          >
            <Icon>sports_kabaddi</Icon>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
