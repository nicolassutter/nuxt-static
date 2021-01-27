<template>
  <main class="markdown-body container mx-auto">
    <component :is="blogPostContent" />
  </main>
</template>

<script>
export default {
  asyncData ({ app }) {
    return {
      allBlogPosts: app.$markdown.content
    }
  },

  data () {
    return {
      blogPostContent: null
    }
  },

  created () {
    this.blogPostContent = () => this.$markdown.loadContent()
  }
}
</script>
