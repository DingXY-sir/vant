<template>
  <div class="home-container">
    <!-- 首页导航 -->
    <van-nav-bar class="app-nav-bar">
      <template #left>
        <img class="logo" src="~assets/logo.png" alt="">
        <span>Vant频道</span>
      </template>  
      <van-button  class="search" slot="right" type="info"  icon-prefix="icon" icon="sousuo" size="small" round to="/search" >搜索</van-button>
    </van-nav-bar>
    <!-- 首页Tab标签 -->
    <van-tabs v-model="active" >
      <van-tab v-for="item in channels" :key="item.id" :title="item.name" class="channels-item">
        <!-- 上拉加载组件 -->
        <Article :channels="item"/>
      </van-tab>
      <!-- 编辑层按钮 -->
      <div slot="nav-right" class="channels-end"></div>  <!-- 占位 -->
      <div slot="nav-right" class="channels-edit" @click="isEditEjectShow = true">
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- 编辑弹出层 -->
    <van-popup v-model="isEditEjectShow" position="bottom" class="edit-layer" closeable close-icon-position="top-left" get-container="body">
      <EditLayer :channels="channels" :active="active"  @close="isEditEjectShow = false" @updateActive="updateActive"  />
    </van-popup>
  </div>
</template>

<script>
// 文章列表组件
import Article from './common/article'
// 导航编辑内容
import EditLayer from './common/editLayer.vue'
import {getItem} from '@/utils/storage'
import {mapState} from 'vuex'
export default {
  name:'Home',
  components: {
    Article,
    EditLayer
  },
  props: {},
  data() {
    return {
      active:0,
      //频道
      channels:[
        {name:"推荐",id:0},
        {name:"前端",id:1},
        {name:"后端",id:2},
        {name:"IOS",id:3},
        {name:"Android",id:4},
        {name:"Vant",id:5},
        {name:"Mysql",id:6}
      ],
      isEditEjectShow: false //编辑弹出判断
    };
  },
  watch: {},
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.loadChannels()
  },
  methods: {
    updateActive(index) {
      this.active = index
    },
    //展示频道持久化数据
    loadChannels() {
      let channel =[]
      if(this.user) {
        //展示登录状态下的频道数据
        
      }else{
        //展示未登录下的频道
        const localStorage = getItem('user-channel')
        if(localStorage) {
          //如果本地有缓存，展示
          channel = localStorage
        }else{
          //展示默认状态下的数据
          channel = this.channels
        }
      }
      this.channels = channel
    }

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.home-container{
  .logo{
    width: 20px;
    height: 20px;
  }
  .search{
    width: 140px;
    height: 32px;
    background-color:#5babfb ;
    font-size: 14px;
    border: none;
    .icon{
      font-size: 20px;
    }
  }
  ::v-deep .van-tab{
    border-bottom:1px solid #edeff3;
  }
  ::v-deep .van-tabs__line{
    width: 15px;
    height: 3px;
    background-color: #3296fa;
    bottom: 20px;
  }
  .channels-end{
    width: 33px;
    flex-shrink: 0;
  }
  .channels-edit{
    width: 33px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    background-color:#fff;
    //opacity: .7;
    z-index: 999;
  }
}
.edit-layer{
  height: 100%;
}


</style>