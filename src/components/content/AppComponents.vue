<template>
  <div>
    <div v-if="isShowOrNot">
      <headerbar :headerNavbarImg="appHeaderNavbarImg"/>
      <brandcrumb-navbar/>
      <div class="appBody">
        <keep-alive>
          <router-view class="appBody-left"/>
        </keep-alive>
        <aside-content  class="appBody-right" :asideTotalData="appAsideTotalData"/>
      </div>
      <footerbar :footerPoem="appFooterPoem"/>
      <aside-navbar/>
    </div>

    <router-view v-else/>
  </div>

</template>

<script>
  import Headerbar from '../common/header/Headerbar';
  import AsideNavbar from '../common/asideNav/AsideNavbar';
  import AsideContent from '../common/asideContent/AsideContent';
  import Footerbar from '../common/footer/Footerbar';
  import BrandcrumbNavbar from 'components/common/brandcrumb/BrandcrumbNavbar'
  
  export default {
    name: 'AppComponents',
    data() {
      return {
        appHeaderNavbarImg: '',
        appAsideTotalData: {},
        appFooterPoem: '',
        isShowOrNot: true
      }
    },
    components: {
      Headerbar,
      AsideNavbar,
      AsideContent,
      Footerbar,
      BrandcrumbNavbar
    },
    created() {
      this.getAppComponentsData({
        url: '/api/appcomponents',
        method: 'get'
      })
    },
    methods: {
      getAppComponentsData(appComponentsObj) {
        this.$store.dispatch('getNormalData', appComponentsObj).then(res => {
          this.appHeaderNavbarImg = res.appComponentsImg
          this.appAsideTotalData = res.appComponentsAside
          this.appFooterPoem = res.appComponentsPoem
        })
      }
    },
    watch: {
      $route: {
        handler: function() {
          // console.log(this.isShowOrNot);
          if ((/^\/404$/).exec(this.$route.fullPath)) {
            this.isShowOrNot = false
            // console.log(this.isShowOrNot);
          }
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style scoped lang = "scss">
  .appBody {
    width: 100%;
    display: flex;
    @media screen and (max-width: 720px){
      flex-flow: column;
    }
    
    .appBody-left {
      flex: 4;
    }
    
    .appBody-right {
      flex: 1;
    }
  }
</style>
