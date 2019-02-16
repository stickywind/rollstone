<template>
  <div class="rsPayInput">
    <div class="payInputContainer">
      <input type="text" class="realInput" maxlength="6" v-model="realValue" ref="input">
      <div class="shamInput">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[0]">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[1]">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[2]">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[3]">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[4]">
        <input type="text" maxlength="1" disabled v-model="shamInputArr[5]">
      </div>
    </div>
    <input type="text" :value="value">
  </div>
</template>

<script>
export default {
  name: 'rsPayInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      realValue: '1',
      shamInputArr: [],
      maxLength: 6
    }
  },
  // computed: {
  //   realValue () {
  //     return this.value
  //   }
  // },
  mounted () {
    this.realValue = this.value
    console.log(this.realValue)
    this.setValue()
  },
  methods: {
    setValue () {
      this.realValue = this.realValue.replace(/\D/g, '')
      let valueStr = this.realValue
      for (let i = 0; i < this.maxLength; i++) {
        this.shamInputArr[i] = valueStr[i] ? valueStr[i] : ''
      }
    }
  },
  watch: {
    value (val) {
      this.setValue()
    },
    realValue (val) {
      this.setValue()
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
