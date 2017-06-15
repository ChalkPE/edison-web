<template lang="pug">
  .empty
    .empty-icon: i.icon.icon-people
    h4.empty-title You are not authorized
    p.empty-subtitle Click the button to sign in.
    .empty-action
      router-link.btn.btn-primary(to='/auth') Sign in
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .empty {
    .icon {
      font-size: 4rem;
    }
  }
</style>
