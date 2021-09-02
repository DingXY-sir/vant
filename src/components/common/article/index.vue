<template>
  <!--首页文章列表组件  -->
  <div class="article-container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in articleList" :key="index"  >
        <div>
          <p class="item_detail">{{item.title}}</p>
          <span class="item_info">{{item.name}}</span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name:'Article',
  components: {},
  props:[
    'channels'
  ],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      articleList:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let a = [
        {name:'央视新闻 评论26786 1分钟前',id:0,title:'英雄回家——第八批在韩志愿军烈士遗骸归国纪实直播'},
        {name:'央视新闻 评论266 2分钟前',id:1,title:'英雄回家 | 今天，我们回家'},
        {name:'央视新闻 评论26632 2分钟前',id:2,title:'“双减”落地是最好的“开学礼”'},
        {name:'央视新闻 评论24466 4分钟前',id:3,title:'凝铸民族复兴的精神伟力'},
        {name:'央视新闻 评论26 6分钟前',id:4,title:'图解：美国情报部门斑斑劣迹'},
        {name:'央视新闻 评论66 6分钟前',id:5,title:'重庆4人自驾游失联8天，凌晨4点监控里，消失在两个卡口中间'},
        {name:'央视新闻 评论966 1小时前',id:6,title:'中国电信、三峡能源、京东方A、和辉光电、铁建重工，客观解读！'},
        {name:'央视新闻 评论6 1小时前',id:7,title:'传奇：公司制造美丽假象，蛊惑人们投资，等募集一个亿后竟消失'},
        {name:'央视新闻 评论30 2小时前',id:8,title:'从买不到到买不起 “缺芯”困局何时解？丨财经头条'},
        {name:'央视新闻 评论26 2小时前',id:9,title:'全球碳中和，哪些行业将消失，哪些行业有巨大的机会'},
        {name:'央视新闻 评论46 一天前',id:10,title:'开评：三大指数小幅低开 沪指跌0.20%'},
      ]
      setTimeout(() => {
        
        this.articleList.push(...a)
        // 本次加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.articleList.length >= 15) {
          this.finished = true;
        }
      }, 1000)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.article-container{
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
  overflow-y: auto;
  .item_detail{
    font-size: 18px;
    margin: 0;
  }
  .item_info{
    font-size: 10px;
    color: #ccc;
  }
}
</style>