<!--
  - # Copyright (c) 2023. 秋城落叶 y All Rights Reserved
  -->
<template>
  <div class="content">
    <div class="left-banner">
      <div class="functions">
        <div class="home-page" @click="router.push('/home')">
          <i-system-uicons-sun />
          <span>Settings</span>
        </div>
        <div class="home-page" @click="router.push('/search')">
          <i-system-uicons-search />
          <span>Search</span>
        </div>
        <div class="home-page" @click="router.push('/netease')">
          <i-carbon-cloud-data-ops />
          <span>Login</span>
        </div>
        <div class="home-page" @click="router.push('/cloud')">
          <i-carbon-cloud-data-ops />
          <span>Cloud Disk</span>
        </div>
        <div class="home-page" @click="router.push('/download')">
          <i-carbon-download />
          <span>Downloads</span>
        </div>
        <div class="about" @click="router.push('/about')">
          <i-carbon-download />
          <span>About</span>
        </div>
      </div>
    </div>

    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { SystemStore } from "@/store/SystemStore";

const { basicStore } = SystemStore();
const router = useRouter();
onMounted(() => {
  if (basicStore.firstOpen) {
    setTimeout(() => {
      basicStore.token = "simulate load custom token";
      basicStore.firstOpen = false;
    }, 2000);
  }
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 550px) {
  .left-banner {
    box-sizing: border-box;
    box-shadow: none !important;
    border: solid 1px var(--text);

    width: auto !important;
    min-width: auto !important;
    min-height: auto !important;

    .title {
      display: none !important;
    }
  }

  .functions {
    & div {
      box-shadow: none !important;
      border: solid 1px var(--text);
      padding: 10px !important;
    }

    span {
      display: none;
    }
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.content {
  width: 100%;
  height: 100%;
  display: flex;

  overflow: auto;

  .left-banner {
    overflow: hidden;
    box-shadow: 0 0 10px var(--text);
    // background-color: darkorange;
    width: 300px;
    min-width: 300px;
    min-height: 100%;
    z-index: 1;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-size: 20px;
      // background-color: darkorange;
      box-shadow: 0 0 10px var(--text);
    }

    .functions {
      & div {
        // background-color: #000;
        box-shadow: 0 0 6px var(--text);
        margin: 10px;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          box-shadow: 0 0 6px var(--hover-text);
        }

        & span {
          margin-left: 10px;
        }
      }
    }
  }

  .right-content {
    // background-color: gainsboro;
    flex: 1;
    overflow: auto;
  }
}
</style>
