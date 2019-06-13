<template>
  <div class="element-quote">
    <h4>1.引用块</h4>
    <div>
      <rs-quote>111 <a href="">111</a></rs-quote>
    </div>
    <div>
      <rs-quote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
    </div>
    <div>
      <rs-quote>Lorem ipsum dolor sit amet <a href="">consectetur</a> consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique <a href="">similique</a>. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
    </div>
    <h4>2.类型设置颜色</h4>
    <div type="primary">
      <rs-quote>Lorem ipsum dolor sit amet <a href="">consectetur</a> consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique <a href="">similique</a>. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
    </div>
    <div>
      <rs-quote type="success">Lorem ipsum dolor sit amet <a href="">consectetur</a> consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique <a href="">similique</a>. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
    </div>
    <div>
      <rs-quote type="warn">Lorem ipsum dolor sit amet <a href="">consectetur</a> consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique <a href="">similique</a>. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
    </div>
    <div>
      <rs-quote type="danger">Lorem ipsum dolor sit amet <a href="">consectetur</a> consectetur adipisicing elit. Porro incidunt dolores voluptatum quidem similique <a href="">similique</a>. Consectetur modi veniam similique, magni natus quia aut inventore quo culpa placeat! Adipisci, doloremque consequatur. Asperiores.</rs-quote>
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
          <td>primary | success | warn | danger</td>
          <td>引用类型</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rsQuote from '@/components/rsQuote'
export default {
  name: 'elementQuote',
  components: {
    rsQuote
  }
}
</script>

<style lang="stylus">
.element-quote
  margin-bottom 150px
  &>div
    margin 10px 0px
</style>
