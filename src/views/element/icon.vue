<template>
  <div class="element-icon">
    <p>1.font awesome</p>
    <div class="showIcon">
      <div v-for="(item, index) in fontawesomeData" :key="index">
        <rs-icon :icon="item.name"></rs-icon>
        <p>fa-{{item.name}}</p>
      </div>
    </div>
    <p>2.iconfont</p>
    <div class="showIcon">
      <div v-for="(item, index) in iconfontData" :key="index">
        <rs-icon :icon="item.name" iconType="iconfont"></rs-icon>
        <p>icon-{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import rsIcon from '@/components/rsIcon'
import fontawesomeData from './fontawesome.json'
import iconfontData from './iconfont.json'
export default {
  name: 'elementIcon',
  components: {
    rsIcon
  },
  data () {
    return {
      msg: '',
      fontawesomeData: [],
      iconfontData: []
    }
  },
  mounted () {
    this.fontawesomeData = [].concat(fontawesomeData.data)
    this.iconfontData = [].concat(iconfontData.data)
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
      width 100px
      height 60px
      vertical-align middle
      border 2px solid skyblue
      border-radius 6px
      box-shadow 0px 4px 30px rgba(0, 0, 0, .1) inset
      padding-top 10px
      .fa, .iconfont
        transition all .1s linear
        cursor pointer
        &:hover
          transform scale(2)
          color #41b6e6
      .iconfont
        display inline-block
      p
        margin 4px 0px
</style>
