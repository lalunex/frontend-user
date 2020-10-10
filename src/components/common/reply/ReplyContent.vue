<template>
  <div class="reply-content" v-show="isShow">
    <h2>Comment</h2>
    
    <div
            class="reply-single-item"
            v-for="item in replyContentObjs" :key="item.replyContentName">
      
        <div class="reply-content-portrait" :style="{ backgroundImage: 'url(' + getImageUrl(item.replyContentImg) + ')' }">
        </div>
      
        <div class="reply-content-content">
          <h5>{{ item.replyContentName }}</h5>
          <span>{{ item.replyContentDate | dateFilter }}</span>
          <p>{{ item.replyContentContent }}</p>
        </div>
      
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'ReplyContent',
    data() {
      return {
        isShow: false
      }
    },
    props: {
      replyContentObjs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      getImageUrl(value) {
        return `/img/lightliangCommentsImg${value}.jpg`
      }
    },
    filters: {
      dateFilter(value) {
        if (!value) return ''
        if ((/年/).test(value)) return value
        const dateee = new Date(value).toJSON();
        const date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, '日 ').replace(/\.[\d]{3}Z/, '')
        return date.replace(/-/, '年').replace(/-/, '月')
      }
    },
    watch: {
      replyContentObjs: {
        handler: function showOrNot() {
          this.isShow = this.replyContentObjs.length !== 0;
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .reply-content {
    
    & > h2 {
      font-family: Impact, serif;
    }
    .reply-single-item {
      margin: 1.5rem 2rem;
      display: flex;
      
      .reply-content-portrait {
        flex: 1;
        width: 5rem;
        height: 5rem;
        border-radius: 5rem 5rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      
      .reply-content-content {
        margin-left: 2rem;
        position: relative;
        flex: 8;
        
        span {
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          color: #ccc;
        }
        
        p {
          text-indent: 1rem;
          word-wrap : break-word;
        }
      }
    }
  }
</style>
