<template>
  <div class="home">
    <navbar/>
    <cardbar :cardbarWaterFallCardObjs="homeCardbarWaterFallCardObjs" :cardbarWaterFallPageIsDone="homePageIsDone"/>
  </div>
</template>

<script>
  import Navbar from 'components/common/nav/Navbar'
  import Cardbar from 'components/common/card/Cardbar'
  
  export default {
    name: 'Home',
    data() {
      return {
        // 需要卡片的内容, 和边栏的内容
        homeCardbarWaterFallCardObjs: [],
        homePageNum: 1,
        homePageIsDone: false
      }
    },
    components: {
      Navbar,
      Cardbar
    },
    methods: {
      getHomeData(homeObj) {
        this.$store.dispatch('getNormalData', homeObj).then(res => {
          this.homeCardbarWaterFallCardObjs = res.homeCards
          this.homePageNum = res.homePages
          this.homePageIsDone = res.isDone
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created() {
      this.getHomeData({
        url: '/api/home',
        method: 'get',
        params: {
          t: this.$route.query.t || 'learning',
          p: 1
        }
      })
    },
    watch: {
      $route: {
        handler: function() {
          const regExp = /^\/home\?(.*?)/igs
          if (regExp.test(this.$route.fullPath)) {
            this.getHomeData({
              url: '/api/home',
              method: 'get',
              params: {
                t: this.$route.query.t,
                p: 1
              }
            })
            this.homePageNum = 1
          }
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  /*.home {*/
  /*  position: relative;*/
  /*}*/
</style>
