<template>
  <div class="rs-backtop">
    <span @click="backTop"><rs-icon icon="caret-up"></rs-icon></span>
  </div>
</template>

<script>
import rsIcon from '../rsIcon'
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'rsBackTop',
  components: {
    rsIcon
  },
  data () {
    return {
      scrollAni: null,
      scrollTop: null
    }
  },
  mounted () {
    const bt = document.getElementsByClassName('rs-backtop')[0]
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    window.onscroll = () => {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 200) {
        bt.style.display = 'block'
      } else {
        bt.style.display = 'none'
      }
    }
  },
  methods: {
    backTop () {
      this.scrollTo()
    },
    scrollTo () {
      clearInterval(this.scrollAni)
      this.scrollAni = setInterval(() => {
        document.documentElement.scrollTop -= 100
        // document.body.scrollTop -= 100
        if (document.documentElement.scrollTop <= 0) clearInterval(this.scrollAni)
        // if (document.body.scrollTop && document.body.scrollTop <= 0) clearInterval(this.scrollAni)
      }, 10)
    }
  },
  destroyed () {
    window.onscroll = () => {}
  }
}
</script>

<style lang="stylus">
.rs-backtop
  position fixed
  right 30px
  bottom 50px
  cursor pointer
  display none
  span
    color #409eff
    border-radius 50%
    padding 10px
    border 1px solid #ccc
    // box-shadow 0px -10px 10px transparent, 2px 2px 10px rgba(0, 0, 0, .4), -2px 2px 10px rgba(0, 0, 0, .4)
    transition all .2s linear
    background white
    i
      width 16px
  &:active
    span
      background #ddd
      border 1px solid white
</style>
