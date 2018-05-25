<template>
    <div class="fillContain">
      <el-container class="fillContain">
        <el-aside width="240px">
          <navMenu></navMenu>
        </el-aside>
        <el-container style="min-width: 1100px">
          <el-header class="header" style="height: 50px">
            <navHeader>
            </navHeader>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import navMenu from '../components/navMenu'
import navHeader from '../components/navHeader'
export default {
  name: 'index',
  components: {
    navMenu,
    navHeader
  }
}
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  .header{
    font-size: $fon-small;
    background-color: $blue;
  }
</style>
