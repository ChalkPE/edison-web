<template lang="pug">
  .columns: .column.col-5.centered
    form
      .form-group
        label.form-label(for='username') Username
        input.form-input#username(v-model='username', :class='errorClass', type='text', placeholder='Username')

      .form-group
        label.form-label(for='password') Password
        input.form-input#password(v-model='password', :class='errorClass', type='password', placeholder='Password')

      .form-group
        div(:class='errorClass')
        p.form-input-hint.pb-5(v-if='error')
          i.icon.icon-cross
          | &nbsp;{{ error }}
        div.pt-5(v-else)
        button.btn.btn-primary.btn-block(@click='auth') Authenticate
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data: () => ({ username: '', password: '', error: null }),

    created () {
      if (this.token) this.$router.push('/')
    },

    computed: {
      ...mapState(['token']),

      errorClass (state) {
        return this.error && 'is-error'
      }
    },

    methods: {
      auth () {
        this.$store.dispatch('auth', {
          username: this.username,
          password: this.password
        })
        .then(() => this.$router.push('/'))
        .catch(err => (this.error = err.response ? err.response.data && err.response.data.message : err.message))
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
