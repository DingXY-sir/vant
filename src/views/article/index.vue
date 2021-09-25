<template>
  <div class="article-container">
    <h1 class="article-title">全程实录丨神舟十二号载人飞行任务取得圆满成功</h1>
    <van-cell center>
      <van-image
        slot="icon"
        width="40"
        height="40"
        round
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div slot="title">央视新闻</div>
      <div slot="label">1小时前</div>
      <div slot="default">
        <van-button :loading="isLoading" :type="isFollow ? 'default' : 'info'" round size="small" :icon="isFollow ? '' : 'plus'" @click="Follow">{{isFollow ? '已关注' : '关注'}}</van-button>
      </div>
    </van-cell>
    <div class="article-content">
      <p>内容区域</p>
    </div>
    <!-- 底部信息 -->
    <div class="article-bottom">
      <van-button class="article-btn" size="small" round type="default">写评论</van-button>
      <van-icon class="article-icon" name="comment-o" badge="123" />
      <van-icon class="article-icon" name="star-o" />
      <van-icon class="article-icon" name="good-job-o" />
      <van-icon class="article-icon" name="share" />
    </div>
  </div>
</template>

<script>
export default {
  name:'articles',
  components: {},
  props: {
    articleId:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      isFollow:false, //是否关注
      isLoading:false //点击关注加载
    };
  },
  watch: {},
  computed: {},
  methods: {
    Follow() {
      this.isLoading = true //开启loading状态
      if(this.isFollow) {
        //已关注 取消关注
        //1、网络请求 2、改变状态

      }else{
        //未关注 添加关注
      }
      this.isFollow = !this.isFollow
      this.isLoading =false
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.article-title{
  font-size: 24px;
  line-height: 40px;
  padding: 14px;
}
.article-bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:#fff;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  ::v-deep .article-btn{
    width: 140px;
  }
  ::v-deep .article-icon{
    margin-left: 28px;
  }
}
</style>