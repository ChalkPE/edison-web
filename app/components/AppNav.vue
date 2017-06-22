<template lang="pug">
  header: .navbar.container.grid-960
    section.navbar-section
      router-link.navbar-brand.mr-10(to='/') Edison
      router-link.btn.btn-link(to='/people') People
    section.navbar-section
      a.btn.btn-primary(v-if='token', @click='signOutAndRedirect') Sign out
      router-link.btn.btn-primary(v-else, to='/auth') Sign in
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState(['token']),
    methods: {
      ...mapActions(['signOut']),
      signOutAndRedirect () {
        this.signOut().then(() => this.$router.push('/'))
      }
    }
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
