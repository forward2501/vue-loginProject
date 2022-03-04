<template>
<div :class="['login-or-reg-div']">
   <p>欢迎进入{{curFormTitie}}页面</p>
   <!--登录form-->
   <form action="" v-if="isLoinForm">
      <div>
        <label><span>用户名</span>
          <input type="text" v-model="name">
        </label>
      </div>
      <div>
        <label><span>密码</span>
          <input type="password" v-model="pw">
        </label>
      </div>
      <input :class="['btn']"  @click='login()'  type="submit" value="登录">
      <button :class="['toRegLink']" @click="toRegForm()">注册</button>
      <div>
        <span v-if="isInputNull" :style="{color:redFont}">用户名和密码不能为空！</span>
        <span v-if="isNoRegName" :style="{color:redFont}">登录失败，该用户名未注册！</span>
        <span v-if="isErrorPw" :style="{color:redFont}">登录失败，密码错误！</span>
      </div>
   </form>
   <!--注册form-->
   <form action="" v-else>
   <div>
        <label><span>用户名</span>
          <input type="text" v-model="name">
        </label>
      </div>
      <div>
        <label><span>密码</span>
          <input type="password" v-model="pw">
        </label>
      </div>
      <div>
        <label><span>确认密码</span>
          <input type="password" v-model="repeatPw">
        </label>
      </div>
      <input  :class="['btn']"  @click="addUser()" type="submit" value="注册">
      <button :class="['toLoginLink']" @click="toLoginForm()">登录</button>
      <div>
        <span v-if="isRepeatName" :style="{color:redFont}">该用户名已被注册，请重新输入!</span>
        <span v-if="isInputNull" :style="{color:redFont}">用户名和密码不能为空！</span>
        <span :style="{color:redFont}"  v-if="diffentPw">两次输入密码不一致!</span>
      </div>
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
        this.isNoRegName = false
        this.isErrorPw = false
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
          this.isInputNull = false
          this.isErrorPw = false
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
          this.isInputNull = false
          this.isNoRegName = false
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
        this.isRepeatName = false
        this.diffentPw = false
        return
      } else {
        this.isInputNull = false
      }

      if (localStorage.getItem(this.name)) { // 用户名已被注册
        this.isRepeatName = true
        this.isInputNull = false
        this.diffentPw = false
      } else {
        this.isRepeatName = false
        if (this.pw !== this.repeatPw) { // 密码不同
          this.diffentPw = true
          this.isRepeatName = false
          this.isInputNull = false
        } else {
          this.diffentPw = false
          localStorage.setItem(this.name, this.pw)
          this.name = ''
          this.pw = ''
          this.repeatPw = ''
          this.isNoRegName = false
          this.isErrorPw = false
          this.isInputNull = false
          alert('注册成功！即将跳转到登录页面')
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
/*混合组件*/
@mixin input-style{
  border-radius:3px;
  padding:5px;
  font-size:18px;
  margin-top:20px;
}
@mixin label-style{
  display: inline-block;
  padding:5px;
  width:80px;
  text-align:right;
  font-size:18px;
  margin-top:20px;
}
@mixin button-style{
  width: 100px;
  height: 40px;
  font-size:18px
}

.login-or-reg-div{
  margin:0 auto;
  margin-top:100px;
  $divWidth:600px;
  $divHeight:400px;
  width: $divWidth;
  height: $divHeight;
  position:relative;
  p{
    font-size:18px;
    width: 200px;
    margin:0 auto;
    text-align: center;
  }
  form{
    text-align: center;
    line-height:40px;
    width: 100%;
    height: 80%;
    background-color: rgb(184, 181, 179);
    div{
       label span{
        @include label-style
       }
       input{
        @include input-style;
       }
    }
    input.btn{
      display: inline-block;
      margin-top:10px;
      color:#fff;
      background-color:#42b983;
      @include button-style;
    }
    button.toLoginLink{
      margin-top:10px;
      margin-left:30px;
      color:#42b983;
      background-color: #fff;
      @include button-style;
    }
    button.toRegLink{
      margin-top:10px;
      margin-left:30px;
      color:#42b983;
      background-color: #fff;
      @include button-style;
    }
    }
}
</style>
