<template lang="pug">
  div.container-readable
    .section
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
      bar-chart(v-bind:responseTimes="item.responsetime")
      .uptime
        h3 Uptime
        .grid
          .one-third
            strong.text-large {{ item.day }}%
            div 24hr
          .one-third
            strong.text-large {{ item.week }}%
            div week
          .one-third
            strong.text-large {{ item.month }}%
            div 30 days
</template>


<script>
import BarChart from './BarChart.vue'

export default {
  name: 'Uptime',
  props: ['item'],
  components: { BarChart }
}
</script>
