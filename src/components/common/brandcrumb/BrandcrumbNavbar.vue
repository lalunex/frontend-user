<template>
  <div class="brandcrumb-navbar" v-show="isShow">
    <b-breadcrumb>
      <b-breadcrumb-item to="/">
        <i class="el-icon-s-home"></i>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>{{ getBreadcrumb }}</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'BrandcrumbNavbar',
    data() {
      return {
        isShow: true,
        getBreadcrumb: ''
      }
    },
    watch: {
      $route: {
        handler: function() {
          const regExp = /^\/(\w+)(.*?)?/igs
          regExp.exec(this.$route.fullPath)
          if (RegExp.$1 === 'home') {
            this.isShow = false
          } else {
            this.isShow = true
            this.getBreadcrumb = RegExp.$1.slice(0, 1).toUpperCase() + RegExp.$1.slice(1)
          }
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  .brandcrumb-navbar {
    opacity: 0.6;
    margin: 2rem 2rem;
    font-size: 1.5rem;
    font-family: Mingliub, serif;
    font-weight: bolder;
    
    & > ol {
      border-radius: 10px 10px;
  
      transition: all 0.5s ease-in-out;
      box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.3);
  
      &:hover {
        transition: all 0.5s ease-in-out;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.5);
      }
      
      & > li a {
        text-decoration: none;
        opacity: 0.8;
      }
    }
  }
</style>
