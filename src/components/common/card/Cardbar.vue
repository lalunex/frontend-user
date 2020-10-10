<template>
  <water-fall :waterFallCardObjs="cardbarWaterFallCardObjs" :waterFallCardIsDone="cardbarWaterFallPageIsDone"/>
</template>

<script>
  import WaterFall from './WaterFall'
  
  export default {
    name: 'Cardbar',
    components: {
      WaterFall
    },
    props: {
      cardbarWaterFallCardObjs: {
        type: Array,
        default() {
          return [];
        }
      },
      cardbarWaterFallPageIsDone: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang = "scss">
</style>
