<template>
  <div class="tabbar-container">
    <!-- 导航页面子路有出口 -->
    <router-view />

    <!-- 导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/video">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/proflie">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'TabbarIndex',
  components: {},
  props: {},
  data() {
    return {
      active:0
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
</style>