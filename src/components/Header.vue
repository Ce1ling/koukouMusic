<template>
  <header class="header-main">
    <h1><router-link to="/musichall/homepage" ></router-link></h1>
    <nav class="header-left-area">
      <ul>
        <li><router-link active-class="nav-active" to="/musichall">音乐馆</router-link></li>
        <li><router-link active-class="nav-active" to="/mymusic">我的音乐</router-link></li>
        <li><a href="###" target="_blank">客户端</a></li>
        <li><a href="###" target="_blank">开放平台</a></li>
        <li><a href="###" target="_blank">VIP</a></li>
      </ul>
    </nav>
    <div class="search-area">
      <input
        type="text"
        class="search-btn"
        placeholder="搜索音乐、MV、歌单、用户"
      />
      <i class="icons pointer text-green" title="搜索">&#xe919;</i>
    </div>
    <div class="header-right-area">
      <a href="###" class="login">登录</a>
      <button class="pointer open-vip">
        开通VIP <i class="icons">&#xe904;</i>
      </button>
      <button class="pointer to-pay">充值 <i class="icons">&#xe904;</i></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.header-main {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.header-main h1 {
  height: 100%;
}
.header-main h1 a {
  display: inline-block;
  background: url("../assets/logo.png") no-repeat center/80%;
  width: 20vh;
  height: 100%;
}
.header-main nav ul {
  display: flex;
  height: 100%;
}
.header-main nav ul li {
  height: 100%;
  text-align: center;
  line-height: 80px;
}
.header-main nav ul li:hover a {
  color: #31c27c;
}
.header-main nav ul li a {
  padding: 0px 20px;
  display: inline-block;
  color: #000;
  width: 100%;
  height: 100%;
}
.header-main .search-area {
  display: flex;
  align-items: center;
  border: solid 1px #c9c9c9;
  margin: 0px 20px 0px 50px;
  border-radius: 2px;
  width: 200px;
  height: 40px;
  padding: 0px 5px;
}
.header-main .search-btn {
  border: none;
  outline: none;
  height: 100%;
}
.header-main .search-area i {
  font-size: 20px;
  line-height: 30px;
}
.header-right-area .login {
  color: #000;
}
.header-right-area .login:hover {
  color: #31c27c;
}
.header-right-area .open-vip,
.header-right-area .to-pay {
  width: 120px;
  height: 40px;
  text-align: center;
}
.header-right-area .open-vip {
  background-color: #31c27c;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin: 0px 10px;
}
.header-right-area .to-pay {
  width: 80px;
  background-color: transparent;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
}
.header-right-area .to-pay:hover {
  background-color: #31c27c;
  color: #fff;
}
</style>