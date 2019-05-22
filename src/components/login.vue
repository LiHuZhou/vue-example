<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label>
        <el-input v-model="form.username" placeholder="输入用户名" type="text"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-input v-model="form.password" placeholder="输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Login" @keyup.enter="Login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      if (this.form.username === "admin" && this.form.password == "admin") {
        this.$message.success("登录成功");
        this.$local.save("userInfo", this.form);
        this.$router.push("/index");
      } else {
        this.$message.error("用户名或密码错误");
      }
    }
  }
};
</script>

<style scoped>
.login{
  text-align: center
}


.el-input {
  width: 25%;
}
.el-button {
  width: 20%;
}
</style>