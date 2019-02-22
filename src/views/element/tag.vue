<template>
  <div class="element-tag">
    <h4>1.type</h4>
    <div>
      <rs-tag>标签一</rs-tag>
      <rs-tag type="success">标签一</rs-tag>
      <rs-tag type="warn">标签一</rs-tag>
      <rs-tag type="danger">标签一</rs-tag>
    </div>
    <h4>2.size</h4>
    <div>
      <rs-tag size="mini">标签一</rs-tag>
      <rs-tag size="small">标签一</rs-tag>
      <rs-tag size="medium">标签一</rs-tag>
      <rs-tag>标签一</rs-tag>
    </div>
    <h4>3.hit</h4>
    <div>
      <rs-tag hit>标签一</rs-tag>
      <rs-tag type="success" hit>标签一</rs-tag>
      <rs-tag type="warn" hit>标签一</rs-tag>
      <rs-tag type="danger" hit>标签一</rs-tag>
    </div>
    <h4>4.closeable</h4>
    <div>
      <rs-tag closeable>标签一</rs-tag>
      <rs-tag type="success" closeable>标签一</rs-tag>
      <rs-tag type="warn" closeable>标签一</rs-tag>
      <rs-tag type="danger" closeable>标签一</rs-tag>
    </div>
    <h4>5.自定义事件</h4>
    <div>
      <rs-tag closeable @close="test">标签一</rs-tag>
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
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>primary | success | warn | danger</td>
          <td>标签类型</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>normal | medium | small | mini</td>
          <td>标签尺寸</td>
        </tr>
        <tr>
          <td>hit</td>
          <td>Boolean</td>
          <td>-</td>
          <td>标签边框填充</td>
        </tr>
        <tr>
          <td>closeable</td>
          <td>Boolean</td>
          <td>-</td>
          <td>关闭</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsTag from '@/components/rsTag'
export default {
  name: 'elementTag',
  components: {
    rsTag
  },
  methods: {
    test () {
      alert()
    }
  }
}
</script>

<style lang="stylus">
// .element-tag
</style>
