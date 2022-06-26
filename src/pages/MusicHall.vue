<template>
  <div class="music-hall-container">
    <SubNav/>
    <router-view></router-view>
  </div>
</template>

<script>
import SubNav from "../pages/SubNav.vue";

export default {
  name: "MusicHall",
  components: {
    SubNav,
  },
  data() {
    return {
      
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
</style>