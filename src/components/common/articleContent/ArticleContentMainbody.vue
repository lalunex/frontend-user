<template>
  <div class="article-content-mainbody">
    <div class="article-content-mainbody-title">
      <h1>{{ articleContentMainbodys.articleTitle | articleTitleFilter }}</h1>
      <span>{{ articleContentMainbodys.articleDate | articleDateFilter }}</span>
      <i class="el-icon-chat-dot-round">&nbsp;{{ articleContentMainbodys.articleCommentNum }}</i>
      
    </div>
    
    <div class="article-content-mainbody-content" v-html="compileMarkdown" v-highlight></div>
  </div>
</template>

<script>
  // import { formatDate } from 'common/utils.js'
  import marked from 'marked'
  import 'highlight.js/styles/tomorrow-night.css';
  // import Vue from 'vue';
  const hljs = require('highlight.js');
  
  Vue.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })

  const renderers = new marked.Renderer(); // 使图片适应盒子
  renderers.image = function(href, title, text) {
    return '<img src="' + href + '" alt="' + title + '" width="100%"/>';
  };
  
  marked.setOptions({
    renderer: renderers,
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false // 使用更为时髦的标点
  })
  
  export default {
    name: 'ArticleContentMainbody',
    props: {
      articleContentMainbodys: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      compileMarkdown() {
        return marked(this.articleContentMainbodys.articleContent || '');
      }
    },
    filters: {
      articleTitleFilter(value) {
        if (!value) return ''
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      articleDateFilter(value) {
        const dateee = new Date(value).toJSON();
        const date = new Date(+new Date(dateee) + 3600 * 8 * 1000).toISOString().replace(/T/g, '日 ').replace(/\.[\d]{3}Z/, '')
        return date.replace(/-/, '年').replace(/-/, '月')
      }
    }
  }
</script>

<style scoped lang = "scss">
  .article-content-mainbody {
    margin: 2rem 0;
    width: 100%;

    .article-content-mainbody-title {
      padding: 1rem 0;
      margin: 1rem 0;
      border-bottom: 1px #ccc solid;
      
      h1 {
        font-weight: bolder;
      }
      
      span {
        color: #bbb;
      }
      
      i {
        float: right;
        margin-right: 1rem;
      }
    }
    
    .article-content-mainbody-content {
      width: 100%;
      margin: 2rem 0;
      opacity: 0.8;
      line-height: 2.5rem;
      font-size: 1rem;
    }
  }
</style>
