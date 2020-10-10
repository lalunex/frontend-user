<template>
  <div class="navbar" id="article-navbar">
    <div>
      <b-button v-for="(value, index) in buttonValue"
                size="lg"
                :id= '"button-" + index'
                variant="outline-info"
                :class="{ currentClass: currentIndex === index }"
                :key="value"
                to=""
                @click="getCurrent(index, value)">
        {{ value }}
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        currentIndex: 0,
        buttonValue: ['Learning', 'Foods & Culture', 'Life']
      }
    },
    methods: {
      getCurrent(index, value) {
        this.currentIndex = index;
        if (value === 'Foods & Culture') {
          this.$router.push({
            path: '/home',
            query: {
              t: 'foodsandculture'
            }
          })
        } else if (value === 'Learning') {
          this.$router.push({
            path: '/home',
            query: {
              t: 'learning'
            }
          })
        } else {
          this.$router.push({
            path: '/home',
            query: {
              t: 'life'
            }
          })
        }
      }
    },
    created() {
      if (this.$route.query.t) {
        if (this.$route.query.t === 'life') {
          this.currentIndex = this.buttonValue.indexOf('Life');
        } else if (this.$route.query.t === 'learning') {
          this.currentIndex = this.buttonValue.indexOf('Learning');
        } else {
          this.currentIndex = this.buttonValue.indexOf('Foods & Culture');
        }
      } else {
        this.currentIndex = this.buttonValue.indexOf('Learning');
      }
    }
  }
</script>

<style scoped lang = "scss">
  .currentClass {
    background: #17a2b8;
    color: white;
  }
  
  .navbar > div {
    width: 100%;
    padding: 3rem 25%;
    display: flex;
    flex-flow: row wrap;

    @media screen and (max-width: 576px) {
      & {
        margin: 0;
      }
    }
    
    [id |= "button"] {
      border-radius: 30px;
      margin: 1rem;
      flex: 1
    }
  }
</style>
