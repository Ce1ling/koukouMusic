<template>
  <EncapSwiper 
    :swiperClass="this.swiperClass"
    :slideData="this.slideData"
  />
</template>

<script>
import EncapSwiper from './EncapSwiper.vue';

export default {
  name: 'ClassicCN',
  components: {
    EncapSwiper,
  },
  data() {
    return {
      swiperClass: 'classic-cn-swiper',
      slideData: this.$store.state.songRecommend[1].songList,
    }
  }
}
</script>
<style scoped>

</style>