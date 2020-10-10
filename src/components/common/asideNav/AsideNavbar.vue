<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse"
           :unique-opened=true :router=true
           v-if="isShow"
           >
    <el-menu-item  @click="toTop">
      <i class="el-icon-top"></i>
      <span slot="title">返回顶部</span>
    </el-menu-item>
    
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-guide"></i>
        <span slot="title">分类</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="toSomewhere('home'),toTop()"><i class="el-icon-house"></i>主页</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item @click="toSomewhere('friends'),toTop()"><i class="el-icon-user"></i>盆友们</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item @click="toSomewhere('about'),toTop()"><i class="el-icon-bangzhu"></i>关于</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item @click="toSomewhere('contact'),toTop()"><i class="el-icon-phone-outline"></i>联系我们</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
    <el-submenu  index="2">
      <template slot="title">
        <i class="el-icon-date"></i>
        <span slot="title">日历</span>
      </template>
      <el-menu-item-group>
        <span slot="title">查看你的日程哦</span>
        <calendar/>
      </el-menu-item-group>
    </el-submenu>
    
    <el-menu-item @click="toBottom">
      <i class="el-icon-bottom"></i>
      <span slot="title">联系站长</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import Calendar from './Calendar'
  
  export default {
    name: 'AsideNavbar',
    components: {
      Calendar
    },
    data() {
      return {
        isCollapse: true,
        isShow: false
      }
    },
    props: {
      navbarHeight: {
        type: String,
        default: ''
      }
    },
    methods: {
      toTop() {
        let timer;
        document.documentElement.scrollTop -= 50;
        if (document.documentElement.scrollTop > 0) {
          timer = setTimeout(() => this.toTop(50), 16);
        } else {
          clearTimeout(timer);
        }
      },
      toBottom() {
        let timer;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const height = scrollHeight - clientHeight;
        document.documentElement.scrollTop += 50;
        if (document.documentElement.scrollTop < height) {
          timer = setTimeout(() => this.toBottom(50), 16);
        } else {
          clearTimeout(timer);
        }
      },
      toSomewhere(value) {
        this.$router.push({
          path: '/' + value
        })
      },
      scrollIsShow() {
        const clientHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 设备/屏幕高度
        const scrollObj = document.querySelector('.navbar-img'); // 滚动区域
        const imgHeight = scrollObj.offsetTop + scrollObj.offsetHeight;
        if (clientHeight > imgHeight) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollIsShow, true)
    }
  }
</script>

<style scoped lang = "scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  
  .el-menu-vertical-demo {
    transition: all 0.1s ease-out;
    z-index: 1000;
    
    @media screen and (max-width: 576px) {
      & {
        display: none;
      }
    }
    position: fixed;
    right: 2.5rem;
    top: 30rem;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
</style>
