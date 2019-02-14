<template>
  <div>
    <p>{{$t('message.hello')}}</p>
    <p>{{$t('message.hello')}}, {{$t('message.world')}}!</p>
    <p>{{$t('message.save')}} -- {{$t('message.cancel')}}</p>
    <div>
      <rs-button hamon type="primary" @click="translate">切换</rs-button>
    </div>
  </div>
</template>

<script>
import rsButton from '@/components/rsButton'
export default {
  name: 'elementI18n',
  components: {
    rsButton
  },
  methods: {
    translate () {
      this.$lang.locale = this.$lang.locale === 'zh' ? 'en' : 'zh'
    }
  }
}
</script>

<style>

</style>
