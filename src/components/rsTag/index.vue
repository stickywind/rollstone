<template>
  <div class="rs-tag">
    <div :class="['rs-tag-block', tagSize, tagType, tagHit]">
      <span class="rs-tag-content">
        <slot></slot>
        <span v-if="closeable" :class="['rs-tag-close fa fa-times', typeClose]" @click="handleClose"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rsTag',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    hit: Boolean,
    closeable: Boolean
  },
  computed: {
    tagSize () {
      return this.size ? `rs-tag-${this.size}` : ''
    },
    tagType () {
      return this.type ? `rs-tag-${this.type}` : ''
    },
    tagHit () {
      if (this.hit) {
        let str = !this.type ? '' : `${this.type}-`
        return `rs-tag-${str}hit`
      } else {
        return ''
      }
    },
    typeClose () {
      if (this.closeable && this.type === '') {
        return ''
      } else {
        return `rs-tag-${this.type}-close`
      }
    }
  },
  methods: {
    handleClose (evt) {
      this.$emit('close', evt)
    }
  }
}
</script>

<style lang="stylus">
.rs-tag
  display inline-block
  .rs-tag-block
    display inline-block
    border 1px solid rgba(64, 158, 255, 0.2)
    border-radius 4px
    padding 0px 10px
    font-size 12px
    color #409EFF
    white-space nowrap
    background rgba(64, 158, 255, 0.1)
    height 32px
    line-height 32px
    // 关闭图标
    .rs-tag-close
      margin-left 4px
      font-size 12px
      border-radius 50%
      padding 2px
      cursor pointer
      width 12px
      text-align center
      &:hover
        color white
        background #409EFF
    .rs-tag-success-close
      &:hover
        background #67c23a
    .rs-tag-warn-close
      &:hover
        background #e6a23c
    .rs-tag-danger-close
      &:hover
        background #f56c6c
  // 标签尺寸
  .rs-tag-mini
    padding 0px 5px
    height 20px
    line-height 19px
  .rs-tag-small
    padding 0px 8px
    height 24px
    line-height 22px
  .rs-tag-medium
    padding 0px 10px
    height 28px
    line-height 26px
  // 标签类型
  .rs-tag-success
    background rgba(103, 194, 58, 0.1)
    border-color rgba(103, 194, 58, 0.2)
    color #67c23a
  .rs-tag-warn
    background rgba(230, 162, 60, 0.1)
    border-color rgba(230, 162, 60, 0.2)
    color #e6a23c
  .rs-tag-danger
    background rgba(245, 108, 108, 0.1)
    border-color rgba(245, 108, 108, 0.2)
    color #f56c6c
  // 边框填充
  .rs-tag-hit
    border-color #409EFF
  .rs-tag-success-hit
    border-color #67c23a
  .rs-tag-warn-hit
    border-color #e6a23c
  .rs-tag-danger-hit
    border-color #f56c6c
</style>
