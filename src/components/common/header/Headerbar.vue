<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" type="dark" variant="dark" fixed="top" >
    
      <b-navbar-brand to="/"><span class="blog-name">未被战胜</span>&nbsp;的虫子</b-navbar-brand>
    
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav class="ml-auto" align="center" >
          
          <div class="nav-search" @keyup.enter="stopEnter">
            <b-form-input size="sm" class="mr-sm-2 headerInput" v-model="headerSearchInput" placeholder="Search"></b-form-input>
            <b-button id="popover-target" size="sm" tabindex="0" class="headerButton mr-sm-2" type="button" @click="headerSearchSubmit">Search</b-button>

            <b-popover target="popover-target" triggers="click blur" delay="50" placement="bottomright">
              <template v-slot:title>提示</template>
              {{ headerSearchInfo }}
            </b-popover>
          </div>
          
          <b-nav-item to="/friends" class="nav-people" right>Friends</b-nav-item>
  
          <b-nav-item to="/about" class="nav-about" right>About</b-nav-item>
  
          <b-nav-item to="/contact" class="nav-contact" right>Contact</b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="headerbar-fill" :style="{ height: fillHeight + 'px' }"></div>
    <headerbar-img :navbarImg="headerNavbarImg"/>
  </div>
</template>

<script>
  import HeaderbarImg from './HeaderbarImg'
  
  export default {
    name: 'Headerbar',
    components: {
      HeaderbarImg
    },
    props: {
      headerNavbarImg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        fillHeight: 0,
        headerSearchInput: '',
        headerSearchInfo: ''
      }
    },
    methods: {
      headerSearchSubmit() {
        if (this.headerSearchInput === '') {
          this.headerSearchInfo = '请输入内容'
        } else {
          this.$router.push({
            path: '/search',
            query: {
              q: this.headerSearchInput
            }
          })
          this.headerSearchInput = ''
        }
      },
      stopEnter() {
        if (this.headerSearchInput) {
          this.$router.push({
            path: '/search',
            query: {
              q: this.headerSearchInput
            }
          })
          this.headerSearchInput = ''
        }
      }
    },
    mounted() {
      this.fillHeight = document.querySelector('#navbar').offsetHeight
    }
  }
</script>

<style scoped lang = "scss">
  #navbar {
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, .5);
  }
  
  .blog-name {
    font-size: 2.5rem;
    font-family: Mingliub, serif;
    margin-left: 20%;
    margin-right: .25rem;
  }
  
  .nav-search, .nav-people, .nav-about, .nav-contact {
    margin-left: 3rem;
    margin-right: 1rem;
  }
  
  .headerbar-fill {
    z-index: -10;
    width: 100%;
  }

  .nav-search {
    display: flex;

    .headerInput {
      margin: auto 0;
      flex: 5;
    }

    .headerButton {
      flex: 1;
    }
  }
</style>
