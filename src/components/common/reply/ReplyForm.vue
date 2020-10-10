<template>
  <div class="reply-form">
    <h2>Leave a Reply</h2>
    
    <div class="reply-form-input">
      <b-form-group
              id="fieldset-1"
              description="让大家认识认识你吧"
              label="请输入您的名字"
              label-for="input-1"
              label-size="lg"
              :invalid-feedback="invalidFeedback1()"
              :state="state('name')"
      >
        <b-form-input id="input-1"
                      v-model="name"
                      :state="state('name')"
                      placeholder="Enter your name"
                      trim></b-form-input>
  
      </b-form-group>
      <b-form-group
              id="fieldset-2"
              description="请放心您的信息不会泄漏"
              label="请输入您的邮箱"
              label-for="input-2"
              label-size="lg"
              :invalid-feedback="invalidFeedback2()"
              :state="state('email')"
      >
        <b-form-input id="input-2"
                      v-model="email"
                      :state="state('email')"
                      placeholder="Enter your email"
                      trim></b-form-input>
  
      </b-form-group>
    </div>
  
    <b-form-group
            id="fieldset-3"
            class="mb-0"
            label="请输入您的真知灼见（请开始您的表演）"
            label-size="lg"
            label-for="textarea-formatter"
            :invalid-feedback="invalidFeedback3()"
            description="请不要输入违反国家法律法规、社会条令等的内容，做一个新时代的文明人"
    >
      <b-form-textarea
              id="textarea-formatter"
              v-model="text"
              placeholder="Enter your text"
              :state="text.length >= 1"
      ></b-form-textarea>
    </b-form-group>
  
    <b-button id="reply-tooltip" variant="primary" @click="sendReply" class="reply-form-btn">Commont</b-button>
    <b-tooltip target="reply-tooltip" triggers="focus">
      {{ replyMessage }}
    </b-tooltip>
  </div>
</template>

<script>
  import qs from 'querystring'
  import { dataFormat } from 'common/utils.js'
  
  export default {
    name: 'ReplyForm',
    data() {
      return {
        name: '',
        text: '',
        email: '',
        state1: false,
        state2: false,
        state3: false,
        replyMessage: ''
      }
    },
    methods: {
      invalidFeedback1() {
        if (this.name.length >= 4) {
          this.state1 = true
          return ''
        } else if (this.name.length > 0) {
          return '至少填入4个字符哦'
        } else {
          return '请填入您的鼎鼎大名吧'
        }
      },
      invalidFeedback2() {
        const regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
        if (this.email.length === 0) {
          return '请填入您的邮箱吧'
        } else if (regExp.test(this.email)) {
          this.state2 = true
          return ''
        } else {
          return '输入的邮箱有误'
        }
      },
      invalidFeedback3() {
        if (this.name.length >= 1) {
          this.state3 = true
          return ''
        } else if (this.name.length > 0) {
          return '至少填入1个字符哦'
        } else {
          return '请填入您的评论吧'
        }
      },
      state(value) {
        if (value === 'name') {
          return this.name.length >= 4
        } else {
          const regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
          return regExp.test(this.email)
        }
      },
      sendReply() {
        if (this.state1 && this.state2 && this.state3) {
          this.replyMessage = '提交成功'
          // 把数据发送到服务器
          const now = dataFormat('yyyy年MM月dd日 hh:mm:ss');
          const regExp = /contact/
          if (!regExp.test(this.$route.fullPath)) {
            this.$emit('newReply', {
              replyContentImg: '0',
              replyContentName: this.name,
              replyContentEmail: this.email,
              replyContentContent: this.text,
              replyContentDate: now
            })
          }
          // 这里需要把数据发送到服务器
          const commentObj = {
            url: '/api/comments',
            method: 'post',
            data: qs.stringify({
              cid: this.$route.query.id,
              cu: this.name,
              ce: this.email,
              cc: this.text,
              cd: now
            })
          }
          this.$store.dispatch('setNormalData', commentObj)
          this.state1 = this.state2 = this.state3 = false
          this.name = this.email = this.text  = ''
        } else {
          this.replyMessage = '存在表单为空，不能提交，请重新填写'
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .reply-form {
    
    & > h2 {
      font-family: Impact, serif;
    }
    
    .reply-form-input {
      margin: 1rem;
      display: flex;
      @media screen and (max-width: 576px){
        flex-flow: column;
      }
      
      #fieldset-1, #fieldset-2 {
        flex: 1;
        margin: 1rem;
      }
    }
    
    #fieldset-3, .reply-form-btn {
      margin: 1rem 2rem;
    }
  
    .reply-form-btn {
      float: right;
    }
  }
</style>
