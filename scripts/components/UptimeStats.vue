<template lang="pug">
  div.container-readable(v-if="visible")
    .uptime-item-head
      .media.media-left
        .thumbnail-small.thumbnail-rounded.up(v-if="item.status == 'UP'")
          | <svg class="icon icon-check" v-bind:class="item.status"><use xlink:href="#icon-check"></use></svg>
        .thumbnail-small.thumbnail-rounded(v-else)
          | <svg class="icon icon-close" v-bind:class="item.status"><use xlink:href="#icon-close"></use></svg>
        .media-body
          h2.h3.entry-title
            a(v-bind:href="item.url" target="_blank")
              | {{ item.friendlyname }}
              span.entry-meta ({{ item.url }})
          div.entry-meta
            span Status: <strong>{{ item.status }}</strong>
            span Avg. Resoponse Time: <strong>{{ item. responseTimesAvg }}ms</strong>
      button.button-ghost(v-on:click="showDetails = !showDetails") {{ showDetails ? "Hide" : "Details" }}

    transition(name="slide-fade")
      .uptime-item-body(v-if="showDetails")
        bar-chart(v-bind:responseTimes="item.responsetime")
        .uptime
          .grid
            .one-fourth
              h3 Uptime
            .one-fourth
              strong.text-large {{ item.day }}%
              div 24hr
            .one-fourth
              strong.text-large {{ item.week }}%
              div week
            .one-fourth
              strong.text-large {{ item.month }}%
              div 30 days
</template>


<script>
import {getApiRequest, getStatusFromCode} from './../uptimerobot.js'
import BarChart from './BarChart.vue'

export default {
  name: 'Uptime',
  props: ['apikey'],
  components: { BarChart },

  data(){
    return {
      showDetails: false,
      visible: false,
      item: {
        friendlyname: "Loading..",
      }
    }
  },

  created() {
    var api_request = getApiRequest(this.apikey);
    this.$http.get(api_request)
      .then(function(resp) {
        if(resp.data.stat == "ok") {
          this.item = resp.data.monitors.monitor[0];
          //console.log(JSON.stringify(uptimeData));

          var uptime = this.item.customuptimeratio.split("-");
          this.item.day = uptime[0];
          this.item.month = uptime[1];
          this.item.week = uptime[2];

          this.item.status = getStatusFromCode(this.item.status).toUpperCase();

          var respTotal = 0;
          for (var i = 0; i < this.item.responsetime.length; i++) {
            respTotal = respTotal + parseInt(this.item.responsetime[i].value);
          }
          this.item.responseTimesAvg = (respTotal / this.item.responsetime.length).toFixed(2);

          this.visible = true;
        }
        else {
          console.log("Failed for " + api_request);
        }
      });

  }
}
</script>
