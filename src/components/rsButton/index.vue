<template>
  <div class="rs-button">
    <button :class="[rsBtnType, rsBtnSize, rsRound]"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'rsButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    round: Boolean
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    rsBtnType () {
      return (this.type !== '' ? `rs-btn-${this.type}` : '')
    },
    rsBtnSize () {
      return (this.size !== '' ? `rs-btn-${this.size}` : '')
    },
    rsRound () {
      return this.round ? `rs-btn-round` : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.rs-button
  display inline-block
  button
    line-height 1
    white-space nowrap
    cursor pointer
    background #fff
    border 1px solid #dcdfe6
    border-color #dcdfe6
    color #606266
    -webkit-appearance none
    text-align center
    box-sizing border-box
    outline none
    margin 0
    transition .1s
    font-weight 500
    -moz-user-select none
    -webkit-user-select none
    -ms-user-select none
    padding 12px 20px
    font-size 14px
    border-radius 4px
  // 按钮颜色组
  button
    &:focus
      background #ecf5ff
      border-color #c6e2ff
      color #409eff
    &:hover
      background #ecf5ff
      border-color #c6e2ff
      color #409eff
    &:active
      outline none
      border-color #3a8ee6
      color #3a8ee6
  .rs-btn-success
    color #fff
    background-color #67c23a
    border-color #67c23a
    &:focus
      background #85ce61
      border-color #85ce61
      color #fff
    &:hover
      background #85ce61
      border-color #85ce61
      color #fff
    &:active
      color #fff
      background #5daf34
      border-color #5daf34
  .rs-btn-primary
    color #fff
    background-color #409eff
    border-color #409eff
    &:focus
      background #66b1ff
      border-color #66b1ff
      color #fff
    &:hover
      background #66b1ff
      border-color #66b1ff
      color #fff
    &:active
      color #fff
      background #3a8ee6
      border-color #3a8ee6
  .rs-btn-warn
    color #fff
    background-color #e6a23c
    border-color #e6a23c
    &:focus
      background #ebb563
      border-color #ebb563
      color #fff
    &:hover
      background #ebb563
      border-color #ebb563
      color #fff
    &:active
      color #fff
      background #cf9236
      border-color #cf9236
  .rs-btn-danger
    color #fff
    background-color #f56c6c
    border-color #f56c6c
    &:focus
      background #f78989
      border-color #f78989
      color #fff
    &:hover
      background #f78989
      border-color #f78989
      color #fff
    &:active
      color #fff
      background #dd6161
      border-color #dd6161
  // 按钮组大小
  .rs-btn-mini
    padding 7px 15px
    font-size 12px
    border-radius 3px
  .rs-btn-small
    padding 9px 15px
    font-size 12px
    border-radius 3px
  .rs-btn-medium
    padding 10px 20px
    font-size 14px
    border-radius 4px
  // 圆角
  .rs-btn-round
    border-radius 20px
</style>
