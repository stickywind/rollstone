<template>
  <div class="element-badge">
    <h4>1.徽章/标记（字符串和数字）</h4>
    <div>
      <rs-badge :value="200" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="new" :max="99" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="old" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="hot" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="cold" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
    </div>
    <h4>2.超出数字最大值，设定max并且value是数字时</h4>
    <div>
      <rs-badge :value="200" :max="99" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
    </div>
    <h4>3.标记类型</h4>
    <div>
      <rs-badge value="cold" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="new" type="success" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="old" type="warn" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge value="hot" type="danger" class="badge-item">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
    </div>
    <h4>4.只有内容</h4>
    <div>
      <rs-badge value="hot" type="danger" class="badge-item">
        数据分析
      </rs-badge>
    </div>
    <h4>5.标记为点</h4>
    <div>
      <rs-badge dot class="badge-item">
        数据分析
      </rs-badge>
      <rs-badge dot class="badge-item" value="new" type="danger">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge dot class="badge-item" value="new">
        <rs-button hamon size="small">测试</rs-button>
      </rs-badge>
      <rs-badge dot class="badge-item">
        <rs-button hamon size="small"><rs-icon icon="check"></rs-icon></rs-button>
      </rs-badge>
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
          <td>type</td>
          <td>String</td>
          <td>primary | success | warn | danger</td>
          <td>标记类型</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>Boolean</td>
          <td>false | true</td>
          <td>标记圆点</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String | Number</td>
          <td>-</td>
          <td>显示内容</td>
        </tr>
        <tr>
          <td>max</td>
          <td>Number</td>
          <td>-</td>
          <td>数值最大值，value为Number时有效</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsBadge from '@/components/rsBadge'
import rsButton from '@/components/rsButton'
import rsIcon from '@/components/rsIcon'
export default {
  name: 'elementBadge',
  components: {
    rsBadge,
    rsButton,
    rsIcon
  }
}
</script>

<style lang="stylus">
.element-badge
  margin-bottom 150px
  .badge-item
    margin-right 40px
</style>
