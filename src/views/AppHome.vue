<template>
<div>
    <router-view/>
    <ul :class="['home-ul']">
        <li :class="['icons']"><router-link to="./list">新闻列表</router-link></li>
        <li :class="['icons']"><router-link to="./user">个人中心</router-link></li>
    </ul>
</div>
</template>
<script>
export default {
  name: 'AppHome',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  ul.home-ul{
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    left:0;
    bottom: 0;
    //background-color: rgb(141, 130, 130);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  ul.home-ul .icons{
   font-size: 16px;
   flex:1;
   text-align: center;
   border-top:1px solid #42b983;
   list-style: none;
   a{
   color:#42b983;
   display: block;
   &.active{
      color:#fff;
      background-color: #42b983;
}

   }
 }

</style>
