<template>
  <div class="aboutMe">
    <div class="aboutMeTitle">
      <h2>About Me</h2>
    </div>

    <div class="aboutMeImg" :style="{ backgroundImage: `url(/img/` + aboutMeImg + ')' }"></div>
    
    <div class="aboutMeMain">
      <h5 class="aboutMeName">{{ aboutMeName.toUpperCase() }}</h5>
      <div class="aboutMeContent">{{ aboutMeContent }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AsideContentAboutMe',
    data() {
      return {
        aboutMeImg: 'lightliangPortrait2.jpg',
        aboutMeName: 'liang liang',
        aboutMeContent: '想跳出现在的怪圈，可奈何走不出舒适区；想做那20%的人，可实力达不到；想活出最真实的自己，可最终还是活成了自己最厌恶的样子。“理想主义“与”现实主义“的碰撞，到底谁会胜利呢？'
      }
    }
  }
</script>

<style scoped lang = "scss">
  .aboutMe {
    padding: 1rem 2rem 1rem 2rem;
    
    .aboutMeTitle {
      border-left: 3px rgba(0, 255, 0, 0.5) solid;
      padding-left: 1rem;
      border-radius: 5px 5px;
  
      & > h2 {
        font-size: 2.5rem;
        font-family: Impact, serif;
      }
    }
    .aboutMeImg {
      margin: 1rem auto;
      overflow: hidden;
      width: 80%;
      height: 17rem;
      flex: 1;
      border-radius: 20rem 20rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    
    .aboutMeMain {
      .aboutMeName {
        font-size: 150%;
        text-align: center;
      }
      
      .aboutMeContent {
        color: #bbb;
        text-align: center;
        text-indent: 2rem;
        word-wrap: break-word;
      }
    }
  }
</style>
