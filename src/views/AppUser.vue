<template>
<div :class="['background']">
   <div :class="['userinfo-div']">当前用户：<img src="../assets/user.png" :style="{width:'50'+'px',height:'50'+'px'}">{{getCurrentLoginUser}}
   </div>
   <div :class="['functionDiv']">
      <ul>
        <li @click='add()'><a>发表新闻<span>>></span></a></li>
        <li><a>修改密码<span>>></span></a></li>
         <li><a>修改头像<span>>></span></a></li>
        <li><a>退出登录<span>>></span></a></li>
      </ul>
   </div>
</div>
</template>
<script>
import store from '../store/index.js'
export default {
  name: 'AppUser',
  data () {
    return {
      // currentLoginUser: store.state.currentUser
    }
  },
  store,
  computed: {
    getCurrentLoginUser () {
      return store.state.currentUser
    }
  },
  methods: {
    add () {
      this.$router.push('/add')
    }
  }
}
</script>
<style lang="scss" scoped>
.background{
  left:0;
  top:0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index:-1;
 background-color: rgb(238, 235, 235);
  background-size: 100%;
}
.userinfo-div{
 position: fixed;
 right:10px;
 top:10px;
}
.functionDiv{
  margin: 100px auto;
  width: 1000px;
  height: 800px;
  font-size:18px;
  position: relative;
}
ul{
  //text-align:center;
  width: 600px;
  height: 600px;
  position: absolute;
  top:50%;
  margin-top: -300px;
  left:50%;
  margin-left:-300px;
}
ul li{
  list-style: none;
  width: 400px;
  height: 60px;
  background-color: #42b983;;//#42b983;
  border-bottom: 2px solid rgb(184, 181, 179);;
  font-size:18px;
  padding:20px;
  line-height: 60px;
  color:#fff;
  span{
  display:inline-block;
  width: 50px;
  height: 60px;
  float: right;
  color:#fff;
  }
}
</style>
