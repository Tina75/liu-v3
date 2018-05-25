<template>
  <div class="navMenu">
    <h4 class="title">
      <i class="icon-icon-sy11 icon"></i>
      <span>报文实时过滤分析系统</span>
    </h4>
    <el-menu :router="true" class="menuList" default-active="/index">
      <el-submenu index="1" >
        <template slot="title">
            <i class="icon-icon-sy1"></i>
            <span>规则管理</span>
        </template>
        <el-menu-item index="/index">我的规则</el-menu-item>
        <el-menu-item index="/allRule">全部规则</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" style="color: red" class="item">
          <i class="icon-icon-sy1"></i>
          <span>规则管理</span>
        </template>
        <el-menu-item index="2-1" >我的规则</el-menu-item>
        <el-menu-item index="2-2">全部规则</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  methods: {
  }
}
</script>

<style  lang="scss" scoped>
  @import "../style/mixin";
  .navMenu{
    width: 100%;
    height: 100%;
    background: #F1F1F1;
    .title{
      height: 50px;
      line-height: 50px;
      background: #2B3942;
      color: #fff;
      font-weight: normal;
      font-size: 16px;
      padding:0 15px;
      .icon{
        margin-right: 5px;
      }
    }
    .menuList{
      border-right: none;
      font-size: $font-mid;
      .el-submenu{
        border-bottom: 1px solid #E2E2E2;
        background-color: #F1F1F1;
        & /deep/ .el-submenu__title{
          height: 50px;
          line-height: 50px;
          &:hover{
            color: #fff;
            background-color: $blue;
            i{
              color: #fff;
            }
          }
        }
        .el-menu-item{
          background-color: #CDDEEE;
          height: 34px;
          line-height: 34px;
          &:hover{
            color: #0078E6;
          }
        }
      }
       .is-active /deep/ .el-submenu__title{
        background-color: $blue;
        color: #fff;
      }
    }

  }
</style>
