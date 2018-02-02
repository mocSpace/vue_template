<template>
  <div id="app">
    <router-view></router-view>
    <!--<Footers v-show="footer_isShow"></Footers>-->
    <!--加载中-->
    <loading></loading>
  </div>
</template>

<script>
  import Loading from './components/Loading.vue'
  export default {
    name: 'App',
    data () {
      return {
        footer_isShow: false
      }
    },
    components: {
      Loading
    }, // 所有页面更新都会触发此函数
    updated () {
    }
  }
</script>

<style>

</style>
