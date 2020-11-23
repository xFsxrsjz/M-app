<template>
  <div class="app">
    <!-- 1.占位路由组件显示 -->
    <router-view />
    <!-- $route当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  // 2.引入路由
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    // 3.映射成标签
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color :red
</style>
