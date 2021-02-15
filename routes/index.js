import axios from 'axios'

export const kantoRoutes = async () => {
  /**
   * Pokemons de Kanto
   */
  const { data: { pokemon_entries: pokemons } } = await axios.get('https://pokeapi.co/api/v2/pokedex/kanto')

  /**
   * On retourne un Array d'objects { route, title }
   */
  return pokemons.map(({ pokemon_species: pokemon }) => {
    return {
      route: `/pokemon/${pokemon.name}`,
      title: pokemon.name
    }
  })
}
