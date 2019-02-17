<template>
  <div class="rsPayInput">
    <div class="payInputContainer">
      <input type="text" class="realInput" maxlength="6" ref="input" :value="realValue" @input="handleInput" @change="handleChange">
      <div class="shamInput">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[0]">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[1]">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[2]">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[3]">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[4]">
        <input :type="type" maxlength="1" disabled v-model="shamInputArr[5]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rsPayInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      realValue: '',
      shamInputArr: [],
      maxLength: 6
    }
  },
  mounted () {
    this.setValue(this.value)
  },
  methods: {
    setValue (value) {
      this.realValue = value.replace(/\D/g, '')
      let valueStr = this.realValue
      for (let i = 0; i < this.maxLength; i++) {
        this.shamInputArr[i] = valueStr[i] ? valueStr[i] : ''
      }
    },
    handleInput (event) {
      const value = event.target.value
      // 设置当前值
      // v-model :value 和 @input的语法糖
      this.$emit('input', value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    }
  },
  watch: {
    value (val) {
      this.setValue(val)
    }
  }
}
</script>

<style lang="stylus">
.rsPayInput
  display inline-block
  .payInputContainer
    width 282px
    height 40px
    position relative
    text-align center
    .realInput
      width 100%
      height 100%
      padding 0px
      border 0px
      position absolute
      top 0
      left 0
      z-index 1
      // filter alpha(opacity = 0)
      -moz-opacity 0
      opacity 0
    .shamInput
      width 100%
      height 100%
      overflow hidden
      position absolute
      z-index 0
      text-align center
      margin 0 15px
      input
        padding 0
        width 42px
        height 100%
        float left
        background #ffffff
        text-align center
        font-size 20px
        border #C3C3C3 1px solid
        border-top #C3C3C3 2px solid
        border-bottom #C3C3C3 2px solid
        box-sizing border-box
        &:first-child
          border-radius 7px 0 0 7px
          border-left #C3C3C3 2px solid
        &:last-child
          border-radius 0 7px 7px 0
          border-right  #C3C3C3 2px solid
</style>
