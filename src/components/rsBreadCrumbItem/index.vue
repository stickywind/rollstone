<template>
  <div class="rs-breadcrumbitem">
    <span class="rs-breadcrumbitem-content"><slot></slot></span>
    <span class="rs-breadcrumbitem-separator">{{separator}}</span>
  </div>
</template>

<script>
export default {
  name: 'rsBreadCrumbItem',
  data () {
    return {
      separator: ''
    }
  },
  inject: ['rsBreadCrumb'],
  mounted () {
    this.separator = this.rsBreadCrumb.separator
  }
}
</script>

<style lang="stylus" scoped>
.rs-breadcrumbitem
  display inline-block
  .rs-breadcrumbitem-content
    font-size 14px
    a
      font-weight bold
      color black
      text-decoration none
      &:hover
        color #409eff
  .rs-breadcrumbitem-separator
    margin 0px 6px
    font-size 14px
    line-height 1
    color #aaa
</style>
