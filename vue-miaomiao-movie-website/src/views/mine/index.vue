<template>
  <div class="">
    <!-- 吸顶 -->
    <header-bar title="我的"></header-bar>

    <!-- 用户登录 -->
    <div id="content" v-if="showFlag">
      <div class="login_body">
        <div>
          <input
            class="login_text"
            type="text"
            placeHolder="账户名/手机号/Email"
          />
        </div>
        <div>
          <input
            class="login_text"
            type="password"
            placeHolder="请输入您的密码"
          />
        </div>
        <div class="login_btn">
          <input type="submit" value="登录" @click="login" />
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
    </div>

    <div v-else>
      <mt-cell title="修改资料" is-link> </mt-cell>
      <mt-cell title="退出登录" is-link @click.native="outlogin"> </mt-cell>
    </div>
    <!-- 吸底 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from "../../components/headerBar";
import footerBar from "../../components/footerBar";
import { setToken, getToken, removeToken } from "../../utils/auth";

export default {
  name: "Mine",
  data() {
    return {
      loginIsShow: true,
      showFlag: true,
    };
  },
  computed: {},
  components: {
    headerBar,
    footerBar,
  },
  created() {
    if (getToken()) {
      this.showFlag = false;
    }
  },
  mounted() {},
  methods: {
    login() {
      setToken("kobe");
      this.showFlag = false;
      if (this.$route.query.id) {
        this.$router.push({
          path: "/movie/now",
        });
      }
    },
    outlogin() {
      removeToken();
      this.showFlag = true;
    },
  },
};
</script>
<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
