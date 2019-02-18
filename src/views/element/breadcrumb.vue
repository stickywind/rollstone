<template>
  <div class="element-breadcrumb">
    <h4>1.面包屑</h4>
    <div>
      <rs-bread-crumb>
        <rs-bread-crumb-item><a href="http://www.baidu.com">首页</a></rs-bread-crumb-item>
        <rs-bread-crumb-item><a href="">活动详情</a></rs-bread-crumb-item>
        <rs-bread-crumb-item>社会实践</rs-bread-crumb-item>
        <rs-bread-crumb-item>工作细节</rs-bread-crumb-item>
      </rs-bread-crumb>
      <rs-bread-crumb separator=">">
        <rs-bread-crumb-item><router-link :to="{path: '/ElementQuote'}">首页</router-link></rs-bread-crumb-item>
        <rs-bread-crumb-item>活动详情</rs-bread-crumb-item>
        <rs-bread-crumb-item>社会实践</rs-bread-crumb-item>
        <rs-bread-crumb-item>工作细节</rs-bread-crumb-item>
      </rs-bread-crumb>
    </div>
    <hr>
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
          <td>separator</td>
          <td>String</td>
          <td>-</td>
          <td>分隔符</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsBreadCrumb from '@/components/rsBreadCrumb'
import rsBreadCrumbItem from '@/components/rsBreadCrumbItem'
export default {
  name: 'elementBreadCrumb',
  components: {
    rsBreadCrumb,
    rsBreadCrumbItem
  }
}
</script>

<style lang="stylus">
// .element-breadcrumb
</style>
