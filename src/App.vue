<template>
  <div id="app">
    <Header/>
    <SubNav/>
    <SongListRecommend :title="sectionTitle.songRecommend"/>
    <!-- 测试使用 -->
    <SongListRecommend :title="sectionTitle.newSong"/>
    <SongListRecommend :title="sectionTitle.wonderfulRecommend"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SubNav from "./components/SubNav.vue";
import SongListRecommend from "./components/SongListRecommend.vue";
import 'swiper/css/swiper.min.css';

export default {
  name: "App",
  components: {
    Header,
    SubNav,
    SongListRecommend,
  },
  data() {
    return {
      sectionTitle: {
        songRecommend: '歌 单 推 荐',   // 为了美观，请勿删除文字之间的空格
        newSong: '新 歌 首 发',
        wonderfulRecommend: '精 彩 推 荐',
      }
    }
  },
};
</script>

<style>
/* 阿里巴巴矢量图标库 start */
@font-face {
  font-family: "icons";
  src: url("./assets/fonts/iconfont.woff2?t=1652426455150") format("woff2"),
    url("./assets/fonts/iconfont.woff?t=1652426455150") format("woff"),
    url("./assets/fonts/iconfont.ttf?t=1652426455150") format("truetype");
}
.icons {
  font-family: "icons" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 阿里巴巴矢量图标库 end */
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
/* 自定义滚动条样式 */
::-webkit-scrollbar {
  background-color: transparent;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #bebebe;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #666666;
}
/* 全局通用样式 */
.none {
  display: none;
}
.nav-active {
  /* 当前是否为点击状态 */
  background-color: #31c27c !important;
  color: #fff !important;
}
.text-active {
  color: #31c27c !important;
}
.text-select {
  user-select: none;
}
.text-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-green:hover {
  color: #31c27c;
}
.pointer {
  /* 鼠标样式 */
  cursor: pointer;
}
.default {
  cursor: default;
}
</style>
