<template lang="pug">
  #app
    app-nav
    main.container.grid-960: router-view
    app-footer
</template>

<script>
  import 'spectre.css'

  import AppNav from './components/AppNav.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    components: { AppNav, AppFooter }
  }
</script>

<style lang="less" scoped>
  @import '~spectre.css/src/variables.less';

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
    padding: @layout-padding;
  }
</style>
