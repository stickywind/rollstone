<template>
  <div class="form-button">
    <p>1.ele按钮</p>
    <h4>1</h4>
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
    <h4>2</h4>
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
    <h4>3</h4>
    <div>
      <rs-button @click.native="test">
        默认按钮
      </rs-button>
    </div>
    <h4>4</h4>
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
    <h4>5</h4>
    <div>
      <rs-button
        circle>
        1
      </rs-button>
      <rs-button
        type="primary"
        circle>
        2
      </rs-button>
      <rs-button
        type="success"
        circle>
        3
      </rs-button>
      <rs-button
        type="warn"
        circle>
        4
      </rs-button>
      <rs-button
        type="danger"
        circle>
        5
      </rs-button>
    </div>
    <h4>6</h4>
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
    <hr>
    <table border="1" style="width:100%;">
      <thead>
        <tr>
          <th>字段</th>
          <th>类型</th>
          <th>参数</th>
          <th>说明</th>
        </tr>
      </thead>
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
    </table>
  </div>
</template>

<script>
import rsButton from '@/components/rsButton'
export default {
  name: 'Button',
  components: {
    rsButton
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    test () {
      alert()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
