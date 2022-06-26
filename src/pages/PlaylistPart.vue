<template>
  <div class="song-list-recommend">
    <section class="song-area-container recommend-song-container" >
      <h1 class="text-select song-part-title">{{ this.title }}</h1>
      <ul class="song-part-list recommend-song-list">
        <li v-for="item in this.$store.state.songRecommend" :key="item.id">
          <router-link 
            :to="{
              name: item.routeName,
              params: {  }
            }"
            active-class="text-active"
          >{{ item.title }}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </section> 
  </div>
</template>

<script>


export default {
  name: "SongListRecommend",
  props: ['title'],
  data() {
    return {
    }
  },
  methods: {
    
  },
  mounted() {
  },
};
</script>

<style>

</style>