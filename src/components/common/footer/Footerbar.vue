<template>
  <b-jumbotron class="footer-bar" header="靓亮" :lead="footerPoem">
  
    <hr class="my-4">
    <p>谢谢各位客官赏脸观看我的网站</p>
    <p>如果站内内容有任何内容侵犯了您的权益，请及时联系本人，并且我会在第一时间内改正过来</p>
  
    <hr class="my-4">
    <b-button variant="primary" href="#">联系站长（1213304625@qq.com）</b-button>
    
    <hr class="my-4">
    <p style="text-align: center" @click="goToRecord">Copyright © 2020 | 蜀ICP备20020189号-1 | <img src = "/img/lightliangBeian.jpg" alt = ""> 川公网安备 51132202000122号</p>
    
  </b-jumbotron>
</template>

<script>
  export default {
    name: 'Footerbar',
    props: {
      footerPoem: {
        type: String,
        default: ''
      }
    },
    methods: {
      goToRecord() {
        window.location.href = 'http://www.beian.miit.gov.cn/'
      }
    }
  }
</script>

<style scoped lang = "scss">
  .footer-bar {
    clear: both;
    position: relative;
    bottom: 0;
    left: 0;
    padding: 1rem 5rem;
    margin-bottom: 0;
    
    p {
      cursor: pointer;
      
      img {
        width: 1rem;
      }
    }
  }
</style>
