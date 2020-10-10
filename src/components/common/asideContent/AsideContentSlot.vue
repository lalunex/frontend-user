<template>
  <div>
    <slot name="search"></slot>
    <slot name="aboutMe"></slot>
    <slot name="latestPosts"></slot>
    <slot name="advertisements"></slot>
    <slot name="tags"></slot>
  </div>
</template>

<script>
  export default {
    name: 'AsideContentSlot'
  }
</script>

<style scoped lang = "scss">
</style>
