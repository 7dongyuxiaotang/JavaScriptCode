<template>
  <div id="app">
    <router-link to='/home' active-class="active">首页</router-link>
    <br>
    <router-link to='/about' active-class="active">关于</router-link>
    <br>
    <router-link :to="'/user/'+userId" active-class="active">用户</router-link>
    <br>
    <router-link :to="{path:'/profile',query:{
      name:'张三',
      age:18,
      height:1.87
     }}" active-class="active">档案</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      userId:'7dongyuxiotang'
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
