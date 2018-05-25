<template>
  <div class="navHeader">
    <div class="set_middle">
      <el-row >
        <el-col :span="2" :offset="17" class="item">
          系统状态：<span>在线</span>
        </el-col>
        <el-col :span="3" class="item">
          <span>2018-05-25 14:38:00</span>
        </el-col>
        <el-col :span="2" class="item">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="icon-icon-sy9"></i>
              <span>用户名</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navHeader'
}
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  .navHeader{
    color: #fff;
    height: 50px;
    display: flex;
    .set_middle{
      width: 100%;
     align-self: center;
      .item{
        text-align: center;
        border-right: 1px solid #2E9EF8;
        &:last-child{
          border-right: none;
        }
        .el-dropdown{
          cursor: pointer;
          font-size: inherit;
          color: inherit;
        }
      }
    }
  }
</style>
