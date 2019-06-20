<template>
  <div class="element-animation">
    <h4>1.动画过渡效果 渐变 滑动渐变 fade slide-fade</h4>
    <div class="showAni">
      <div>
        <rs-button hamon @click="showFadeAni()">click this</rs-button>
      </div>
      <div class="tradBox">
        <transition name="fade" style="overflow: hidden;">
          <div v-show="showFade" class="showTest">fade</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="slide-top-fade">
          <div v-show="showFade" class="showTest">slide-top-fade</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="slide-left-fade">
          <div v-show="showFade" class="showTest">slide-left-fade</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="slide-bottom-fade">
          <div v-show="showFade" class="showTest">slide-bottom-fade</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="slide-right-fade">
          <div v-show="showFade" class="showTest">slide-right-fade</div>
        </transition>
      </div>
    </div>
    <h4>2.动画效果 缩放 zoom</h4>
    <div class="showAni">
      <div>
        <rs-button hamon @click="showZoomAni()">click this</rs-button>
      </div>
      <div class="tradBox">
        <transition name="zoom">
          <div v-show="showZoom" class="showTest">zoom</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="zoom-hor-center">
          <div v-show="showZoom" class="showTest">zoom-hor-center</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="zoom-ver-center">
          <div v-show="showZoom" class="showTest">zoom-ver-center</div>
        </transition>
      </div>
      <div class="tradBox">
        <transition name="zoom-top">
          <div v-show="showZoom" class="showTest">zoom-top</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import rsButton from '@/components/rsButton'
export default {
  name: 'elementAnimation',
  components: {
    rsButton
  },
  data () {
    return {
      showFade: true,
      showZoom: true
    }
  },
  methods: {
    showFadeAni () {
      this.showFade = !this.showFade
    },
    showZoomAni () {
      this.showZoom = !this.showZoom
    }
  }
}
</script>

<style lang="stylus">
.element-animation
  margin-bottom 150px
  .showAni
    &:after
      clear both
      content ""
      display block
  .tradBox
    margin-top 20px
    height 200px
    float left
    width 250px
  .showTest
    background #409eff
    color white
    border-radius 6px
    width 180px
    height 150px
    line-height 150px
    text-align center
    display inline-block
</style>
