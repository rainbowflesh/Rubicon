<template>
  <div class="error">
    <h1>404, Into the Void</h1>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

let route = useRoute();
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
