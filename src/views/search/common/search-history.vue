<template>
  <div class="search-history-container">
    <van-cell title="历史记录">
      <div v-show="isDeleteShow">
        <span @click="$emit('updateHistories', [])">全部删除</span>
        &nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </div>
      <van-icon v-show="!isDeleteShow" name="delete-o"  @click="isDeleteShow = true" />
    </van-cell>
    <van-cell :title="history" v-for="(history, index) in searchHistories" :key="index" @click="onDelete(history, index)">
      <van-icon name="close"  v-show="isDeleteShow" />
    </van-cell>
    
  </div>
</template>

<script>
import { setItem } from '@/utils/storage'
export default {
  name:'History',
  components: {},
  props: {
    searchHistories: {
      type:Array,
      required: true
    }
  },
  data() {
    return {
      isDeleteShow:false  //图标展示
    };
  },
  watch: {},
  computed: {},
  methods: {
    onDelete(history, index) {
      //判断点击的是删除状态
      if(this.isDeleteShow) {
        this.searchHistories.splice(index,1)
        //删除本地储存数据
        setItem('history',this.searchHistories)
        return
       //删除接口
      }
      //通过点击搜索查询结果
      this.$emit('search', history);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>