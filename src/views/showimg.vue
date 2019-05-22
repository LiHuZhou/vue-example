<template>
  <div class="one">
    <left-menu></left-menu>
    <div class="content" :style="{'backgroundColor':'#fff'}">
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import leftMenu from "@/views/leftmenu";
export default {
  name: "one",
  data() {
    return {};
  },
  components: {
    leftMenu
  }
};
</script>

<style scoped>
.leftmenu {
  float: left;
}
.content {
  width: calc(100% - 220px);
  float: right;
  min-height: calc(100vh - 105px);
}
</style>