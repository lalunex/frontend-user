<template>
  <div class="aside-content-tags">
    <div class="tagsTitle">
      <h2>Tags</h2>
    </div>
  
    <b-button variant="outline-info"
              v-for="item in tagsObjs"
              :key="item"
              @click="getSearchCurrent(item)">{{ item }}</b-button>
  </div>
</template>

<script>
  export default {
    name: 'AsideContentTags',
    props: {
      tagsObjs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      getSearchCurrent(value) {
        this.$router.push({
          path: '/search',
          query: {
            q: value
          }
        })
      }
    }
  }
</script>

<style scoped lang = "scss">
  .isCurrent {
    color: #eeeeee;
    background-color: #17a2b8;
  }
  
  .aside-content-tags {
    padding: 1rem 2rem 1rem 2rem;
  
    .tagsTitle {
      border-left: 3px rgba(0, 255, 0, 0.5) solid;
      padding-left: 1rem;
      border-radius: 5px 5px;
  
      & > h2 {
        font-size: 2.5rem;
        font-family: Impact, serif;
      }
    }
    
    button {
      margin: 1rem;
      border-radius: 10px 10px;
    }
  }
</style>
