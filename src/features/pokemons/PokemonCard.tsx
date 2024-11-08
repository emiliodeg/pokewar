import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PokemonImage from './PokemonImage'
import { Icon, Tooltip } from '@mui/material'
import { PokeAPI } from 'pokeapi-types'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)'
      }
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)'
      }
    }
  ]
}))

export default function PokemonCard ({
  pokemon
}: {
  pokemon: PokeAPI.NamedAPIResource
}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardHeader
        avatar={<PokemonImage pokemon={pokemon} />}
        action={
          <IconButton aria-label='settings'>
            <Icon>more_vert</Icon>
          </IconButton>
        }
        title={pokemon.name}
        subheader='September 14, 2016'
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title='select your player'>
          <IconButton aria-label='select your player'>
            <Icon>videogame_asset</Icon>
          </IconButton>
        </Tooltip>

        <Tooltip title='add to opponents'>
          <IconButton aria-label='add to opponents'>
            <Icon>sports_kabaddi</Icon>
          </IconButton>
        </Tooltip>
      </CardActions>      
    </Card>
  )
}
