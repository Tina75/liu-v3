<template>
    <div>
      <div><input type="text" v-model="userName"></div>
      <div><input type="text" v-model="password"></div>
      <div><button @click="login">提交</button></div>
    </div>
</template>

<script>
import * as request from '../utils/request'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      let uName = this.userName
      let pwd = this.password
      request.login({
        userName: uName,
        password: pwd
      }).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
