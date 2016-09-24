<template>
  <div class="container-readable">
    <div v-for="obj in uptimestats">
        <uptime :item="obj"></post>
    </div>
  </div>
</template>

<script>
import Uptime from './components/Uptime.vue'
import {apiKeys, getStatusFromCode} from './uptimerobot.js'

export default {
  components: {
    Uptime
  },
  data () {
    return {
      uptimestats: []
    }
  },
  created() {
    for (var index = 0; index < apiKeys.length; index++) {
      var api_request = "https://api.uptimerobot.com/getMonitors?apiKey="+ apiKeys[index] +"&responseTimes=1&responseTimesAverage=120&customUptimeRatio=1-7-30&format=json&noJsonCallback=1";
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
  .title {
    color: #222;
    text-align: center;
  }
</style>
