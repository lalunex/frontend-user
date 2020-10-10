<template>
  <div class="search">
    <h2 id="search-title">Search Results</h2>
    <cardbar :cardbarWaterFallCardObjs="searchCardbarWaterFallCardObjs"  :cardbarWaterFallPageIsDone="searchPageIsDone"/>
  </div>
</template>

<script>
  import Cardbar from 'components/common/card/Cardbar'
  
  export default {
    name: 'Search',
    data() {
      return {
        searchCardbarWaterFallCardObjs: [],
        searchPageNum: 1,
        searchPageIsDone: false
      }
    },
    components: {
      Cardbar
    },
    methods: {
      getSearchData(searchObj) {
        this.$store.dispatch('getNormalData', searchObj).then(res => {
          this.searchCardbarWaterFallCardObjs = res.searchCards
          this.searchPageNum = res.searchPages
          this.searchPageIsDone = res.isDone
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created() {
      this.getSearchData({
        url: '/api/search',
        method: 'get',
        params: {
          t: this.$route.query.q,
          p: 1
        }
      })
    },
    watch: {
      $route: {
        handler: function() {
          const regExp = /^\/search\?(.*?)/igs
          if (regExp.test(this.$route.fullPath)) {
            this.getSearchData({
              url: '/api/search',
              method: 'get',
              params: {
                t: this.$route.query.q,
                p: 1
              }
            })
            this.searchPageNum = 1
          }
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  
  .search {
    padding: 3.6rem 2rem;
    & > h2 {
      font-size: 2.5rem;
      font-family: Impact, serif;
      padding-bottom: 2rem;
    }
  }
</style>
