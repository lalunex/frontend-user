<template>
  <div class="about">
    <h2>About</h2>
    <div class="about-head">
      <div class="aboutHeadImg" :style="{ backgroundImage: `url(/img/` + aboutHeadImg + ')' }"></div>
      <div class="aboutHeadText">
        <div>Who I Am?</div>
        <p>{{ aboutHeadText }}</p>
      </div>
      
    </div>
    <div class="about-main">
      <p v-html="aboutMainText"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        aboutHeadImg: 'lightliangPortrait1.jpg',
        aboutHeadText: '站在轮回的角度来讲述，我们可以推测前世今生是可能存在的——前世就好比是我们的孩童时代，今生则是如今的我们，来世是我们未来将要成为的那个人。所以不必在意我是谁，因为我和屏幕前的你是一样的。（手动滑稽）',
        aboutMainText: '<p>从十月怀胎到我呱呱坠地，再到好奇地打量这个世界，然后到一言不和就嚎啕大哭，再到牙牙学语。（大人给我摆了一些我小时候的奇闻异事，当然有些操作依旧是令人喷饭）</p>' + '<p>到少年时，淘气顽皮，贪玩，可以再树林坝里面看一下午的虫虫，再到最后的到厌恶读书。（很难想象当时我是怎么做到的在林子里看一下午的）</p>' + '<p>到青年时，青春叛逆，而在这个时候耍心更重，当然在家人的“关心”下并没有落下太多的学业，然后到“稍微懂事”，再到看到大家都在为升学而努力着，我也加入到他们的行列，然后获得了大学的入场券。浑浑噩噩的度过了大学四年，然后步入社会，结婚生子，为自己的小家奔波。（青不青春我不知道，反正当时我倒是有点叛逆的。如果我记得不错的话，他们是用黄金棍关心我的）</p>' + '<p>到中年时，做事畏手畏脚，顾虑太多，有人说那是左右逢源，也有人说那就是见风使舵。到那时脸皮也许就真的和成墙拐拐一样厚吧。上有老下有小，希望自己可以顶住；也希望到那时我不那么的油腻吧。（顶得住要顶，顶不住也要顶。赶鸭子上架。希望自己的中年生活不那么丧吧）</p>' + '<p>到老年时，希望能够岁月静好，携手到老，最后有尊严的离开。（轻轻的我来了，正如我轻轻的走了，挥一挥衣袖，不带走一片云彩）</p>' + '<p>（以上纯属虚构，如有雷同，纯属巧合。）</p>'
      }
    }
  }
</script>

<style scoped lang = "scss">
  .about {
    padding: 3.6rem 2rem;
    h2 {
      font-size: 2.5rem;
      font-family: Impact, serif;
      padding-bottom: 2rem;
    }
    
    .about-head {
      padding: 1rem 2rem;
      display: flex;
      .aboutHeadImg {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        border-radius: 1rem 1rem;
        height: 20rem;
        flex: 2;
        @media screen and (max-width: 960px) {
          display: none;
        }
      }
      
      .aboutHeadText {
        flex: 5;
        margin: 0 2rem;
        p {
          width: 100%;
          color: #cccccc;
          font-size: 1.2rem;
          padding: 0 2rem;
        }
  
        div {
          text-align: center;
          margin: 2rem auto;
          border-bottom: 3px rgba(0, 255, 0, .8) solid;
          font-size: 5rem;
          font-family: Impact, serif;
          color: rgba(0, 255, 0, .8);
        }
      }
    }
    
    .about-main {
      padding: 1rem 2rem;
      p {
        width: 100%;
        color: #cccccc;
        font-size: 1.2rem;
      }
    }
  }
</style>
