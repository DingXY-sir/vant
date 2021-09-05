<template>
  <div class="edit-layer-container">
    <!-- 我的频道 -->
    <van-cell center :border="false">
      <div slot="title">我的频道</div>
      <van-button class="edit-btn" size="mini" type="danger" plain round @click="isClearShow = !isClearShow">{{isClearShow ? '完成' : '编辑'}}</van-button>
    </van-cell>
    <!-- 宫格布局 -->
    <van-grid :gutter="10">
      <van-grid-item class="grid-item" :class="{active : index === active}" :icon="isClearShow ? 'clear' :''" v-for="(value, index) in channels" :key="value.id"  :text="value.name"  @click="removeArticle(index)" />
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell center :border="false">
      <div slot="title">频道推荐</div>
    </van-cell>
    <!-- 宫格布局 -->
    <van-grid :gutter="10">
      <van-grid-item class="grid-item" v-for="value in channelsTitle" :key="value.id"  :text="value.name" @click="addArticle(value)" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name:'EditLayer',
  components: {},
  props: {
    channels:{  //我的频道数据
      type:Array,
      required:true
    },
    active:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      all_article:[    //tab所有标签
        {name:"推荐",id:0},
        {name:"前端",id:1},
        {name:"后端",id:2},
        {name:"IOS",id:3},
        {name:"Android",id:4},
        {name:"Vant",id:5},
        {name:"Mysql",id:6},
        {name:"三一重工",id:7},
        {name:"腾讯",id:8},
        {name:"阿里",id:9}
      ],
      isClearShow:false   //频道取消按钮显示隐藏
    };
  },
  watch: {},
  computed: {
    channelsTitle() {
      // 1、循环所以tab标签
      return this.all_article.filter(value => {
      // 2、循环我的tab标签，通过判断获取不重复标签
        return !this.channels.find(articleItem => {
          
          return articleItem.id === value.id
        })
      })
    }
  },
  methods: {
    //添加频道
    addArticle(value) {
      this.channels.push(value)
    },
    //移除频道
    removeArticle(index) {
      if(this.isClearShow) {
        //编辑情况删除
        this.deleteChannel(index)
      }else{
        //非编辑情况切换频道
        this.switchChannel(index)
      }
    },
    deleteChannel(index) {
      // 解决高亮情况下删除前边的会随着active的值改变
      if(index <= this.active) {
        this.$emit('updateActive', this.active-1);
      }
      this.channels.splice(index,1)
    },
    switchChannel(index) {
      // 切换频道
      this.$emit('updateActive', index);
      // 关闭编辑弹出层
      this.$emit('close',index);

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.edit-layer-container{
  padding-top:35px ;
  .edit-btn{
    padding: 12px;
  }
  .grid-item{
    width: 80px;
    height: 43px;
    font-size: 16px;
    ::v-deep .van-icon{
      font-size: 15px;
      position: absolute;
      right: -4px;
      top: -6px;
      color:#ccc;
      z-index: 2;
    }
    ::v-deep .van-grid-item__text{
      margin-top: 0;
    }
    ::v-deep .van-grid-item__content{
      background-color: #f4f5f6;
    }
  }
  ::v-deep .active{
    .van-grid-item__text{
      color: red;
    }
  }
}

</style>