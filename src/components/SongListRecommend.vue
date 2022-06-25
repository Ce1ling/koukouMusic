<template>
  <div class="song-list-recommend">
    <section class="song-area-container recommend-song-container">
      <h1 class="text-select song-part-title">{{ this.title }}</h1>
      <ul class="song-part-list recommend-song-list">
        <li v-for="(item, i) in this.$store.state.songRecommend" :key="item.id">
          <a 
            href="###" 
            @click="activeIndex = i" 
            :class="{ 'text-active': activeIndex === i }"
          >{{ item.title }}</a>
        </li>
      </ul>
      <div class="swiper-container recommend-swiper">
        <div class="swiper-wrapper swiper-show-hidden">
          <!-- 区块1 -->
          <div class="swiper-slide" v-for="(item, i) in this.$store.state.songRecommend[0].songList" :key="item.id">
            <div 
              class="song-part-container" 
              v-for="songListObj in $store.state.songRecommend[0].songList[i]"
              :key="songListObj.id"
            >
              <div class="song-part-img-area pointer">
                <img :src="songListObj.imgUrl" alt="">
                <i class="icons">&#xe7ce;</i>
              </div>
              <a href="###" class="text-hidden">{{ songListObj.title }}</a>
              <p>播放量：{{ songListObj.views }}{{ songListObj.unit }}</p>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination pointer" ref="swiperPagination"></div>
      </div>
      <!-- 导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </section> 
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: "SongListRecommend",
  props: ['title'],
  data() {
    return {
      activeIndex: 0,    // 巧妙的实现高亮效果
      index: 0
    }
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }
      });
    }
  },
  mounted() {
    this.initSwiper();    // 初始化swiper
  },
};
</script>
<style scoped>
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