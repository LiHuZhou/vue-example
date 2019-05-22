<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active {
  transition: all 2s;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
