<template>
  <div>
    <h2>我是用户哈哈哈哈哈哈</h2>
    <p>我是用户内容哈哈哈哈</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>
</style>