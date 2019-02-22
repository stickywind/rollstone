<template>
  <div class="pageIndex">
    <img src="../assets/images/logo.png">
    <h2>Essential Links</h2>
    <router-link :to="{path: '/FormButton'}">rsButton</router-link>
    <router-link :to="{path: '/FormSwitch'}">rsSwitch</router-link>
    <router-link :to="{path: '/FormPayInput'}">rsPayInput</router-link>
    <router-link :to="{path: '/FormRate'}">rsRate</router-link>

    <router-link :to="{path: '/ElementQuote'}">rsQuote</router-link>
    <router-link :to="{path: '/ElementIcon'}">rsIcon</router-link>
    <router-link :to="{path: '/ElementBadge'}">rsBadge</router-link>
    <router-link :to="{path: '/ElementBreadCrumb'}">rsBreadCrumb</router-link>
    <router-link :to="{path: '/ElementBackTop'}">rsBackTop</router-link>
    <router-link :to="{path: '/ElementTag'}">rsTag</router-link>
    <router-link :to="{path: '/ElementI18n'}">国际化</router-link>
  </div>
</template>

<script>
export default {
  name: 'views',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
