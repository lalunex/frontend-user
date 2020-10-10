<template>
  <div class="aside-content-advertisements">
    <div class="advertisementsTitle">
      <h2>Advertisements</h2>
    </div>
    <b-carousel
            id="carousel-1"
            :interval="6000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            fade
    >
      
      <b-carousel-slide
              class="aside-carousel-item"
              :text="item.text"
              :img-src="item.imgSrc | imgSrcFilter"
              @click="getChangeUrl(item.url)"
              v-for="item in advertisesements"
              :key="item.text.slice(0, 5)"
      ></b-carousel-slide>
      
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'AsideContentAdvertisements',
    props: {
      advertisesements: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      imgSrcFilter(value) {
        return `/img/lightliangAdvertisementImg${value}.jpg`
      }
    },
    methods: {
      getChangeUrl(url) {
        if (url) {
          window.location.href = url;
        } else {
          window.location.reload()
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .aside-content-advertisements {
    padding: 1rem 2rem 1rem 2rem;
    
    .advertisementsTitle {
      margin-bottom: 2rem;
      border-left: 3px rgba(0, 255, 0, 0.5) solid;
      padding-left: 1rem;
      border-radius: 5px 5px;
  
      & > h2 {
        font-size: 2.5rem;
        font-family: Impact, serif;
      }
    }
  
    /*@media screen and (max-width: 1300px) {*/
    /*  display: none;*/
    /*}*/
    
    .aside-carousel-item {
    
    }
  }
</style>
