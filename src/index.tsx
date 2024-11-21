import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cacheExchange, Client, fetchExchange, Provider } from 'urql'
import PokemonsList from './features/pokemons/PokemonsList'
import PokeWar from './features/play/PokeWar'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '', element: <PokemonsList /> },
      {
        path: 'play',
        element: <PokeWar />
      }
    ]
  }
])

const graphQLClient = new Client({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
  exchanges: [cacheExchange, fetchExchange]
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={graphQLClient}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
