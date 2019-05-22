<template>
  <div class="index">
    <header-nav></header-nav>
    <div class="nav">
      <router-link :to="{'name':'index'}" tag="span" :style="{'cursor':'pointer'}">首页 /</router-link>
      <span :style="{'color':'rgb(151, 168, 190)'}">{{flag}}</span>
    </div>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import headerNav from "@/components/header";
export default {
  name: "index",
  data() {
    return {
      flag: ""
    };
  },
  watch: {
    $route(newVal, oldVal) {
      this.flag=this.$route.meta.title;
    }
  },
  components: {
    headerNav
  }
};
</script>

<style scoped>
.nav {
  height: 40px;
  background-color: #eff2f7;
  line-height: 40px;
  padding: 0 10px;
  font-size: 12px;
}

</style>