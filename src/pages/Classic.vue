<template>
  <EncapSwiper 
    :swiperClass="this.swiperClass"
    :slideData="this.slideData"
  />
</template>
<script>

import EncapSwiper from './EncapSwiper.vue';

export default {
  name: 'Classic',
  components:{
    EncapSwiper,
  },
  data() {
    return {
      swiperClass: 'classic-swiper',
      slideData: this.$store.state.songRecommend[0].songList,
    }
  }
}
</script>
<style scoped>

</style>