<template lang="pug">
  header: .navbar.container.grid-960
    section.navbar-section
      router-link.navbar-brand.mr-10(to='/') Edison
      router-link.btn.btn-link(to='/people') People
    section.navbar-section
      router-link.btn.btn-primary(to='/auth') Sign in
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="less" scoped>
  @import '~spectre.css/src/variables.less';

  header {
    color: @gray-color;
    background-color: @bg-color;

    .navbar {
      padding: @layout-padding * 1.3;
    }
  }
</style>
