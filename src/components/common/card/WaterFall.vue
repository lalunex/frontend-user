<template>
  <div class="cardbar" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
    <card v-for="(item, index) in waterFallCardObjs"
          :key="item.cardTitle | keyFilter"
          :class="'card-' + index"
          :imgId="index"
          :cardObj="item"
          class="grid-item"/>
  </div>
</template>

<script>
  import Card from './Card'
  // import Masonry from 'masonry-layout'
  import imagesloaded from 'imagesloaded';
  import infiniteScroll from 'vue-infinite-scroll'
  // import Vue from 'vue'
  
  Vue.use(infiniteScroll)
  
  export default {
    name: 'WaterFall',
    data() {
      return {
        busy: false,
        nowPage: 1
      }
    },
    components: {
      Card
    },
    props: {
      waterFallCardObjs: {
        type: Array,
        default() {
          return [];
        }
      },
      waterFallCardIsDone: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      loadMore() {
        if (!this.waterFallCardIsDone) {
          this.busy = true
          const regExp = /^\/(.*)\?.*/
          let result = ''
          if (regExp.exec(this.$route.fullPath)) {
            result = RegExp.$1
          } else {
            result = 'home'
          }
          this.$store.dispatch('getNormalData', {
            url: '/api/' + result,
            method: 'get',
            params: {
              t: this.$route.query.t || this.$route.query.q || 'learning',
              p: this.nowPage + 1
            }
          }).then(res => {
            this.waterFallCardObjs = this.waterFallCardObjs.concat(res.homeCards || res.searchCards)
            this.waterFallCardIsDone = res.isDone
            this.nowPage++
            this.busy = false
          }).catch(err => {
            console.log(err);
          })
        }
      }
    },
    filters: {
      keyFilter(value) {
        return value.substr(0, 2)
      }
    },
    updated() {
      const msnry = new Masonry('.cardbar', {
        itemSelector: '.grid-item',
        horizontalOrder: false,
        fitWidth: true,
        transitionDuration: '0.8',
        stagger: 30,
        resize: true,
        initLayout: true
      });
      imagesloaded(document.querySelectorAll('.grid-item'), { sanitize: true }, () => {
        msnry.layout();
      })
    },
    watch: {
      $route: {
        handler: function() {
          this.nowPage = 1
        }
      },
      // 深度观察监听
      deep: true
    }
  }
</script>

<style scoped lang = "scss">
  .grid-item {
    width: 20rem;
    margin: 0 1.5rem 3rem 1.5rem;
  }
  
  .cardbar {
    margin: 0 2%;
    @media screen and (max-width: 576px) {
      margin: 0 auto
    }
    .card {
      transition: all 0.5s ease-in-out;
      box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.3);
      
      &:hover {
        transition: all 0.5s ease-in-out;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.5);
      }
    }
  }
  
</style>
