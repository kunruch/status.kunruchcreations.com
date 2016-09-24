<template lang="pug">
  div
    h1(class="title") {{msg}}
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world! How are ya?'
    }
  }
}
</script>

<style lang="scss">
  .title {
    color: #222;
    text-align: center;
  }
</style>
