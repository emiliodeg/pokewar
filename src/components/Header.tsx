import { Link } from 'react-router-dom'
import useGame from '../hooks/useGame'

export default function Header (): JSX.Element {
  const { player, players: opponents, ready } = useGame()

  return (
    <>
      <header>
        <h1><Link to='/'>PokeWar</Link></h1>

        {player && <p>Player: {player.name}</p>}

        {opponents.length > 0 && <p>Opponents: {opponents.length}</p>}

        <Link to='/play' className={ready ? 'btn btn-primary' : 'btn btn-primary disabled'}>
          Play
        </Link>
      </header>
    </>
  )
}
