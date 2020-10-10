<template>
  <div class="article-content">
    <h2>Blog Post</h2>
    
    <div class="article-content-total">
      <article-content-img :url="articleContents.articleContentImg"/>
      <article-content-mainbody :articleContentMainbodys="articleContents.articleContentMainbody"/>
      <article-content-tags :articleContentTagsArray="articleContents.articleContentTags"/>
    </div>
  </div>
</template>

<script>
  import ArticleContentImg from './ArticleContentImg';
  import ArticleContentTags from './ArticleContentTags';
  import ArticleContentMainbody from './ArticleContentMainbody';
  
  export default {
    name: 'ArticleContent',
    components: {
      ArticleContentImg,
      ArticleContentTags,
      ArticleContentMainbody
    },
    props: {
      articleContents: {
        type: Object,
        default() {
          return {
            articleContentImg: '',
            articleContentMainbody: {},
            articleContentTags: []
          }
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .article-content {
    overflow: auto;
    
    h2 {
      font-size: 2.5rem;
      font-family: Impact, serif;
      padding-bottom: 2rem;
    }
    
    .article-content-total {
      margin: 1rem 2rem;
    }
  }
</style>
