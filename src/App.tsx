import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import React from 'react'
import useGame, { IPlayerContext } from './hooks/useGame'

export const GameContext = React.createContext<IPlayerContext>(
  {} as IPlayerContext
)

function App (): JSX.Element {
  const gameContext = useGame()

  return (
    <>
      <GameContext.Provider value={gameContext}>
        <Header />
        <main className='container'>
          <Outlet />
        </main>
        <Footer />
      </GameContext.Provider>
    </>
  )
}

export default App
