<template>
  <div>
    <reply-content :replyContentObjs="newReplyObjs"/>
    
    <reply-form @newReply="getNewReply"/>
  </div>
</template>

<script>
  import ReplyForm from './ReplyForm';
  import ReplyContent from './ReplyContent';
  
  export default {
    name: 'ReplyBar',
    components: {
      ReplyForm,
      ReplyContent
    },
    props: {
      newReplyObjs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      getNewReply(value) {
        this.newReplyObjs.push(value)
      }
    }
  }
</script>

<style scoped lang = "scss">
</style>
