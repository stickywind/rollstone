<template>
  <div class="rs-button">
    <button :class="[rsBtnType, rsBtnSize, rsRound, rsCircle, rsDisabled, rsSpread]" @click="handleClick">
      <canvas class="hamonCan" v-if="hamon" @click="rippleCanvas"></canvas>
      <slot></slot>
    </button>
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
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    hamon: Boolean,
    spread: Boolean
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ele: null,
      initialized: false,
      timer: null,
      speed: 3,
      opacity: 0.4,
      speedOpacity: 0,
      radius: 0,
      origin: {},
      context: null,
      color: ''
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
    },
    rsCircle () {
      return this.circle ? `rs-btn-circle` : ''
    },
    rsDisabled () {
      return this.disabled ? `rs-btn-disabled` : ''
    },
    rsSpread () {
      return this.spread ? `rs-btn-spread` : ''
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    initCanvas (el) {
      const oBtn = el.parentElement
      this.color = this.getStyle(el.parentElement, 'color')
      // canvas 宽和高
      el.width = this.getStyleNumber(oBtn, 'width')
      el.height = this.getStyleNumber(oBtn, 'height')
      // 透明度的速度
      this.speedOpacity = (this.speed / el.width) * this.opacity
      this.context = el.getContext('2d')
    },
    rippleCanvas (event) {
      // 清除上次没有执行的动画
      if (this.timer) {
        window.cancelAnimationFrame(this.timer)
      }
      this.ele = event.target
      // 执行初始化
      if (!this.initialized) {
        this.initialized = true
        this.initCanvas(this.ele)
      }
      this.radius = 0
      // 点击坐标原点
      this.origin.x = event.offsetX
      this.origin.y = event.offsetY
      this.context.clearRect(0, 0, this.ele.width, this.ele.height)
      this.ele.style.opacity = this.opacity
      this.drawCanvas()
    },
    drawCanvas () {
      this.context.beginPath()
      // 绘制波纹
      this.context.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI, false)
      this.context.fillStyle = this.color
      this.context.fill()
      // 定义下次的绘制半径和透明度
      this.radius += this.speed
      this.ele.style.opacity -= this.speedOpacity
      // 通过判断半径小于元素宽度或者还有透明度，不断绘制圆形
      if (this.radius < this.ele.width || this.ele.style.opacity > 0) {
        this.timer = window.requestAnimationFrame(this.drawCanvas)
      } else {
        // 清除画布
        this.context.clearRect(0, 0, this.ele.width, this.ele.height)
        this.ele.style.opacity = 0
      }
    },
    destroyed () {
      // 清除上次没有执行的动画
      if (this.timer) {
        window.cancelAnimationFrame(this.timer)
        this.timer = null
      }
    },
    getStyle (el, attr, pseudoClass = null) {
      return window.getComputedStyle(el, pseudoClass)[attr]
    },
    getStyleNumber (el, attr, pseudoClass = null) {
      try {
        const val = this.getStyle(el, attr, pseudoClass)
        return parseFloat(val)
      } catch (e) {
        console.error(e)
      }
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
    // overflow hidden
    position relative
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
  // 圆角-圆形
  .rs-btn-circle
    border-radius 50%
    padding 12px
  // 禁用
  button.rs-btn-disabled
    color #c0c4cc
    cursor not-allowed
    background-color #fff
    border-color #ebeef5
  .rs-btn-primary.rs-btn-disabled
    color #fff
    background-color #a0cfff
    border-color #a0cfff
  .rs-btn-success.rs-btn-disabled
    color #fff
    background-color #b3e19d
    border-color #b3e19d
  .rs-btn-warn.rs-btn-disabled
    color #fff
    background-color #f3d19e
    border-color #f3d19e
  .rs-btn-danger.rs-btn-disabled
    color #fff
    background-color #fab6b6
    border-color #fab6b6
  // 波纹Canvas
  .hamonCan
    opacity 0
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  // 扩散spread
  .rs-btn-spread
    &:before
      content ''
      position absolute
      top 0px
      left 0px
      right 0px
      bottom 0px
      border 3px solid
      filter blur(.5px)
      border-radius 4px
      opacity 0
    &:hover
      &:before
        animation spreadAni .8s linear 1
  .rs-btn-normal.rs-btn-spread
    &:before
      border-color #dcdfe6
  .rs-btn-primary.rs-btn-spread
    &:before
      border-color #409eff
  .rs-btn-success.rs-btn-spread
    &:before
      border-color #67c23a
  .rs-btn-warn.rs-btn-spread
    &:before
      border-color #e6a23c
  .rs-btn-danger.rs-btn-spread
    &:before
      border-color #f56c6c

@keyframes spreadAniReturn {
  0% {
    transform scale(1)
    opacity 1
  }
  25% {
    transform scaleY(1.1, 1.4)
    opacity 0.5
  }
  50% {
    transform scale(1.1, 1.4)
    opacity 0
  }
  75% {
    transform scale(1.1, 1.4)
    opacity 0.5
  }
  100% {
    transform scale(1)
    opacity 1
  }
}
@keyframes spreadAni {
  0% {
    transform scale(1)
    opacity 1
  }
  50% {
    transform scaleY(1.15, 1.4)
    opacity 0.5
  }
  100% {
    transform scale(1.15, 1.4)
    opacity 0
  }
}
</style>
