import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PokemonsList from './features/pokemons/PokemonsList'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<PokemonsList />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
