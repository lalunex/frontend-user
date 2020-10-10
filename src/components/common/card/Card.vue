<template>
  <div class="card">
    <b-card
            :title="cardObj.cardTitle"
            tag="article"
            class="mb-2"
    >
  
      <b-card-img  class="card-img"
                        blank-src="null"
                        :src="getImageUrl()"
                        alt="Image" img-top></b-card-img>
      
      <div class="card-tag"><h6>{{ cardObj.cardTags | tagsFilter }}</h6></div>
      
      <el-divider content-position="right"><i class="card-chat el-icon-chat-line-round">&nbsp;{{ cardObj.cardMessage }}</i></el-divider>
      
      <b-button :to="cardObj.cardUrl | cardUrlFilter" variant="primary">前往</b-button>
      <template v-slot:footer>
        <small class="text-muted card-date">更新于 {{ cardObj.cardDate | dateFilter }}</small>
      </template>
    </b-card>
  </div>
</template>

<script>
  // import { formatDate } from 'common/utils.js'

  export default {
    name: 'Card',
    props: {
      cardObj: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      getImageUrl() {
        return `/img/lightliangNormalImg${this.cardObj.cardImgId}.jpg`
      }
    },
    filters: {
      tagsFilter(value) {
        if (!value) return ''
        const resFirst = value.substr(0, value.length - 1)
        return resFirst.replace('-', '、 ').toUpperCase()
      },
      dateFilter(value) {
        if (!value) return ''
        const dateee = new Date(value).toJSON();
        const date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, '日 ').replace(/\.[\d]{3}Z/, '')
        return date.replace(/-/, '年').replace(/-/, '月')
      },
      cardUrlFilter(value) {
        return `/article?id=${value}`
      }
    }
  }
</script>

<style scoped lang = "scss">
  .card{

    .card-tag {
      padding-top: 2rem;
      font-weight: bold;
      font-style: italic;
    }
    
  }
</style>
