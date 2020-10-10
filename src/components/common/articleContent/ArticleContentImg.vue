<template>
  <el-image
          :src="srcUrl"
          class="article-content-img"
          :preview-src-list="srcList">
  </el-image>
</template>

<script>
  export default {
    name: 'ArticleContentImg',
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    computed: {
      srcList() {
        return [
          `/img/lightliangHeaderImg${this.url}.jpg`
        ]
      },
      srcUrl() {
        return `/img/lightliangHeaderImg${this.url}.jpg`
      }
    }
  }
</script>

<style scoped lang = "scss">
  .article-content-img {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
