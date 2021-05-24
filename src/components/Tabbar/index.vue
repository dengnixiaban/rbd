<template>
  <div class="tabbar">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">商品类别</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mime">个人中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/cart">购物车</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

    data(){
        return {

            active:0
        }
    }
};
</script>

<style>
</style>