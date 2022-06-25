import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';

Vue.use(Vuex);

const songRecommend = {
  state: () => ([
    {   // 为你推荐
      id: nanoid(), 
      title: '为你推荐', 
      songList: {
        '0': [
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img1.jpg'),title: '入耳即心动, 还不快进来', views: '806.3', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img2.jpg'), title: '粉墨登场~ 坠入人间的星屑少女', views: '994.2', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img3.jpg'), title: '国风戏腔 | 戏子演绎悲欢离合', views: '2155.5', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img4.jpg'), title: '500首轻音收集 ：学渣听了也想考北大', views: '4618.7', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img5.jpg'), title: '好评999+英文歌！轻松解压100％', views: '3.4', unit: '亿' },
        ],
        '1': [
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img6.jpg'),title: '甜系Rap | 我想跨过人海去拥抱你', views: '572.9', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img7.jpg'), title: '谱写solo | 韩永斌歌曲精选集', views: '10.6', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img8.jpg'), title: '爱河这种东西 还是远离吧 坠不得', views: '535.3', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img9.jpg'), title: 'Hip Hop| 微醺慵懒腔调慢慢摇摆', views: '520.4', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img10.jpg'), title: '燃系说唱 | 100%耳膜穿透加持', views: '119.1', unit: '亿' },
        ],
        '2': [
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img11.jpg'),title: '时代少年团演唱会现场歌曲赏', views: '496.5', unit: '万' },
          { id: nanoid(), imgUrl: require('../assets/images/recommend-part-img12.jpg'), title: '怀念99% | 你已拨打18岁连线成功', views: '4051.8', unit: '万' },
        ],
      }
    },
    {   // 经典国语
      id: nanoid(), 
      title: '经典国语', 
      item: [ // 歌单格式
        { id: nanoid(), imgUrl: '图片地址', title: '标题', views: '播放量', unit: '单位' },
      ]
    },
    {   // 网络歌曲
      id: nanoid(), 
      title: '网络歌曲', 
      item: [
        { id: nanoid(), imgUrl: '图片地址', title: '标题', views: '播放量', unit: '单位' },
      ]
    },
    {   // 经典
      id: nanoid(), 
      title: '经典', 
      item: [
        { id: nanoid(), imgUrl: '图片地址', title: '标题', views: '播放量', unit: '单位' },
      ]
    },
    {   // 官方歌单
      id: nanoid(), 
      title: '官方歌单', 
      item: [
        { id: nanoid(), imgUrl: '图片地址', title: '标题', views: '播放量', unit: '单位' },
      ]
    },
    {   // 情歌
      id: nanoid(), 
      title: '情歌', 
      item: [
        { id: nanoid(), imgUrl: '图片地址', title: '标题', views: '播放量', unit: '单位' },
      ]
    },
  ]),
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}

export default new Vuex.Store({
  modules: {
    songRecommend
  }
});