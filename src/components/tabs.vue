<template>
    <ul class="tabs clear">
      <li class="li">{{name}}</li>
      <li class="li" v-for="(item,index) in 15" :key="index">我的规则{{item}}</li>
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
    overflow-x: auto;
    .li{
      float: left;
      height: 40px;
      line-height: 40px;
      padding:0 20px;
    }
  }
</style>
