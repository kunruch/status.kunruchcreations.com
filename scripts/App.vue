<template>
  <div class="container-readable">
    <div v-for="obj in uptimestats">
        <uptime-stats :item="obj"></uptime-stats>
    </div>
  </div>
</template>

<script>
import UptimeStats from './components/UptimeStats.vue'
import {apiKeys, getApiRequest, getStatusFromCode} from './uptimerobot.js'

export default {
  components: {
    UptimeStats
  },
  data () {
    return {
      uptimestats: []
    }
  },
  created() {
    for (var index = 0; index < apiKeys.length; index++) {
      var api_request = getApiRequest(apiKeys[index]);
      this.$http.get(api_request)
      .then(function(resp){
        if(resp.data.stat == "ok") {
          var uptimeData = resp.data.monitors.monitor[0];
          console.log(JSON.stringify(uptimeData));

          var uptime = uptimeData.customuptimeratio.split("-");
          uptimeData.day = uptime[0];
          uptimeData.month = uptime[1];
          uptimeData.week = uptime[2];

          uptimeData.status = getStatusFromCode(uptimeData.status).toUpperCase();

          this.uptimestats.push(uptimeData);
        }
        else {
          console.log("Failed for " + api_request);
        }
      });
    }
  }
}
</script>

<style lang="scss">
</style>
