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
  display inline-block
  // 针对行内标签换行符号的影响
  font-size 0px
  .rs-breadcrumbitem:last-child
    .rs-breadcrumbitem-separator
      display none
</style>
