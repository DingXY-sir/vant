<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch(value)"
        @cancel="onCancel"
        @focus="onFocus"
      />
    </form>
    <!-- 搜索结果 -->
    <SearchResult v-if="isResultShow" :searchText = 'value'></SearchResult>
    <!-- 联想建议 -->
    <SearchSuggestion v-else-if="value" :searchText = 'value' @search ="onSearch"></SearchSuggestion>
    <!-- 历史记录 -->
    <SearchHistory v-else :searchHistories = searchHistories @search ="onSearch" @updateHistories="updateHistories"></SearchHistory>
  </div>
</template>

<script>
import SearchSuggestion from './common/search-suggestion'
import SearchHistory from './common/search-history'
import SearchResult from './common/search-result'

import {getItem, setItem} from '@/utils/storage'
export default {
  name:'search',
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  props: {},
  data() {
    return {
      value: '',//搜索文本
      isResultShow:false,
      searchHistories:getItem('history') || [] //搜索记录数据
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSearch(value) {
      //输入框设置成你想要的结果
      this.value = value
      // 将结果存入到历史记录里
      const index = this.searchHistories.indexOf(value)
      if( index !== -1) {
        this.searchHistories.splice(index,1)   //如果存在删除重复项
      }

      this.searchHistories.unshift(value)

      //本地储存历史记录
      setItem('history',this.searchHistories)
      // 展示搜索结果
      this.isResultShow = true
    },
    //全部删除
    updateHistories(histories) {
      this.searchHistories = histories
      setItem('history',this.searchHistories)
    },
    onCancel() {
      console.log('000');
    },
    onFocus() {
      this.isResultShow = false
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>