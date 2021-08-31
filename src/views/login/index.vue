<template>
  <div class="login-container">
    <!-- nav -->
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back"
    />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.phone"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="输入手机号"
      />
      <van-field
        v-model="user.key"
        clearable
        icon-prefix="icon"
        left-icon="suo"
        placeholder="输入验证码"
      >
        <template #button>
          <van-button size="small" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- /登录表单 -->
    <div class="login-btn-warp" @click="onLogin">
      <van-button class="login-btn" type="info" block>登录</van-button>
    </div>
  </div>
</template>

<script>
import {loginApi} from '@/api/user'
export default {
  name:'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user:{
        key:'',
        phone:''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onLogin(){
      try {
        loginApi(this.user).then(res => {
          console.log(res)
        }).catch(err =>{
          console.log(err);
        })
      }catch(err){
        console.log(err) 

      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.login-btn-warp{
  padding: 26px 16px !important;
  .login-btn{
    background-color: #6db4fb;
    border: none;
    .van-button__text{
      font-size: 15px;
    }
  }
}
.van-button{
  background-color: #ededed;
  font-size: 10px;
}
// eded
</style>