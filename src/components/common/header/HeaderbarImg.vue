<template>
  <div class="navbar-img">
    <img :src="getImageUrl()" alt = "Image">
    <div>{{ pageTitle }}</div>
  </div>
  
</template>

<script>
  export default {
    name: 'HeaderbarImg',
    data() {
      return {
        pageTitle: 'Home'
      }
    },
    props: {
      navbarImg: {
        type: String,
        // 这里需要默认图片
        default: ''
      }
    },
    methods: {
      getImageUrl() {
        return `/img/lightliangHeaderImg${this.navbarImg}.jpg`
      }
    },
    watch: {
      $route: {
        handler: function() {
          const regExp = /^\/(\w+)(.*?)?/igs
          regExp.exec(this.$route.fullPath)
          this.pageTitle = RegExp.$1.slice(0, 1).toUpperCase() + RegExp.$1.slice(1)
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  .navbar-img {
    position: relative;
    width: 100%;
    overflow: hidden;
    
    img {
      display:block;
      width: 100%;
    }
    
    div {
      color: rgba(240,255,255, 0.5);
      text-shadow: 0 0 5px rgba(240,248,255, 0.3);
      font-family: Impact, serif;
      font-size: 6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
