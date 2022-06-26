<template>
  <EncapSwiper 
    :swiperClass="this.swiperClass"
    :slideData="this.slideData"
  />
</template>

<script>
import EncapSwiper from './EncapSwiper.vue';

export default {
  name: 'RecommendForU',
  components: {
    EncapSwiper
  },
  data() {
    return {
      swiperClass: 'song-recommend-swiper',
      slideData: this.$store.state.songRecommend[0].songList,
      arr: [
        'a', 'b', 'c', 'd', 'e'
      ]
    }
  },
  mounted() {
    let nodes = document.querySelectorAll('.playlist__pic');
    let i = 0;
    for (const node of nodes) {
      console.log(i++, node);
    }
  }
}
</script>

<style scoped>

</style>