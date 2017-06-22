<template lang="pug">
  div(v-if='token') {{ JSON.stringify(payload, null, 4) }}
  .empty(v-else)
    .empty-icon: i.icon.icon-people
    h4.empty-title You are not authorized
    p.empty-subtitle Click the button to sign in.
    .empty-action: router-link.btn.btn-primary(to='/auth') Sign in
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapState(['token']),
      ...mapGetters(['payload'])
    }
  }
</script>

<style lang="less" scoped>
  .empty {
    .icon {
      font-size: 4rem;
    }
  }
</style>
