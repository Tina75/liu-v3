<template>
    <ul class="tabs clear">
      <li class="li">{{name}}</li>
      <li class="li" v-for="item in 10">我的规则{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    name: ''
  }
}
</script>

<style scoped lang="scss">
  .tabs{
    width: 100%;
    /*overflow-x: auto;*/
    .li{
      float: left;
    }
  }
</style>
