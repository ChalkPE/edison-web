<template lang="pug">
  .columns: .column.col-5.centered
    form
      .form-group
        label.form-label(for='username') Username
        input.form-input#username(type='text', placeholder='Username')
      .form-group
        label.form-label(for='password') Password
        input.form-input#password(type='password', placeholder='Password')

      .form-group.pt-10
        button.btn.btn-primary.btn-block Authenticate
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>

</style>
