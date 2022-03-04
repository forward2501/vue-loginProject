<template>
<div>
<span v-if="isNullList">暂无数据...</span>
<ul>
  <li v-for='(item,index) in pageList' :key="index">
     <h2 :class="['list-title']">{{item.title}}<span>时间:{{item.time}}</span></h2>
     <p :class="['list-content']">{{item.content}}</p>
  </li>
</ul>
</div>
</template>
<script>
import store from '../store/index.js'
export default {
  name: 'AppList',
  data () {
    return {
    }
  },
  store,
  computed: {
    pageList () {
      return store.state.lists
    },
    isNullList () {
      return store.state.lists.length === 0
    }
  }
}
</script>
<style lang="scss" scoped>
li{
  width: 30%;
  float:left;
  height: 270px;
  list-style: none;
}
.list-title{
  margin:10px 10px 0 10px;
  height: 50px;
  position: relative;
  line-height: 50px;
  span{
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    right:5px;
  }

}
.list-content{
  height: 60%;
  margin:0 10px 10px 10px;
  padding:10px;
  background-color: rgb(184, 177, 177);
  border:1px #000 solid;
  overflow-wrap: normal;
  overflow-y: auto;
  overflow-x:hidden
}
</style>
