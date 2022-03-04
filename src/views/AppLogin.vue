<template>
<div :class="['login-or-reg-div']">
   <p>欢迎进入{{curFormTitie}}页面</p>
   <!--登录form-->
   <form action="" v-if="isLoinForm">
      <div>
        <label>用户名:
          <input type="text" v-model="name">
        </label>
        <span v-if="isNoRegName" :style="{color:redFont}">登录失败，该用户名未注册！</span>
      </div>
      <div>
        <label>密码:
          <input type="password" v-model="pw">
        </label>
        <span v-if="isErrorPw" :style="{color:redFont}">登录失败，密码错误！</span>
      </div>
      <input :class="['btn']"  @click='login()'  type="submit" value="登录">
      <span v-if="isInputNull" :style="{color:redFont}">用户名和密码不能为空！</span>
      <a :class="['toRegLink']" @click="toRegForm()">点击跳转到注册</a>
   </form>
   <!--注册form-->
   <form action="" v-else>
   <div>
        <label>用户名:
          <input type="text" v-model="name">
        </label>
        <span v-if="isRepeatName" :style="{color:redFont}">该用户名已被注册，请重新输入!</span>
      </div>
      <div>
        <label>密码:
          <input type="password" v-model="pw">
        </label>
      </div>
      <div>
        <label>再次输入密码:
          <input type="password" v-model="repeatPw">
        </label>
        <span :style="{color:redFont}"  v-if="diffentPw">两次输入密码不一致!</span>
      </div>
      <input  :class="['btn']"  @click="addUser()" type="submit" value="注册">
      <span v-if="isInputNull" :style="{color:redFont}">用户名和密码不能为空！</span>
      <a :class="['toLoginLink']" @click="toLoginForm()">点击跳转到登录</a>
   </form>
</div>
</template>
<script>
import store from '../store/index.js'
export default {
  name: 'AppLogin',
  data () {
    return {
      isLoinForm: true,
      name: '',
      pw: '',
      repeatPw: '',
      isRepeatName: false,
      redFont: 'red',
      diffentPw: false,
      isNoRegName: false,
      isErrorPw: false,
      isInputNull: false
    }
  },
  methods: {
    login () {
      if (this.name.trim() === '' || this.pw.trim() === '') {
        this.isInputNull = true
        return
      } else {
        this.isInputNull = false
      }

      // 判断用户名和密码
      const localUserNums = localStorage.length
      let pw = ''
      console.log('已有用户数:' + localUserNums)
      for (let i = 0; i < localUserNums; i++) {
        console.log(i)
        console.log(localStorage.key(i))
        if (this.name === localStorage.key(i)) { // 用户名存在
          this.isNoRegName = false
          pw = localStorage.getItem(localStorage.key(i))
          break
        } else {
          this.isNoRegName = true
        }
      }// for

      if (!this.isNoRegName) { // 用户名存在
        if (this.pw === pw) { // 密码正确
          this.isErrorPw = false
          this.isNoRegName = false
          store.commit('updateCurrentUser', this.name)
          // 跳转页面
          this.$router.push('/home/list')
        } else {
          // 密码错误
          this.isErrorPw = true
        }
      }
    },
    toLoginForm () {
      this.isLoinForm = true
      this.isInputNull = false
    },
    toRegForm () {
      this.isLoinForm = false
      this.isInputNull = false
    },
    addUser () {
      if (this.name.trim() === '' || this.pw.trim() === '' || this.repeatPw.trim() === '') {
        this.isInputNull = true
        return
      } else {
        this.isInputNull = false
      }

      if (localStorage.getItem(this.name)) { // 用户名已被注册
        this.isRepeatName = true
      } else {
        this.isRepeatName = false
        if (this.pw !== this.repeatPw) { // 密码不同
          this.diffentPw = true
        } else {
          this.diffentPw = false
          localStorage.setItem(this.name, this.pw)
          this.name = ''
          this.pw = ''
          this.repeatPw = ''
          this.isNoRegName = false
          this.isErrorPw = false
          this.isInputNull = false
          alert('即将跳转到登录页面')
          this.isLoinForm = true
        }
      }
    }
  },
  computed: {
    curFormTitie () {
      return this.isLoinForm ? '登录' : '注册'
    }

  }
}
</script>
<style lang="scss" scoped>
.login-or-reg-div{
  margin:0 auto;
  margin-top:100px;
  $divWidth:700px;
  $divHeight:300px;
  width: $divWidth;
  height: $divHeight;
  background-color: gray;
  position:relative;
  form{
    text-align: center;
    line-height:40px;
    $formWidthPce: 80%;
    $formHeightPce: 80%;
    width: 100%;
    height: 80%;
    background-color: antiquewhite;
    div{
       padding-left:10px;
       padding-top:10px;
       font-size:18px;
    }
    input.btn{
      display: inline-block;
      width: 100px;
      height: 40px;
      margin-top:10px;
      color:#fff;
      font-size:18px;
      background-color:rgba(39, 39, 214, 0.8);
    }
    a{
      position: absolute;
      bottom:50px;
      right:10px;
      color:rgba(39, 39, 214, 0.8);
    }
    }
}
</style>
