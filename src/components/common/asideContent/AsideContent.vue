<template>
  <aside-content-slot class="aside-content">
    <template #search>
      <aside-content-search/>
    </template>
  
    <template #aboutMe>
      <aside-content-about-me/>
    </template>
  
    <template #latestPosts>
      <aside-content-latest-posts :latestPostsObjs="asideTotalData.asideContentLatestPostsObjs"/>
    </template>
    
    <template #advertisements>
      <aside-content-advertisements :advertisesements="asideTotalData.asideContentAdvertisesements"/>
    </template>
    
    <template #tags>
      <aside-content-tags :tagsObjs="asideTotalData.asideContentTagsObjs"/>
    </template>
  </aside-content-slot>
</template>

<script>
  import AsideContentSlot from './AsideContentSlot'
  
  import AsideContentLatestPosts from './AsideContentLatestPosts'
  import AsideContentAboutMe from './AsideContentAboutMe'
  import AsideContentSearch from './AsideContentSearch'
  import AsideContentAdvertisements from './AsideContentAdvertisements'
  import AsideContentTags from './AsideContentTags'
  
  export default {
    name: 'AsideContent',
    components: {
      AsideContentSlot,
      AsideContentLatestPosts,
      AsideContentAboutMe,
      AsideContentSearch,
      AsideContentAdvertisements,
      AsideContentTags
    },
    props: {
      asideTotalData: {
        type: Object,
        default() {
          return {
            asideContentLatestPostsObjs: [],
            asideContentTagsObjs: [],
            asideContentAdvertisesements: []
          }
        }
      }
    }
  }
</script>

<style scoped lang = "scss">
  .aside-content {
    width: 100%;
    padding-top: 3rem;
  }
</style>
