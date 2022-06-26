<template>
  <div id="app">
    <Header id="top" title="锚点"/>
    <router-view></router-view>
    <div class="go-top-container">
      <a 
        href="#top"
        class="icons" 
        title="返回顶部"
        :class="{[this.goTop]: this.goTop}"
      >&#xe92a;</a>
      <a class="icons" title="意见反馈">反馈</a>
      <a class="icons" title="播放列表">&#xe7ca;</a>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      goTop: 'none',
    }
  },
  methods: {
    initGoTop() {
      window.addEventListener('scroll', () => this.goTop = window.scrollY > 200 ? 'block' : 'none');
    }
  },
  mounted() {
    this.initGoTop();
    
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
  transition: all .5s;
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
/* 高亮效果isActive */
.nav-active {
  background-color: #31c27c !important;
  color: #fff !important;
}
.text-active {
  color: #31c27c !important;
}
/* 文本禁止选中 */
.text-select {
  -webkit-user-select: none;
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
/* 鼠标指针样式 */
.pointer {
  cursor: pointer;
}
.default {
  cursor: default;
}
/* 屏幕右下角功能区 */
html {
  scroll-behavior: smooth;    /* 平滑滚动 */
}
.go-top-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999999999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.go-top-container a {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  cursor: pointer;
  color: blueviolet;
}
.go-top-container a:nth-child(2) {
  font-size: 14px;
  margin: 2px 0;
}
.go-top-container a:hover {
  background-color: #ededed;
}

.swiper-pagination {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/* 区块通用样式开始(此区域也是歌单推荐的样式) */
.song-area-container {
  background-color: #fafafa;
  overflow: hidden;
  position: relative;
}
.song-part-title {
  text-align: center;
  padding: 40px 0px 20px 0px;
  font-size: 32px;
  color: #333333;
}
.song-part-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.song-part-list li {
  margin: 10px 30px 30px 30px;
}
.song-part-list li a {
  color: #000;
  font-size: 15px;
}
.song-part-list li a:hover {
  color: #31c27c;
}
/* 轮播区块 */
.song-part-container {
  margin-right: 20px;
  margin-bottom: 60px;
}
.song-part-container a {
  font-size: 14px;
  color: #000;
  display: inline-block;
  width: 200px;
  margin: 10px 0px 5px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.song-part-container p {
  color: #999999;
  font-size: 14px;
}
.song-part-img-area {
  width: 220px;
  height: 220px;
  overflow: hidden;
  position: relative;
  text-align: center;
  line-height: 200px;
  transition: all 0.5s;
}
.song-part-img-area img {
  width: 100%;
  transition: all 0.5s;
}
.song-part-img-area i {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 220px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 50px;
  transition-duration: 0.5s;
  opacity: 0;
}
.song-part-img-area:hover img {
  transform: scale(1.1);
}
.song-part-img-area:hover i {
  transform: scale(1.5);
  transition-duration: 0.5s;
  opacity: 1;
}

/* 通用Swiper相关 */
.swiper-container {
  width: 1182px;
  position: relative;
  /* 设置Swiper风格 */
  --swiper-theme-color: #31c27c;
  /* 分页器颜色 */
  --swiper-pagination-color: #808080;
  /* 前进后退按钮颜色 */
  --swiper-navigation-color: #ffffff;
}
.swiper-wrapper .swiper-slide {
  display: flex;
  width: 100% !important;
}
/* 分页器 */
.swiper-pagination-bullet {
  margin: 0px 10px !important;
}
.swiper-pagination-bullet-active,
.swiper-pagination-bullet:hover {
  background-color: #808080 !important;
  opacity: 1;
}
/* 切换按钮 */
.swiper-button-prev,
.swiper-button-next {
  padding: 60px 40px;
  background-color: rgba(214, 214, 214, 0.5);
  filter: grayscale();
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #cfcfcf;
}
/* 歌单推荐区域切换按钮渐入效果 */
.recommend-song-container .swiper-button-prev,
.recommend-song-container .swiper-button-next {
  transform: translateX(100%);
  opacity: 0;
  transition-duration: 0.5s;
}
.recommend-song-container .swiper-button-prev {
  transform: translateX(-100%);
}
.recommend-song-container:hover .swiper-button-prev,
.recommend-song-container:hover .swiper-button-next {
  opacity: 1;
  transform: translateX(0%);
  transition-duration: 0.5s;
}
/* 区块通用样式结束 */
</style>
