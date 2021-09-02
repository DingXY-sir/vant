<template>
  <div class="home-container">
    <!-- 首页导航 -->
    <van-nav-bar class="app-nav-bar">
      <template #left>
        <img class="logo" src="~assets/logo.png" alt="">
        <span>Vant频道</span>
      </template>  
      <van-button  class="search" slot="right" type="info"  icon-prefix="icon" icon="sousuo" size="small" round >搜索</van-button>
    </van-nav-bar>
    <!-- 首页Tab标签 -->
    <van-tabs v-model="active">
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <Article :channels="item"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 文章列表组件
import Article from 'components/common/article'
export default {
  name:'Home',
  components: {
    Article
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
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
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
}


</style>