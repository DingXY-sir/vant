<template>
  <div class="search-result-container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    searchText:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      //通过searchText输入框的内容查询1、请求数据、2、展示数据3、加载状态结束4、数据全部加载完成this.finished = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>