<template>
  <div class="article">
    <article-content :articleContents="articleArticleContents"/>
    <reply-bar :newReplyObjs="articleNewReplyObjs"/>
  </div>
</template>

<script>
  import ArticleContent from 'components/common/articleContent/ArticleContent'
  import ReplyBar from 'components/common/reply/ReplyBar'
  
  export default {
    name: 'Article',
    data() {
      return {
        articleNewReplyObjs: [],
        articleArticleContents: {}
      }
    },
    components: {
      ReplyBar,
      ArticleContent
    },
    created() {
      this.getArticleData({
        url: '/api/article',
        method: 'get',
        params: {
          id: this.$route.query.id
        }
      })
    },
    methods: {
      getArticleData(articleObj) {
        this.$store.dispatch('getNormalData', articleObj).then(res => {
          this.articleNewReplyObjs = res.articleReplyObjs
          this.articleArticleContents = res.articleArticle
        })
      }
    },
    watch: {
      $route: {
        handler: function() {
          this.getArticleData({
            url: '/api/article',
            method: 'get',
            params: {
              id: this.$route.query.id
            }
          })
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  .article {
    overflow: auto;
    padding: 3.6rem 2rem;
  }
</style>
