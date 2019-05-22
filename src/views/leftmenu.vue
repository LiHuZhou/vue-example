<template>
  <div class="leftmenu">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-setting"></i>
          系统管理
        </template>
        <router-link :to="{'name':'userInfo'}" tag="div" class="sysItem">用户信息</router-link>
        <router-link :to="{'name':'orderInfo'}" tag="div" class="sysItem">订单信息</router-link>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-more"></i>
          更多
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "leftmenu",
  data() {
    return {
      activeNames: "1"
    };
  },
  methods: {
    handleChange() {
      this.$router.push({ name: "showImg" });
    }
  }
};
</script>

<style>
.leftmenu {
  width: 220px;
  min-height: calc(100vh - 100px);
  height: auto;
  background-color: #4c545b;
  color: #fff;
  position: relative;
}

.leftmenu .el-collapse {
  border: none;
  background-color: #4c545b;
}

.leftmenu .el-collapse-item__header {
  border: none;
  background-color: #4c545b;
  color: #fff;
}
.leftmenu .el-collapse-item__content {
  background-color: #4c545b;
}
.leftmenu .el-collapse-item__wrap {
  border: none;
}
.leftmenu .el-collapse i {
  color: #8b8e95;
  padding: 0 15px;
}
.leftmenu .sysItem {
  color: #fff;
  padding: 15px 0px 0px 55px;
  cursor: pointer;
}

.leftmenu .is-active {
  color: #d9d919;
}
</style>