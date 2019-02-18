<template>
  <div class="rs-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rsBreadCrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  provide () {
    return {
      rsBreadCrumb: this
    }
  }
}
</script>

<style lang="stylus">
.rs-breadcrumb
  .rs-breadcrumbitem:last-child
    .rs-breadcrumbitem-separator
      display none
</style>
