<template>
  <div class="headerNav">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <router-link to="/index" class="navClass">管理系统</router-link>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <router-link :to="{'name':'showImg'}" class="navClass">管理中心</router-link>
          <router-link :to="{'name':'two'}" class="navClass">个人中心</router-link>
          <router-link :to="{'name':'three'}" class="navClass">疑难解答</router-link>
          <router-link :to="{'name':'four'}" class="navClass">用户指南</router-link>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" v-if="isLogin">
          <img :src="require('../assets/profile.png')">
          <el-dropdown>
            <span class="el-dropdown-link">
              张三
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="exitSys()">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <router-link :to="{'name':'login'}" class="navClass" v-if="!isLogin">登录</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userImg from "../assets/profile.png";
export default {
  name: "headerNav",
  data() {
    return {
      userImg: userImg,
      isLogin: false
    };
  },
  created() {
    if (
      this.$local.fetch("userInfo").username == "admin" &&
      this.$local.fetch("userInfo").password == "admin"
    ) {
      this.isLogin = true;
    }
  },
  methods: {
    exitSys() {
      this.$local.removeItem("userInfo");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.sysTitle {
  color: #fff;
  font-size: 22px;
  line-height: 65px;
  padding-left: 15px;
}
.headerNav {
  height: 65px;
  background-color: #4c545b;
}
.navClass {
  text-decoration: none;
  line-height: 65px;
  margin: 0 15px;
  color: #fff;
}
.el-dropdown-link {
  display: inline-block;
  color: #fff;
  font-size: 18px;
}
.el-dropdown {
  bottom: 20px;
  left: 10px;
  cursor: pointer;
}
.exitClass {
  color: #000;
}
.is-active {
  color: royalblue;
}
</style>