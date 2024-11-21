import { useEffect, useState } from 'react'
import { IPokemon } from '../features/pokemons/PokemonCard'

export interface IPlayerContext {
  player: IPokemon | null
  players: IPokemon[]
  ranking: IPokemon[]
  ready: boolean
  setPlayer: React.Dispatch<React.SetStateAction<IPokemon | null>>
  addPlayer: (pokemon: IPokemon) => void
  setPlayers: React.Dispatch<React.SetStateAction<IPokemon[]>>
  removePlayer: (pokemon: IPokemon) => void
  battle: (opponent: IPokemon) => void
}

export default function useGame (): IPlayerContext {
  const [player, setPlayer] = useState<IPokemon | null>(null)
  const [players, setPlayers] = useState<IPokemon[]>([])
  const [ranking, setRanking] = useState<IPokemon[]>([])
  const [ready, setReady] = useState<boolean>(false)

  const updatePlayer = (pokemon: IPokemon) => {
    setPlayers(players.map(o => (o.id === pokemon.id ? pokemon : o)))
  }

  const battle = (opponent: IPokemon): void => {
    if (!player) return

    const R = Math.random()

    // your player win
    if (R >= 0.5) {
      player.base_experience = Math.ceil(
        (player.base_experience + opponent.base_experience) * R
      )
      opponent.base_experience = Math.floor(opponent.base_experience * R)
      updatePlayer(player)
      updatePlayer(opponent)
      return
    }

    player.base_experience = Math.floor(player.base_experience * R) || 1
    opponent.base_experience = Math.ceil(opponent.base_experience / R)
    updatePlayer(player)
    updatePlayer(opponent)
  }

  useEffect(() => {
    setReady(Boolean(player && players.length))

    if (player && players.length) {
      setRanking(
        [...players, player].sort(
          (a, b) => b.base_experience - a.base_experience
        )
      )
    }
  }, [player, players])

  const addPlayer = (pokemon: IPokemon) => {
    if (players.find(o => o.id === pokemon.id)) return

    setPlayers([...players, pokemon])
  }

  const removePlayer = (pokemon: IPokemon) => {
    setPlayers(players.filter(o => o.id !== pokemon.id))
  }

  return {
    player,
    players: players,
    ranking,
    ready,
    battle,
    addPlayer,
    removePlayer,
    setPlayer,
    setPlayers
  }
}
