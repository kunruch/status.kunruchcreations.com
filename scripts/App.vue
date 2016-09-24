<template>
  <div class="container-readable">
    <div v-for="obj in uptimestats">
        <uptime :item="obj"></post>
    </div>
  </div>
</template>

<script>
import Uptime from './components/Uptime.vue'

export default {
  components: {
    Uptime
  },
  data () {
    return {
      uptimestats: [
        {name: "KunRuch Creations"},
        {name: "Super Dev Resources"}
      ]
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
