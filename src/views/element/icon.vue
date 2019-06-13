<template>
  <div class="element-icon">
    <h4>1.font awesome</h4>
    <div class="showIcon">
      <div v-for="(item, index) in fontawesomeData" :key="index">
        <rs-icon :icon="item.name"></rs-icon>
        <p>fa-{{item.name}}</p>
      </div>
    </div>
    <h4>2.iconfont</h4>
    <div class="showIcon">
      <div v-for="(item, index) in iconfontData" :key="index">
        <rs-icon :icon="item.name" iconType="iconfont"></rs-icon>
        <p>icon-{{item.name}}</p>
      </div>
    </div>
    <hr>
    <h3>属性</h3>
    <table border="1" style="width:100%;">
      <thead>
        <tr>
          <th>字段</th>
          <th>类型</th>
          <th>参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>-</td>
          <td>图标图案</td>
        </tr>
        <tr>
          <td>iconType</td>
          <td>String</td>
          <td>fa | iconfont</td>
          <td>图标类型</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsIcon from '@/components/rsIcon'
import fontawesomeData from '@/components/rsIcon/fontawesome.json'
import iconfontData from '@/components/rsIcon/iconfont.json'
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
  margin-bottom 150px
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
      transition all .2s linear
      .fa, .iconfont
        transition all .1s linear
        cursor pointer
        &:hover
          transform scale(2)
          color #41b6e6
      &:hover
        box-shadow 0px 4px 30px rgba(0, 0, 0, .4)
      .iconfont
        display inline-block
      p
        margin 4px 0px
</style>
