<template>
  <div class="rs-switch">
    <!-- <p>1.vue-feather-icons</p>
    <activity-icon></activity-icon> -->
    <i :class="['fa', `fa-${icon}`]"></i>
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
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
