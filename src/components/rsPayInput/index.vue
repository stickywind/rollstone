<template>
  <div class="rsPayInput">
    <div class="payInputContainer">
      <input
        type="number"
        class="realInput"
        ref="input"
        :value="realValue"
        @input="handleInput"
        @focus="setInputActive(1)"
        @blur="setInputActive(0)">
      <div :class="[payInputActive, 'shamInput', pwdInput]">
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
      default: 'number'
    }
  },
  data () {
    return {
      realValue: '',
      shamInputArr: [],
      maxLength: 6,
      payInputActive: ''
    }
  },
  computed: {
    pwdInput () {
      let str = this.type === 'password' ? 'shamInputPwd' : ''
      return str
    }
  },
  mounted () {
    this.setValue(this.value)
  },
  methods: {
    setValue (value) {
      let valueStr = this.realValue
      for (let i = 0; i < this.maxLength; i++) {
        this.shamInputArr[i] = valueStr[i] ? valueStr[i] : ''
      }
    },
    handleInput (event) {
      this.realValue = event.target.value
      if (event.target.value.length > 6) this.realValue = event.target.value.slice(0, 6)
      // 设置当前值
      // v-model :value 和 @input的语法糖
      this.$emit('input', this.realValue)
      this.$emit('change', this.realValue)
    },
    setInputActive (flag) {
      if (flag === 1) {
        this.payInputActive = 'payInputActive'
      } else {
        this.payInputActive = ''
      }
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
    width 252px
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
      -moz-appearance textfield
      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
        -webkit-appearance none
        appearance none
        margin 0
    .shamInput
      width 100%
      height 100%
      overflow hidden
      position absolute
      z-index 0
      text-align center
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
        padding-left 14px
        &:first-child
          border-radius 7px 0 0 7px
          border-left #C3C3C3 2px solid
        &:last-child
          border-radius 0 7px 7px 0
          border-right  #C3C3C3 2px solid
    .shamInputPwd
      input
        padding-left 0px
        font-size 50px
    .payInputActive input
      border #409eff 1px solid
      border-top #409eff 2px solid
      border-bottom #409eff 2px solid
      &:first-child
        border-left #409eff 2px solid
      &:last-child
        border-right  #409eff 2px solid
</style>
