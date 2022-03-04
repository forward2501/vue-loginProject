<template>
<div :class="['userDiv']"><div>当前登录名：{{getCurrentLoginUser}}</div>
<button @click='add()'>添加新闻</button>
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
.userDiv{
  margin: 20px auto;
  width: 500px;
  height: 100px;
}
button{
 margin:20px;
 width: 100px;
 height: 30px;
 background-color: rgba(39, 39, 214, 0.8);
 color:#fff
}
</style>
