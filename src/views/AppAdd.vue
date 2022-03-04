<template>
<div :class="['background']">
<div :class="['addContentDiv']">
  <div>
    <label>标题
      <input type="text" v-model='title'>
      <a  @click="clearTitle()">清空标题</a>
    </label>
  </div>
  <div>
    <label>内容
      <textarea type="text" v-model='content' :cols="cols" :rows="rows"></textarea>
      <a  @click="clearContent()">清空内容</a>
    </label>
  </div>
  <button :class="['add']" @click='add()'>确认新增</button>
  <button @click='toUserApp()'>返回</button>
</div>
</div>
</template>
<script>
import store from '../store/index.js'
export default {
  name: 'AppAdd',
  data () {
    return {
      title: '',
      content: '',
      time: this.getCurDate(),
      cols: 39,
      rows: 5
    }
  },
  methods: {
    add () {
      // console.log(this.title + this.content)
      store.commit('addItem', {
        title: this.title,
        content: this.content,
        time: this.time
      })
      this.title = ''
      this.content = ''
      this.$router.push('/home/list')
    },
    toUserApp () {
      this.$router.push('/home/user')
    },
    clearTitle () {
      this.title = ''
    },
    clearContent () {
      this.content = ''
    },
    getCurDate () {
      const y = new Date().getFullYear()
      const m = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
      const d = (new Date().getDate()) < 10 ? '0' + (new Date().getDate()) : new Date().getDate()
      const curDate = y + '-' + m + '-' + d
      return curDate
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
.addContentDiv{
  margin: 100px auto;
  width: 700px;
  height: 300px;
  text-align: center;
  div{
    margin:10px;
    font-size:18px;
    a{
      font-size:12px;
      color:rgba(39, 39, 214, 0.8);
    }
  }
  button{
    width: 100px;
    height: 40px;
    margin:20px;
    font-size:18px;
    color:#42b983;
    background-color: #fff;
  }
  button.add{
    color:#fff;
    background-color: #42b983;
    width:100px;
    height: 40px;
    font-size: 18px;
  }
}
</style>
