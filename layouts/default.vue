<template>
  <div>
    <Loading :style="bgStyle"></Loading>
    <div :style="baseStyle" class="basestyle">
      <GobackHeader></GobackHeader>
      <div class="main-content">
        <slot id="page-anchor" />
      </div>
      <el-menu
        :default-active="activeIndex"
        :router="true"
        :unique-opened="true"
        mode="horizontal"
        background-color="rgba(0,83,117,0.1)"
        class="nav-menu"
        id="anchor"
      >
        <div v-for="(n, sub) in nav" :key="n.label">
          <el-menu-item :index="n.path">
            <template #title>
              <i :class="n.icon + ' text'"></i>
              <span class="text">{{ n.label }}</span>
            </template>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import GobackHeader from "~/components/GobackHeader.vue";
import Loading from "~/components/Loading.vue";
import { ref, onMounted } from "vue";

const activeIndex = ref("1");
const nav = ref({
  home: {
    path: "/",
    label: "主页",
    icon: "bi bi-house-fill",
  },
  about: {
    path: "/about",
    label: "关于",
    icon: "bi bi-info-circle-fill",
  },
  activity: {
    path: "/activity",
    label: "活动",
    icon: "bi bi-activity",
  },
  member: {
    path: "/member",
    label: "成员",
    icon: "bi bi-people-fill",
  },
});
const baseStyle = ref({
  width: "100vw",
  height: "100vh",
});

const bgStyle = ref({ display: "" });
onMounted(() => {
  // 获取设备尺寸
  let deviceWidth = 0;
  if (window.innerWidth > window.innerHeight) {
    deviceWidth = Math.floor(window.innerHeight / 2);
  } else {
    deviceWidth = window.innerWidth;
  }
  baseStyle.value = {
    width: deviceWidth + "px",
    height: window.innerHeight + "px",
  };
  bgStyle.value = {
    display: "none",
  };
});
</script>

<style scoped lang="less">
.basestyle {
  background: linear-gradient(
    135deg,
    rgba(0, 83, 117, 0) 0%,
    rgba(0, 83, 117, 0.2) 20%,
    rgba(0, 83, 117, 0.4) 40%,
    rgba(0, 83, 117, 0.6) 60%,
    rgba(0, 83, 117, 0.8) 80%,
    rgba(0, 83, 117, 1) 100%
  );
  background-size: cover;
  margin: auto;
  position: relative;
}
.el-menu.nav-menu {
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  background-color: rgba(240, 255, 255, 1);
  border-color: rgba(0, 83, 117, 1);
  z-index: 1;
}

.nav-menu .text {
  font-size: 1.6vh;
  font-weight: bold;
  color: rgba(0, 83, 117, 0.8);
}

.main-content {
  z-index: 0;
  width: 100%;
  height: 79vh;
  margin: 0 auto;
  // border: 1px black solid;
  overflow-y: scroll;
  /* 隐藏滚动条（兼容多浏览器） */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.main-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

</style>
