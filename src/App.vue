<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div id="app">
  <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0
}

/*混合组件*/
@mixin input-style{
  border-radius:10px;
}
@mixin label-style{
  display: inline-block;
  width:50px;
  text-align:right;
}
</style>
