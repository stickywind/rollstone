<template>
  <div class="formPayInput">
    <h4>1.</h4>
    <rs-pay-input v-model="inputValue"></rs-pay-input>
    <p>value: {{inputValue}}</p>
    <input type="text" v-model="inputValue">
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
      inputValue: '1'
    }
  }
}
</script>

<style lang="stylus">

</style>
