<template>
  <div class="aside-content-search" @keyup.enter="getSearch">
    <div class="searchTitle">
      <h2>Search</h2>
    </div>
    <el-input placeholder="请输入查询的内容"
              v-model="asideContentInput"
              size="large"
              class="aside-content-search-input">
    
      <i slot="prefix" class="el-input__icon el-icon-search"
         @click="getSearch"
         ></i>
    </el-input>
  
    <el-alert
            title="提交成功，请等候"
            type="success"
            show-icon
            v-if="alertInfo === 0">
    </el-alert>
  
    <el-alert
            title="回车或点击图标即可查询"
            type="info"
            show-icon
            v-else-if="alertInfo === 1">
    </el-alert>
    
    <el-alert
            title="提交错误，请重新提交"
            type="error"
            show-icon
            v-else>
    </el-alert>
  </div>
  
</template>

<script>
  export default {
    name: 'AsideContentSearch',
    data() {
      return {
        asideContentInput: '',
        alertInfo: 1
      }
    },
    methods: {
      getSearch() {
        if (this.asideContentInput === '') {
          this.alertInfo = 2;
        } else {
          this.alertInfo = 0;
          this.$router.push({
            path: '/search',
            query: {
              q: this.asideContentInput
            }
          })
          this.asideContentInput = ''
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .aside-content-search {
    padding: 1rem 2rem 1rem 2rem;
    
    .searchTitle {
      margin-bottom: 2rem;
      border-left: 3px rgba(0, 255, 0, 0.5) solid;
      padding-left: 1rem;
      border-radius: 5px 5px;
  
      & > h2 {
        font-size: 2.5rem;
        font-family: Impact, serif;
      }
    }
    
    .aside-content-search-input {
      margin-bottom: 2rem;
    }
  }
</style>
