<template>
  <div class="article-content-tags">
    <h4>Tags In</h4>
    
    <div class="article-content-tags-button">
      <b-button variant="info"
                v-for="value in articleContentTagsArray"
                :key="value"
                disabled>{{ value }}</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleContentTags',
    props: {
      articleContentTagsArray: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .article-content-tags {
    margin: 1rem 0;
    border-bottom: 1px #ccc solid;
    
    h4 {
      font-family: Impact, serif;
    }
    
    .article-content-tags-button {
      margin: 2rem 0;
      
      button {
        border-radius: 5px 5px;
        margin: 0.5rem 1rem;
      }
    }
  }
</style>
