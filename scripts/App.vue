<template>
  <div class="container-readable">
    <p class="section-medium" v-show="loading">Loading...</p>
    <div v-for="apikey in apiKeys">
        <uptime-stats :apikey="apikey"></uptime-stats>
    </div>
  </div>
</template>

<script>
import UptimeStats from './components/UptimeStats.vue'
import {apiKeys} from './uptimerobot.js'
import bus from './bus.js'

export default {
  components: {
    UptimeStats
  },
  data () {
    return {
      loading: true,
      apiKeys: apiKeys
    }
  },
  created() {
    bus.on('loaded', () => {
      this.loading = false;
    });
  }
}
</script>
