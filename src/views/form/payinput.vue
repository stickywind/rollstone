<template>
  <div class="formPayInput">
    <h4>1.文本输入</h4>
    <rs-pay-input v-model="inputValue"></rs-pay-input>
    <p>value: {{inputValue}}</p>
    <h4>2.密码输入</h4>
    <rs-pay-input
      v-model="passwordValue"
      type="password">
    </rs-pay-input>
    <p>value: {{passwordValue}}</p>
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
          <td>text | password</td>
          <td>输入类型</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsPayInput from '@/components/rsPayInput'
export default {
  name: 'formPayInput',
  components: {
    rsPayInput
  },
  data () {
    return {
      inputValue: '',
      passwordValue: ''
    }
  }
}
</script>

<style lang="stylus">

</style>
