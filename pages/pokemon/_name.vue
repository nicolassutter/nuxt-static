<template>
  <main class="max-w-xl mx-auto pt-12">
    <div class="flex items-center space-x-10">
      <div class="img-container bg-gray-700 rounded-full h-26 w-26 flex items-center justify-center">
        <img
          :src="require(`~/assets/images/pokemons/${(pokemon && pokemon.id) || ''}.png`)"
          class="w-full"
          :alt="pokemon.name">
      </div>
      <section>
        <p class="big-title capitalize">
          {{ pokemon.name }}
        </p>
      </section>
    </div>

    <div class="entries mt-12">
      <p
        v-for="(text, index) in textEntries"
        :key="'text-' + index"
        class="pb-5">
        {{ text.flavor_text }}
      </p>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pokemon',

  async asyncData ({ params, redirect }) {
    try {
      const { data: pokemon } = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + params.name)
      return { pokemon }
    } catch (error) {
      redirect('/')
    }
  },

  data () {
    return {
      pokemon: {}
    }
  },

  head () {
    return {
      title: this.pokemon.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) || 'A pokemon'
    }
  },

  computed: {
    textEntries () {
      return !this.pokemon ? [] : this.pokemon.flavor_text_entries.filter(entry => entry.language.name === 'fr')
    }
  }
}
</script>
