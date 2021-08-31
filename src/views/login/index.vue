<template>
  <div class="login-container">
    <!-- nav -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back"
    />
    <!-- 登录表单 -->
    <!-- 
      1、使用van-form包裹所有表单项van-field;
      2、在van-form绑定submit事件，表单提交会触发;
      3、每个 Field 组件 代表一个表单项，使用 Field 的 rules 属性定义校验规则
     -->
    <van-form 
      :show-error="false"
      :show-error-message="false"
      validate-first
      ref="login-from"
      @submit="onLogin"
      @failed="onFailed"      
    >
      <van-field
        v-model="user.phone"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="输入手机号"
        name="mobile"
        :rules="FromRules.phone"
      />
      <van-field
        v-model="user.key"
        clearable
        icon-prefix="icon"
        left-icon="suo"
        placeholder="输入验证码"
        :rules="FromRules.key"
      >
        <template #button>
          <van-count-down v-if="isShow" :time="time" format=" ss s" @finish="isShow = false"/>
          <van-button v-else size="small" round @click.prevent="onSendSm" :loading ="isCodeShow">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-warp">
        <van-button class="login-btn" type="info" block>登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import {loginApi} from '@/api/user'
// import { Toast } from 'vant'
export default {
  name:'LoginIndex',
  computed:{
    time() {
      return 1000*60
    }
  },
  data() {
    return {
      user:{
        key:'',
        phone:''
      },
      // 判断手机号、验证码正则表达式
      FromRules:{
        phone:[
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号' },
        ],
        key:[
          { required: true, message: '验证码不能为空' },
          { pattern: /\d{6}$/, message: '请输入正确的验证码' },
        ]
      },
      // 显示隐藏验证码倒计时
      isShow:false,
      // 防止网络慢多次点击验证码按钮
      isCodeShow:false
    };
  },
  methods: {
    async onLogin(){
      // 登录加载
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration:0   //值为0时，登录框不消失
      });
      try {
        const res = await loginApi(this.user)
        this.$toast.success('登录成功')
        //将后台穿过来的token放入vuex中
        this.$store.commit('setUser',res.data)
        console.log(res)
      }catch(err){
        this.$toast.fail('登录失败,手机号或验证码错误')
        console.log(err) 
      }
    },
    // 表单验证手机号、验证码错误提示
    onFailed(err){
      if(err.errors[0]){
        this.$toast({
          message:err.errors[0].message
        })
      }
    },
    // 发送验证码
    async onSendSm() {
      try{
        //防止网络原因，导致用户可以多次点击
        this.isCodeShow = true
        await this.$refs["login-from"].validate('mobile')
        //验证通过，请求验证码
        this.isShow = true

      }catch(err){
        //错误提示
        this.$toast({
          message:err.message
        })
      }
      // 无论请求成功或者失败，验证码按钮不显示加载状态
      this.isCodeShow = false
    }
  }
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
.van-field__button{
  .van-button{
    background-color: #ededed;
    font-size: 10px;
  }
}
.van-field__left-icon{
  line-height: 33px !important;
}
.van-cell{
  align-items: center;
}
</style>