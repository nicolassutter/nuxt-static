<template>
  <main class="markdown-body container mx-auto">
    <nuxt-content :document="page" />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(`posts-md/${params.slug}`).fetch()

    return {
      page
    }
  }
}
</script>
