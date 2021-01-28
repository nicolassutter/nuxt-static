<template>
  <section class="py-12">
    <h1 class="big-title text-center">
      Génération Statique Nuxt
    </h1>
    <h2 class="medium-title text-green-500 text-center mt-10">
      Pour des sites rapides et dynamiques
    </h2>

    <section class="posts flex space-x-20 justify-center">
      <div class="posts">
        <h3 class="small-title text-center mt-20 mb-3">
          Posts
        </h3>

        <ul class="mx-auto">
          <li>
            <nuxt-link
              class="text-green-500 capitalize"
              :to="`/posts/article`">
              Article
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="posts-md">
        <h3 class="small-title text-center mt-20 mb-3">
          Posts MD
        </h3>

        <ul class="mx-auto">
          <li
            v-for="(post, index) in postsMD"
            :key="`post-${index}`">
            <nuxt-link
              class="text-green-500 capitalize"
              :to="`${post.path}`">
              {{ post.slug }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="posts-md">
        <h3 class="small-title text-center mt-20 mb-3">
          Pages dynamiques
        </h3>

        <ul class="mx-auto">
          <li
            v-for="(pokemon, index) in routes"
            :key="`pokemon-${index}`">
            <nuxt-link
              class="text-green-500 capitalize"
              :to="`${pokemon.route}`">
              {{ pokemon.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import { routes } from '@/routes/index'

export default {
  async asyncData ({ $content }) {
    const postsMD = await $content('posts-md').fetch()
    const _routes = await routes()

    return { postsMD, routes: _routes }
  }
}
</script>
