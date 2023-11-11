<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { SystemStore } from "./store/SystemStore";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const store = SystemStore();
const { basicStore } = store;
basicStore.initEnv();
</script>

<template>
  <div class="App">
    <button class="switch" @click="toggleDark()">
      <i-carbon-moon v-if="isDark" />
      <i-carbon-sun v-else />
    </button>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.App {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.switch {
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;

  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
</style>
