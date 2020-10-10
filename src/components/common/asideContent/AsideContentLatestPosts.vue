<template>
  <div class="aside-content-latest-posts">
    <div class="latestPostsTitle">
      <h2>Latest Posts</h2>
    </div>
    <div
            class="aside-single-item"
            @click="goToLatestPosts(item.latestPostsUrl)"
            v-for="item in latestPostsObjs" :key="item.latestPostsTitle">

        <div class="aside-content-portrait" :style="{ backgroundImage: `url(/img/lightliangNormalImg` + item.latestPostsImg + '.jpg)' }"></div>

        <div class="aside-content-content">
          <p>{{ item.latestPostsTitle }}</p>
          <span>{{ item.latestPostsTags | latestPostsTagsFilter }}</span>
        </div>
      
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'AsideContentLatestPosts',
    props: {
      latestPostsObjs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      goToLatestPosts(id) {
        this.$router.push({
          path: '/article',
          query: {
            id: id
          }
        })
      }
    },
    filters: {
      latestPostsTagsFilter(value) {
        if (!value) return ''
        const resFirst = value.substr(0, value.length - 1)
        return resFirst.replace('-', '、 ').toUpperCase()
      }
    }
  }
</script>

<style scoped lang = "scss">
  .aside-content-latest-posts {
    padding: 1rem 2rem 1rem 2rem;
    
    .latestPostsTitle {
      border-left: 3px rgba(0, 255, 0, 0.5) solid;
      padding-left: 1rem;
      border-radius: 5px 5px;
  
      & > h2 {
        font-size: 2.5rem;
        font-family: Impact, serif;
      }
    }
    
    .aside-single-item {
      display: flex;
      flex-flow: row;
      /*width: 100%;*/
      height: 6rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px #eee solid;
      cursor: pointer;
    
      .aside-content-portrait {
        margin: auto 1rem;
        overflow: hidden;
        width: 5rem;
        height: 5rem;
        flex: 1;
        border-radius: 1rem 1rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
    
      .aside-content-content {
        margin-right: 1rem;
        overflow: hidden;
        flex: 2;
        width: 100%;
        position: relative;
        
        span {
          font-size: 1rem;
          color: #ccc;
          font-style: italic;
        }
        
        p {
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 13.5rem;
          font-weight: bolder;
          margin-top: .5rem;
          font-size: 1.5rem;
        }
      }
    }
  }
  
</style>
