<template>
  <van-cell :to="{name:'articles',params:{articleId:aritcleItem.id}}">
    
    <!-- 文章列表titile -->
    <div slot="title">
      <p class="item_detail">{{aritcleItem.title}}</p>
    </div>
    <!-- 文章底部信息 -->
    <div slot="label">
      <!-- 图片显示3个 -->
      <div v-if="aritcleItem.type === '3' " class="image">
        <van-image
        class="image-item"
        height="73"
        fit="contain"
        v-for="(item, index) in aritcleItem.image"
        :key="index"
        :src="item.image"
      />
      </div>
      <span class="item_info">{{aritcleItem.name}}</span>
    </div>
    <!-- 文章右边图片展示   -->
    <div slot="default" v-if="aritcleItem.type == '1' ">
      <van-image
        width="116"
        height="73"
        fit="contain"
        :src="aritcleItem.image[0]"
      />
    </div>
    <!-- <p class="item_detail">{{item.title}}</p>
    <span class="item_info">{{item.name}}</span> -->
    
  </van-cell>
</template>

<script>
export default {
  name:"ArticleItem",
  components: {},
  props: {
    aritcleItem:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
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
.item_detail{
  font-size: 18px;
  margin: 0;
}
.item_info{
  font-size: 10px;
  color: #ccc;
}
.image{
  display: flex;
  .image-item{
    flex: 1;
    &:not(:last-child){
      margin-right: 4px ;
    }
  }
}

</style>