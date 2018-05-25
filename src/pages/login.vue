<template>
    <div class="login_page fillContain">
      <div class="title">
        <img src="../assets/login-logo.png" alt="">
      </div>
      <div class="background" :style="{height:height+'px'}">
        <img src="../assets/login-bj.jpg" alt="">
      </div>
      <div class="tip">
        <h3>**********技术有限公司</h3>
      </div>
      <div class="form_container">
        <div class="innerContainer">
          <h2 class="login_title">用户登陆</h2>
          <el-form :model="loginForm" ref="loginForm" :rules="rules" status-icon label-width="70px" class="login">
            <el-form-item label="用户名:" prop="userName">
              <el-input type="text" v-model="loginForm.userName">
                <span></span>
              </el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input type="password" v-model="loginForm.password">
                <span></span>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login_btn" @click="login('loginForm')">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
import {login} from '../api/login'
export default {
  name: 'login',
  mounted () {
    var _this = this
    _this.height = window.innerHeight - 60 - 50
    window.onresize = function () {
      _this.height = window.innerHeight - 60 - 50
    }
  },
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      height: 600
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.loginForm).then(response => {
            this.$store.commit('SET_USERNAME', response.data.name)
            this.$store.commit('SET_USERID', response.data.userId)
            this.$router.push({ path: 'index' })
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  .login_page{
    background-color: #fff;
    .title{
      height: 60px;
      line-height: 60px;
      padding-left: 3%;
      img{
        vertical-align: middle;
      }
    }
    .background{
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .form_container{
      position: absolute;
      top:30%;
      left: 60%;
      width: 400px;
      height: 300px;
      background-color: white;
      .innerContainer{
        width: 80%;
        margin: 30px auto;
        .login_title{
          margin-bottom: 20px;
        }
        .login{
          .login_btn{
            width: 100%;
            background-color: $orange;
            border: none;
          }
        }
      }
    }
    .tip{
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
