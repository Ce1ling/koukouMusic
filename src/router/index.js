import VueRouter from "vue-router";
// 一级路由组件
import MusicHall from '../pages/MusicHall.vue';
import MyMusic from '../pages/MyMusic.vue';
// 二级路由组件
import Homepage from '../pages/Homepage.vue';
import Singers from '../pages/Singers.vue';
import NewDisc from '../pages/NewDisc.vue';
import Ranks from '../pages/Ranks.vue';
import Category from '../pages/Category.vue';
import Radio from '../pages/Radio.vue';
import Mv from '../pages/Mv.vue';
import DigitalAlbum from '../pages/DigitalAlbum.vue';
// 三级路由组件
import RecommendForU from '../pages/RecommendForU.vue';
import ClassicCN from '../pages/ClassicCN.vue';
import NetMusic from '../pages/NetMusic.vue';
import Classic from '../pages/Classic.vue';
import Official from '../pages/Official.vue';
import Love from '../pages/Love.vue';



export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {       // 重定向
      path: '/', 
      redirect: '/musichall/homepage' 
    },
    {       // 音乐馆
      redirect: '/musichall/homepage',  // 子级重定向
      path: '/musichall',
      component: MusicHall,
      children: [
        {   // 首页--就是音乐馆
          path: 'homepage',
          component: Homepage,
          children: [
            {
              name: 'recommendforu',
              path: 'recommendforu',
              component: RecommendForU
            },
            {
              name: 'classiccn',
              path: 'classiccn',
              component: ClassicCN
            },
            {
              name: 'netmusic',
              path: 'netmusic',
              component: NetMusic
            },
            {
              name: 'classic',
              path: 'classic',
              component: Classic
            },
            {
              name: 'official',
              path: 'official',
              component: Official
            },
            {
              name: 'love',
              path: 'love',
              component: Love
            },
          ]
        },
        {   // 歌手
          path: 'singers',
          component: Singers
        },
        {   // 新碟
          path: 'newdisc',
          component: NewDisc
        },
        {   // 排行榜
          path: 'ranks',
          component: Ranks
        },
        {   // 分类歌单
          path: 'category',
          component: Category
        },
        {   // 电台
          path: 'radio',
          component: Radio
        },
        {   // MV视频
          path: 'mv',
          component: Mv
        },
        {   // 数字专辑
          path: 'digitalalbum',
          component: DigitalAlbum
        },
      ]
    },
    {       // 我的音乐
      path: '/mymusic',
      component: MyMusic
    } 
  ]
});