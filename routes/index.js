import axios from 'axios'

export const routes = async () => {
  /**
   * Pokemons de Kanto
   */
  const { data: { pokemon_entries: pokemons } } = await axios.get('https://pokeapi.co/api/v2/pokedex/kanto')

  return pokemons.map(({ pokemon_species: pokemon }) => {
    return {
      route: `/pokemon/${pokemon.name}`
    }
  })
}
