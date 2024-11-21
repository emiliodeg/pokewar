import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import PokemonImage from '../pokemons/PokemonImage'
import PokeFight from './PokeFight'
import useGame from '../../hooks/useGame'

export default function PokeWar () {
  const { player, players: opponents, ranking } = useGame()

  if (!player || opponents.length === 0)
    return <p>Please select a player and opponents</p>

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Pokemon</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Experience</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {ranking.map(pokemon => (
            <TableRow
              key={pokemon.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <PokemonImage id={pokemon.id} name={pokemon.name} />
              </TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell align='right'>{pokemon.base_experience}</TableCell>
              <TableCell>
                <PokeFight opponent={pokemon} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
