<template>
  <div class="contactMainIcon">
    <h2>Details</h2>
    
    <div class="icon-address">
      <i class="el-icon-location-information"></i>
      <div>四川</div>
    </div>
  
    <div class="icon-mobile">
      <i class="el-icon-mobile"></i>
      <div>15554927236</div>
    </div>
  
    <div class="icon-message">
      <i class="el-icon-message"></i>
      <div>1213304625@qq.com</div>
    </div>
  
    <div class="icon-link">
      <i class="el-icon-link"></i>
      <div>lightliang.top</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactMainIcon',
    data() {
      return {
        contactHeadText: '<p>如果本网站里的内容有侵犯到了您的权益，请及时利息我们。</p>' + '<p>如果你想挂一个友情链接的话，也欢迎来联系我们</p>' + '<p>如果你也想利用WordPress来建一个站的话，也可以来联系我，我尽可能帮助你的，而该站不是WordPress建的。（当然是免费的咯）</p>'
      }
    }
  }
</script>

<style scoped lang = "scss">
  .contactMainIcon {
    display: flex;
    flex-flow: column;
    h2 {
      font-family: Impact, serif;
      margin-bottom: 2rem;
    }
    
    div[class |= 'icon'] {
      flex: 1;
      display: flex;
      margin: 1rem 2rem;
      
      i {
        flex: 1;
        font-size: 2rem;
        padding: 1rem;
        margin: auto 0;
        text-align: center;
        border: 1px rgba(0, 255, 0, .3) solid;
        border-radius: .5rem .5rem;
      }
      
      & > div {
        flex: 12;
        margin: auto 0;
        padding-left: 2rem;
        font-size: 120%;
        color: #ccc;
        opacity: .7;
      }
    }
  }
</style>
