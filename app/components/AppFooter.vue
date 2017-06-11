<template lang="pug">
  footer
    section.container.grid-960
      p
        a(href='https://www.facebook.com/jnjcomu/') Facebook
        | &nbsp;|&nbsp;
        a(href='https://github.com/jnjcomu/edison-web.git') GitHub Repository
        | &nbsp;|&nbsp;
        a(href='mailto:chalkpe@gmail.com') Contact
      p
        | Copyright &copy; 2017&nbsp;
        a(href='https://github.com/jnjcomu') JNJ Communications
        | . Licensed under the&nbsp;
        a(href='http://opensource.org/licenses/mit-license.php') MIT License
        | .
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less">
  @import '~spectre.css/src/variables.less';

  footer {
    color: @gray-color;
    background-color: @bg-color;
    padding: 3 * @layout-padding;

    a {
      color: @gray-color-dark;
    }
  }
</style>
