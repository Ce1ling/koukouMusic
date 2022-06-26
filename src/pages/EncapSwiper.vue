<template>
  <div :class="this.swiperClass">
    <div class="swiper-container recommend-swiper">
        <div class="swiper-wrapper swiper-show-hidden">
          <!-- 区块1 -->
          <div class="swiper-slide" v-for="(item, i) in this.slideData" :key="item.id">
            <div 
              class="song-part-container" 
              v-for="songListObj in slideData[i]"
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
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'EncapSwiper',
  props: ['swiperClass', 'slideData', 'playlistData'],
  data() {
    return {}
  },
  mounted() {
    new Swiper(`.${this.swiperClass} .swiper-container`, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: `.${this.swiperClass} .swiper-pagination`,
        clickable: true
      },
      navigation: {
        prevEl: `.${this.swiperClass} .swiper-button-prev`,
        nextEl: `.${this.swiperClass} .swiper-button-next`,
      }
    });
  },
}
</script>
<style scoped>

</style>