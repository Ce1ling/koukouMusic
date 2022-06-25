<template>
  <section class="sub-nav-container">
    <ul>
      <li><a href="###" class="text-active">首页</a></li>
      <li><a href="###" class="">歌手</a></li>
      <li><a href="###" class="">新碟</a></li>
      <li><a href="###" class="">排行榜</a></li>
      <li><a href="###" class="">分类歌单</a></li>
      <li><a href="###" class="">电台</a></li>
      <li><a href="###" class="">MV</a></li>
      <li><a href="###" class="">数字专辑</a></li>
      <li><a href="###" class="">票务</a></li>
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