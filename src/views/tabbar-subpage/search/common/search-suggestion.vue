<template>
  <div class="search-suggestion-container">
    <van-cell icon="search" v-for="(text, index) in suggestionText" :key="index" @click="search(text)">
      <div slot="title" v-html="highlight(text)"></div>
    </van-cell>
  </div>
</template>

<script>
import {debounce} from 'lodash'   //引用防抖函数
export default {
  name:'search-suggestion',
  components: {},
  props: {
    searchText:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      //模拟联想数据
      suggestionText:[
        "Hello","hello-vue","hehe","hello-react","heheda"
      ]
    };
  },
  watch: {
    // searchText() {
    //   console.log("000")
    // }
    //监视数据变化的完整写法
    searchText :{
      //当数据发生变化会执行handler
      handler : debounce(function() {
        //处理数据1、接口传参 2、获取数据 3、展示数据
        console.log("000")
      },200),
      immediate:true   //该属性会在数据变化时立即执行
    }
  },
  computed: {},
  methods: {
    // 搜索高亮展示
    highlight(text) {
      // 使用正则表达式new RegExp() 
      // 参数1、字符串  参数2、匹配模式
      // new RegExp(this.searchText,'gi')
      return text.replace(
        new RegExp(this.searchText,'gi'),
        `<span style="color:red">${this.searchText}</span>`
      )
     
    },
    search(text) {
      this.$emit('search', text)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>