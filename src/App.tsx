import Footer from './components/Footer'
import Header from './components/Header'
import PokemonsList from './features/pokemons/PokemonsList'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <main className='container'>
        <PokemonsList />
      </main>
      <Footer />
    </>
  )
}

export default App
