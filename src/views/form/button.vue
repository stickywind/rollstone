<template>
  <div class="form-button">
    <div>
      <rs-button @click.native="test">
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
    </div>
    <div>
      <rs-button
        size="small">
        默认按钮
      </rs-button>
      <rs-button
        type="primary"
        size="small">
        主要按钮
      </rs-button>
      <rs-button
        type="success"
        size="small">
        成功按钮
      </rs-button>
    </div>
    <p>
      size: 大小，
      type: 按钮样式，
    </p>
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
