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
      .uptime.highlight
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
      h3.text-center Response Time Graph
</template>


<script>
export default {
  name: 'Uptime',
  props: ['item']
}
</script>

<style lang="scss">
</style>
