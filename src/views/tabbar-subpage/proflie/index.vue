<template>
  <div class="proflie-container">
    <!-- 使用cell单元格组件，开发用户信息 -->
    <van-cell-group v-if="user" class="my-info">
      <van-cell class="my-cell" center :border="false">
        <van-image
          class="avater"
          slot="icon"
          round
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="name" slot="title">昵称</div>
        <van-button class="update-btn" size="small" round>编辑资料</van-button>
      </van-cell>
      <!-- 使用grid宫格，开发用户数据 -->
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item"> 
          <div class="text-wrap" slot="text">
            <div class="count">12</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">100</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">999</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">1000</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 未登录状态 -->
    <div v-else class="no-login" @click="noLogin">
      <div class="icon icon-weidenglutouxiang"></div>
      <div class="no-login-text">登录 / 注册</div>
    </div>
    <!-- 使用grid宫格，自定义列数，开发收藏、喜欢 -->
    <van-grid :column-num="2" class="nav-grid mb-4">
      <van-grid-item class="nav-grid-item" icon-prefix="icon" icon="shoucang" text="收藏" />
      <van-grid-item class="nav-grid-item" icon-prefix="icon" icon="lishi" text="历史" />
    </van-grid>
    <!-- 使用cell单元格，设置跳转列表及退出 -->
    <van-cell title="消息通知" is-link to=""  />
    <van-cell class="mb-4" title="小智语音" is-link to="" />
    <van-cell v-if="user" class="exit-btn" title="退出登录" to="" @click="onLogout" />
  </div>
</template>

<script>
//使用vuex辅助函数
import { mapState } from 'vuex'
export default {
  name:'ProFlie',
  components: {},
  props: {},
  data() {
    return {
      currentUser:{}//当前用户
    };
  },
  watch: {},
  computed: {
    //映射vuex中user
    ...mapState(['user'])
  },
  methods: {
    noLogin() {
      this.$router.push('/login')
    },
    onLogout() {
      // 使用dialog,展示提示框
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认要退出吗？',
      }).then(() => {
        // on confirm操作退出事件
        this.$store.commit('setUser',null)
      }).catch(() => {
        // on cancel
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.proflie-container{
  .my-info{
    background: url('~@/assets/my_info.jpeg') no-repeat;
    background-size:cover ;
    .my-cell{
      box-sizing: border-box;
      background-color: unset;
      height: 115px;
      padding-top: 38px;
      padding-bottom:11px ;
      .avater{
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name{
        color: #fff;
        font-size: 15px;
      }
      .update-btn{
        height: 25px;
        font-size: 10px;
        color: #666;
      }
    }
    .data-info{
      .data-info-item{
        height: 65px;
        color: #fff;
        .text-wrap{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count{
            font-size: 18px;
          }
          .text{
            font-size: 11px;
          }
        }
      }
    }
    ::v-deep .van-grid-item__content{
      background-color: unset;
    }
  }
  .no-login{
    height: 180px;
    background: url('~@/assets/my_info.jpeg') no-repeat;
    background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-weidenglutouxiang{
      font-size: 66px;
    }
    .no-login-text{
      color: #fff;
      font-size: 18px;
    }
  }
  ::v-deep .nav-grid{
    .nav-grid-item{
      height: 70px;
      .icon{
        font-size: 22px;
      }
      .icon-shoucang{
        color: #eb5253;
      }
      .icon-lishi{
        color: #ff9d1d;
      }
      .van-grid-item__text{
        font-size: 14px;
        color: #333;
      }
    }
  }
  .exit-btn{
    text-align: center;
    color: #d86262;
  }
}
</style>