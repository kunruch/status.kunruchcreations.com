<template lang="pug">
  div.container-readable
    .status-item.section
      .media.media-left
        .thumbnail-small.thumbnail-rounded.up
          | <svg class="icon icon-check"><use xlink:href="#icon-check"></use></svg>
        .media-body
          h2.h3.entry-title
            a(href="https://kunruchcreations.com/" target="_blank")
              | {{item.name}}
              span.entry-meta (kunruchcreations.com)
          div.text-muted
            span Status: UP
      .uptime.highlight
        h3 Uptime
        .grid
          .one-third
            strong.text-large 100%
            div 24hr
          .one-third
            strong.text-large 100%
            div week
          .one-third
            strong.text-large 100%
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
  .title {
    color: #222;
    text-align: center;
  }
</style>
