<template>
  <div class="rs-quote">
    <div :class="['rs-quote-context', quoteType]">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rsQuote',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    quoteType () {
      return `rs-quote-${this.type}`
    }
  }
}
</script>

<style lang="stylus">
.rs-quote
  .rs-quote-context
    border-radius 4px
    text-align left
    & > div
      padding 6px 6px 6px 10px
    a
      text-decoration none
      &:hover
        text-decoration underline
  // 颜色设置
  .rs-quote-primary
    background #ECF8FF
    border-left 4px solid #50bfff
    a
      color #409EFF
  .rs-quote-success
    background #cbfbb3
    border-left 4px solid #85ce61
    a
      color #0ec324
  .rs-quote-warn
    background #f1d1a2
    border-left 4px solid #e6a23c
    a
      color #b9730d
  .rs-quote-danger
    background #f5b2b2
    border-left 4px solid #f56c6c
    a
      color #c10f0f
</style>
