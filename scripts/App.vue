<template>
  <div class="container-readable">
    <div v-for="apikey in apiKeys">
        <uptime-stats :apikey="apikey"></uptime-stats>
    </div>
  </div>
</template>

<script>
import UptimeStats from './components/UptimeStats.vue'
import {apiKeys} from './uptimerobot.js'

export default {
  components: {
    UptimeStats
  },
  data () {
    return {
      apiKeys: apiKeys
    }
  }
}
</script>
