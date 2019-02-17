<template>
  <div class="rs-badge">
    <slot></slot>
    <span :class="['badgeItem', badgeType, badgeDot]">{{badgeValue}}</span>
  </div>
</template>

<script>
export default {
  name: 'rsBadge',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number
    },
    dot: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    badgeValue () {
      let str = this.value
      if (this.dot) str = ''
      if (this.max && (this.value > this.max) && (typeof this.value === 'number')) str += '+'
      return str
    },
    badgeType () {
      return `rs-badge-${this.type}`
    },
    badgeDot () {
      return this.dot ? 'rs-badge-dot' : ''
    }
  }
}
</script>

<style lang="stylus">
.rs-badge
  display inline-block
  position relative
  .badgeItem
    font-size 12px
    position absolute
    top -8px
    right -22px
    background red
    color white
    padding 2px 6px
    border-radius 10px
    border 1px solid #fff
  // 标记样式
  .rs-badge-primary
    background-color #409eff
  .rs-badge-success
    background-color #67c23a
  .rs-badge-warn
    background-color #e6a23c
  .rs-badge-danger
    background-color #f56c6c
  .rs-badge-dot
    padding 4px
    border-radius 50%
    top -4px
    right -6px
</style>
