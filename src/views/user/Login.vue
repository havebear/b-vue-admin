<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-header">后台管理系统登录</div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input placeholder="请输入用户名">
            <a-icon class="login-input-icon" slot="prefix" type="user"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input type="password" placeholder="请输入密码">
            <a-icon class="login-input-icon" slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-button type="primary" block html-type="submit" class="login-form-button">登录</a-button>
      </a-form>
      <div class="login-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {}
    };
  },
  methods: {
    /**提交表单 */
    handleSubmit() {}
  }
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2d3d;
  color: #fff;
}
.login-header {
  padding-bottom: 30px;
  line-height: 1;
  font-size: 20px;
  text-align: center;
}
.login-form {
  box-sizing: border-box;
  width: 360px;
  padding: 30px;
  // border: 1px solid rgba(0, 0, 0, 0.3);
  // box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.3);
}
.login-input-icon {
  color: rgba(0, 0, 0, .25);
}
</style>
