<template>
  <div class="friends">
    <h2>Friends</h2>
  
    <div
            class="friends-total-single-item"
            v-for="item in friendsFriendsTotalObjects" :key="item.friendName">

      <div class="friends-total-portrait" :style="{ backgroundImage: 'url(' + getImageUrl(item.friendImg) + ')' }"></div>

      <div class="friends-total-content">
        <p>{{ item.friendName.toUpperCase() }}</p>
        <b-link :href="item.friendLink">{{ item.friendLink }}</b-link>
      </div>
  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Friends',
    data() {
      return {
        friendsFriendsTotalObjects: {}
      }
    },
    created() {
      this.getFriendsData({
        url: '/api/friends',
        method: 'get'
      })
    },
    methods: {
      getFriendsData(friendsObj) {
        this.$store.dispatch('getNormalData', friendsObj).then(res => {
          this.friendsFriendsTotalObjects = res
        }).catch(err => {
          console.log(err);
        })
      },
      getImageUrl(value) {
        return `/img/lightliangFriendsImg${value}.jpg`
      }
    }
  }
</script>

<style scoped lang = "scss">
  .friends {
    padding: 3.6rem 2rem;
  
    h2 {
      font-size: 2.5rem;
      font-family: Impact, serif;
      padding-bottom: 2rem;
    }
    
    .friends-total-single-item {
      margin: 1rem 2rem;
      display: flex;
      border-bottom: 1px #eee solid;
      
      .friends-total-portrait {
        flex: 1;
        width: 5rem;
        height: 5rem;
        border-radius: 1rem 1rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      
      .friends-total-content {
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        margin-left: 2rem;
        flex: 8;
        
        p {
          font-size: 1.8rem;
        }
        
        a {
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }
  }
</style>
