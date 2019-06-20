<template>
  <div class="form-pay-input">
    <h4>1.文本输入</h4>
    <div>
      <rs-pay-input v-model="inputValue"></rs-pay-input>
      <p>value: {{inputValue}}</p>
    </div>
    <h4>2.密码输入</h4>
    <div>
      <rs-pay-input
        v-model="passwordValue"
        type="password">
      </rs-pay-input>
      <p>value: {{passwordValue}}</p>
    </div>
    <h4>3.数值改变事件change</h4>
    <div>
      <rs-pay-input
        v-model="inputValueChange"
        @change="handleChange"
      >
      </rs-pay-input>
      <p>value: {{inputValueChange}}</p>
    </div>
    <div>
      <rs-pay-input
        v-model="passwordValueChange"
        type="password"
        @change="handleChange"
      >
      </rs-pay-input>
      <p>value: {{passwordValueChange}}</p>
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
          <td>text | password</td>
          <td>输入类型</td>
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
          <td>change</td>
          <td>输入改变</td>
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
      passwordValue: '',
      inputValueChange: '',
      passwordValueChange: ''
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus">
.form-pay-input
  margin-bottom 150px
</style>
