<template lang="pug">
  div.container-readable
    .status-item.section
      .media.media-left
        .thumbnail-small.thumbnail-rounded.up
          | <svg class="icon icon-check"><use xlink:href="#icon-check"></use></svg>
        .media-body
          h2.h3.entry-title
            a(href="https://kunruchcreations.com/" target="_blank")
              | {{ item.friendlyname }}
              span.entry-meta ({{ item.url }})
          div.text-muted
            span Status: {{ item.status }}
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
