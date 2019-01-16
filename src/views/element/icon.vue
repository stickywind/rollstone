<template>
  <div class="element-icon">
    <p>1.font awesome</p>
    <div class="showIcon">
      <div>
        <rs-icon icon="circle"></rs-icon>
        <p>fa-circle</p>
      </div>
      <div>
        <rs-icon icon="times"></rs-icon>
        <p>fa-times</p>
      </div>
    </div>
  </div>
</template>

<script>
import rsIcon from '@/components/rsIcon'
export default {
  name: 'elementIcon',
  components: {
    rsIcon
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.element-icon
  .showIcon
    &>div
      display inline-block
      margin 0 10px
      .fa
        transition all .2s linear
        cursor pointer
        &:hover
          transform scale(2)
      p
        margin 4px 0px
</style>
