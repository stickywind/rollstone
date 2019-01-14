<template>
  <div class="form-switch">
    11
    <rs-switch></rs-switch>
  </div>
</template>

<script>
import rsSwitch from '@/components/rsSwitch'
export default {
  name: 'formSwitch',
  components: {
    rsSwitch
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
