<template>
  <div class="rs-icon">
    <!-- <p>1.vue-feather-icons</p>
    <activity-icon></activity-icon> -->
    <i :class="[iconfontType]"></i>
  </div>
</template>

<script>
import { ActivityIcon } from 'vue-feather-icons'
export default {
  name: 'rsIcon',
  components: {
    ActivityIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'fa'
    }
  },
  computed: {
    iconfontType () {
      let str = ''
      if (this.iconType) str = `fa fa-${this.icon}`
      if (this.iconType === 'iconfont') str = `iconfont icon-${this.icon}`
      return str
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.rs-icon
  display inline-block
</style>
