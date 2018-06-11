<template>
  <div class="navHeader">
    <div class="set_middle">
      <el-row >
        <el-col :span="2" :offset="17" class="item">
          系统状态：<span>在线</span>
        </el-col>
        <el-col :span="3" class="item">
          <span>{{time}}</span>
        </el-col>
        <el-col :span="2" class="item">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="icon-icon-sy9"></i>
              <span>{{username}}</span>
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
import { mapGetters } from 'vuex'
export default {
  name: 'navHeader',
  data () {
    return {
      time: ''
    }
  },
  mounted () {
    var _this = this
    this.time = this.timeNow()
    setTimeout(function () {
      _this.time = _this.timeNow()
    }, 1000)
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  methods: {
    timeNow () {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours() // 0-23
      h = h < 10 ? ('0' + h) : h
      let minute = date.getMinutes()
      minute = minute < 10 ? ('0' + minute) : minute
      let second = date.getSeconds()
      second = second < 10 ? ('0' + second) : second
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
    }
  }
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
