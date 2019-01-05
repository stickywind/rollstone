<template>
  <div class="rs-button">
    <button :class="[rsBtnType, rsBtnSize]">11</button>
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
    }
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
  .rs-btn-success
    color #fff
    background-color #67c23a
    border-color #67c23a
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
</style>
