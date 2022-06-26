<template>
  <section class="sub-nav-container">
    <ul>
      <li><router-link to="/musichall/homepage" active-class="text-active">首页</router-link></li>
      <li><router-link to="/musichall/singers" active-class="text-active">歌手</router-link></li>
      <li><router-link to="/musichall/newdisc" active-class="text-active">新碟</router-link></li>
      <li><router-link to="/musichall/ranks" active-class="text-active">排行榜</router-link></li>
      <li><router-link to="/musichall/category" active-class="text-active">分类歌单</router-link></li>
      <li><router-link to="/musichall/radio" active-class="text-active">电台</router-link></li>
      <li><router-link to="/musichall/mv" active-class="text-active">MV</router-link></li>
      <li><router-link to="/musichall/digitalalbum" active-class="text-active">数字专辑</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.sub-nav-container {
  /* 子导航 */
  display: flex;
  justify-content: center;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  font-size: 14px;
}
.sub-nav-container ul {
  display: flex;
}
.sub-nav-container ul li {
  margin: 0px 25px;
}
.sub-nav-container ul li a {
  color: #000;
  font-size: 15px;
}
.sub-nav-container ul li a:hover {
  color: #31c27c;
}
</style>