<template>
  <div class="contact">
    <h2>Contact</h2>
    
    <div class="contactHead">
      <div class="contactHeadTitle">联系我们</div>
      <div class="contactHeadText" v-html="contactHeadText"></div>
    </div>
    
    <el-divider content-position="center" class="contact-divider">Contact With Us</el-divider>
    
    <div class="contactMain">
      <contact-main-icon class="contactMainIcon"></contact-main-icon>
      <reply-form class="contactMainForm"></reply-form>
    </div>
  </div>
</template>

<script>
  import ReplyForm from '../components/common/reply/ReplyForm'
  import ContactMainIcon from '../components/content/contact/ContactMainIcon'
  
  export default {
    name: 'Contact',
    data() {
      return {
        contactHeadText: '<p>如果本网站里的内容有侵犯到了您的权益，请及时利息我们。</p>' + '<p>如果你想挂一个友情链接的话，也欢迎来联系我们</p>' + '<p>如果你也想利用WordPress来建一个站的话，也可以来联系我，我尽可能帮助你的，而该站不是WordPress建的。（当然是免费的咯）</p>'
      }
    },
    components: {
      ReplyForm,
      ContactMainIcon
    }
  }
</script>

<style scoped lang = "scss">
  .contact {
    padding: 3.6rem 2rem;
    h2 {
      font-size: 2.5rem;
      font-family: Impact, serif;
      padding-bottom: 2rem;
    }
    
    & > div {
      width: 100%;
    }
    
    .contactHead {
      display: flex;
      .contactHeadTitle {
        flex: 1;
        color: rgba(0, 255, 0, .5);
        font-size: 2rem;
        text-align: center;
        border-top: 1px rgba(0, 255, 0, .5) solid;
        font-weight: bold;
      }
      
      .contactHeadText {
        flex: 3;
        padding-left: 3rem;
      }
    }
    
    .contact-divider {
      margin: 4rem 0;
    }
    
    .contactMain {
      padding-top: 1rem;
      display: flex;
      flex: 1;
      @media screen and (max-width: 576px){
        flex-flow: column;
      }
      
      .contactMainIcon {
        flex: 1;
      }
      
      .contactMainForm {
        flex: 1;
      }
    }
  }
</style>
