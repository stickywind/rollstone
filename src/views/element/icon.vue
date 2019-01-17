<template>
  <div class="element-icon">
    <p>1.font awesome</p>
    <div class="showIcon">
      <div v-for="(item, index) in fontData" :key="index">
        <rs-icon :icon="item.name"></rs-icon>
        <p>fa-{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import rsIcon from '@/components/rsIcon'
import fontawesomeData from './fontawesome.json'
export default {
  name: 'elementIcon',
  components: {
    rsIcon
  },
  data () {
    return {
      msg: '',
      fontData: []
    }
  },
  mounted () {
    this.fontData = [].concat(fontawesomeData.data)
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
      margin 10px 10px
      .fa
        transition all .1s linear
        cursor pointer
        &:hover
          transform scale(2)
          color #41b6e6
      p
        margin 4px 0px
</style>
