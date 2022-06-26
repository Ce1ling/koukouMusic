<template>
  <div>
    <PlaylistPart :title="title"/>
    <!-- 测试使用 -->
    <!-- <PlaylistPart :title="sectionData[1].title" :swiperClass="sectionData[1].swiperClass"/> -->
    <!-- <PlaylistPart :title="sectionData[2].title" :swiperClass="sectionData[2].swiperClass"/> -->
  </div>
</template>

<script>
import PlaylistPart from './PlaylistPart.vue';

export default {
  name: 'Homepage',
  components: {
    PlaylistPart,
  },
  data() {
    return {
      title: '歌 单 推 荐',
    }
  },
  methods: {

  },
  created() {

  },
}
</script>
<style scoped>

</style>