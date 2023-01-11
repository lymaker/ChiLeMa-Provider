<template>
  <div class="container">
    <h1>
      欢迎登录吃了吗
      <sup style="font-size: 14px; color: #a4b0be">商家</sup>
    </h1>
    <van-form @submit="login">
      <van-cell-group inset>
        <!--    用户名输入框    -->
        <van-field
          v-model="loginParam.username"
          :rules="rules.username"
          name="username"
          label="用户名"
          label-width="50px"
          placeholder="请输入用户名"
          clearable
          size="large"
        />
        <!--    密码输入框    -->
        <van-field
          v-model="loginParam.password"
          :rules="rules.password"
          label="密码"
          name="password"
          label-width="50px"
          placeholder="请输入密码"
          clearable
          size="large"
          type="password"
        />
        <!--  验证码  -->
        <van-field
          v-model="captchaParam.value"
          :rules="rules.captcha"
          label="验证码"
          label-width="50px"
          name="captcha"
          placeholder="请输入验证码"
          size="large"
          style="align-items: center"
        >
          <template #extra>
            <captcha-image-component
              :type="captchaParam.type"
              class="captcha-box"
            />
          </template>
        </van-field>
      </van-cell-group>
      <!--   记住我复选框   -->
      <van-checkbox
        v-model="loginParam.isRemember"
        name="remember"
        class="remember-checkbox"
      >
        记住我
      </van-checkbox>
      <!--   登录按钮   -->
      <van-button
        block
        class="login-button"
        native-type="submit"
        round
        size="large"
        type="primary"
      >
        提交
      </van-button>
    </van-form>
  </div>
</template>

<script setup>
// todo 用户资料查询
import CaptchaImageComponent from '@/component/CaptchaImageComponent.vue';
import {useAuthStore} from '@/store/auth.js';
import {useUserStore} from '@/store/user.js';
import {useRouter} from 'vue-router';
import {showNotify} from 'vant';
import {verify} from '@/api/captcha.js';

const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();

const loginParam = $ref({
  username: '1265894132',
  password: 'a12345678',
  isRemember: false
});
const captchaParam = $ref({
  type: 'login',
  value: null
});
const rules = {
  username: [
    {required: true, message: '请填写用户名'},
    {pattern: /^\w{5,18}$/, message: '请填写有效用户名'}
  ],
  password: [
    {required: true, message: '请填写密码'},
    {pattern: /^.{8,18}$/, message: '请填写有效密码'}
  ],
  captcha: [
    {required: true, message: '请填写验证码'},
    {pattern: /^\S*$/, message: '请填写有效验证码'}
  ]
};

async function login() {
  try {
    await verify(captchaParam);
    await authStore.login(loginParam);
    await userStore.select();
    await router.push({
      name: 'index',
      replace: true
    });
    showNotify({
      type: 'success',
      message: '登录成功',
      duration: 1500
    });
  } catch (e) {
    console.log('登录失败');
  }
}
</script>

<style lang="less" scoped>
@import "@/index.less";

.container {
  position: relative;
  height: 100vh;
  padding: @basic-view-padding-y @basic-view-padding-x;
  box-sizing: border-box;
  background: @basic-background-color;

  h1 {
    position: absolute;
    top: 20%;
    font-weight: 400;
    left: 10%;
  }

  form {
    position: absolute;
    top: 33%;
    left: 50%;
    width: 80%;
    transform: translateX(-50%);

    :deep(.van-cell-group--inset) {
      margin: 0;
    }

    .captcha-box {
      width: 80px;
      height: 28px;
    }
  }

  .remember-checkbox {
    margin-top: 25px;
  }

  .login-button {
    margin-top: 25px;
  }
}
</style>