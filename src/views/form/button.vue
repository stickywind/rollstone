<template>
  <div class="form-button">
    <h4>1.ele按钮</h4>
    <div>
      <rs-button>
        默认按钮
      </rs-button>
      <rs-button
        type="primary">
        主要按钮
      </rs-button>
      <rs-button
        type="success">
        成功按钮
      </rs-button>
      <rs-button
        type="warn">
        警告按钮
      </rs-button>
      <rs-button
        type="danger">
        危险按钮
      </rs-button>
    </div>
    <h4>2.按钮大小</h4>
    <div>
      <rs-button
        size="mini">
        默认按钮
      </rs-button>
      <rs-button
        size="small">
        默认按钮
      </rs-button>
      <rs-button
        size="medium">
        默认按钮
      </rs-button>
      <rs-button
        size="normal">
        默认按钮
      </rs-button>
    </div>
    <h4>3.圆角按钮</h4>
    <div>
      <rs-button
        round>
        默认按钮
      </rs-button>
      <rs-button
        type="primary"
        round>
        主要按钮
      </rs-button>
      <rs-button
        type="success"
        round>
        成功按钮
      </rs-button>
      <rs-button
        type="warn"
        round>
        警告按钮
      </rs-button>
      <rs-button
        type="danger"
        round>
        危险按钮
      </rs-button>
    </div>
    <h4>4.圆形按钮</h4>
    <div>
      <rs-button
        circle>
        <span style="display: inline-block;width: 16px;height: 16px;">1</span>
      </rs-button>
      <rs-button
        type="primary"
        circle>
        <span style="display: inline-block;width: 16px;height: 16px;">2</span>
      </rs-button>
      <rs-button
        type="success"
        circle>
        <span style="display: inline-block;width: 16px;height: 16px;">3</span>
      </rs-button>
      <rs-button
        type="warn"
        circle>
        <span style="display: inline-block;width: 16px;height: 16px;">4</span>
      </rs-button>
      <rs-button
        type="danger"
        circle>
        <span style="display: inline-block;width: 16px;height: 16px;">5</span>
      </rs-button>
    </div>
    <h4>5.禁用状态</h4>
    <div>
      <rs-button
        disabled>
        默认按钮
      </rs-button>
      <rs-button
        type="primary"
        disabled>
        主要按钮
      </rs-button>
      <rs-button
        type="success"
        disabled>
        成功按钮
      </rs-button>
      <rs-button
        type="warn"
        disabled>
        警告按钮
      </rs-button>
      <rs-button
        type="danger"
        disabled>
        危险按钮
      </rs-button>
    </div>
    <h4>6.嵌套图标</h4>
    <div>
      <div class="colspanDiv">
        <rs-button
          disabled>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="primary"
          disabled>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="success"
          disabled>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="warn"
          disabled>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="danger"
          disabled>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
      </div>
      <div class="colspanDiv">
        <rs-button
          round>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="primary"
          round>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="success"
          round>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="warn"
          round>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="danger"
          round>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
      </div>
      <div class="colspanDiv">
        <rs-button
          circle>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="primary"
          circle>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="success"
          circle>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="warn"
          circle>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="danger"
          circle>
          <rs-icon icon="check"></rs-icon>
        </rs-button>
      </div>
      <div class="colspanDiv">
        <rs-button>
          默认按钮
        </rs-button>
        <rs-button
          type="primary">
          <rs-icon icon="check"></rs-icon> 主要按钮
        </rs-button>
        <rs-button
          type="success">
          成功按钮 <rs-icon icon="check"></rs-icon>
        </rs-button>
        <rs-button
          type="warn">
          <rs-icon icon="bars"></rs-icon> 警告按钮
        </rs-button>
        <rs-button
          type="danger">
          危险按钮 <rs-icon icon="times"></rs-icon>
        </rs-button>
      </div>
    </div>
    <h4>7.波纹动画按钮</h4>
    <div class="colspanDiv">
      <rs-button
        hamon>
        默认按钮
      </rs-button>
      <rs-button
        type="primary"
        hamon>
        主要按钮
      </rs-button>
      <rs-button
        type="success"
        hamon>
        成功按钮
      </rs-button>
      <rs-button
        type="warn"
        hamon>
        警告按钮
      </rs-button>
      <rs-button
        type="danger"
        hamon>
        危险按钮
      </rs-button>
    </div>
    <div class="colspanDiv">
      <rs-button
        type="primary"
        hamon>
        <rs-icon icon="check"></rs-icon> 主要按钮
      </rs-button>
    </div>
    <h4>8.点击事件click</h4>
    <div>
      <rs-button @click="test()">
        默认按钮
      </rs-button>
      <rs-button
        hamon
        @click="test">
        默认按钮
      </rs-button>
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
          <td>size</td>
          <td>String</td>
          <td>normal | medium | small | mini</td>
          <td>大小</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>primary | success | warn | danger</td>
          <td>按钮类型</td>
        </tr>
        <tr>
          <td>round</td>
          <td>Boolean</td>
          <td>false | true</td>
          <td>圆角</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>Boolean</td>
          <td>false | true</td>
          <td>圆型按钮</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false | true</td>
          <td>禁用状态</td>
        </tr>
        <tr>
          <td>hamon</td>
          <td>Boolean</td>
          <td>false | true</td>
          <td>波纹Canvas</td>
        </tr>
      </tbody>
    </table>
    <h3>方法</h3>
    <table border="1" style="width:100%;">
      <thead>
        <tr>
          <th>事件</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击事件</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsButton from '@/components/rsButton'
import rsIcon from '@/components/rsIcon'
export default {
  name: 'formButton',
  components: {
    rsButton,
    rsIcon
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    test () {
      alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.form-button
  margin-bottom 200px
.colspanDiv
  margin 10px 0px
</style>
