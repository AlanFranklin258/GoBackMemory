<template>
  <div class="banner">
    <el-carousel
      :height="dynamicHeight"
      trigger="click"
      :interval="3000"
      indicator-position="outside"
      class="banners"
    >
      <el-carousel-item v-for="banner in banners" :key="banner">
        <img :src="img_prefix + banner" alt="" class="banner-img goback-mark" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref, onMounted } from "vue";
const dynamicHeight = ref("");
const banners = [
  "/banners/banner13.webp",
  "/banners/banner12.webp",
  // "banners/banner11.webp",
  "/banners/banner10.webp",
  // "banners/banner9.webp",
  "/banners/banner8.webp",
  // "banners/banner7.webp",
  "/banners/banner6.webp",
  "/banners/banner5.webp",
  "/banners/banner4.webp",
  "/banners/banner3.webp",
  "/banners/banner2.webp",
  // "banners/banner1.webp",
];

onMounted(() => {
  if (window.innerWidth > window.innerHeight) {
    dynamicHeight.value = Math.ceil(window.innerHeight / 6) + "px";
  } else {
    dynamicHeight.value = Math.ceil(window.innerWidth / 3) + "px";
  }
});
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  &-img {
    width: 100%;
    object-fit: cover;
  }
}
.goback-mark {
  clip-path: polygon(
    0 0,
    0 100%,
    5% 100%,
    6% 85%,
    9% 85%,
    8.8% 88%,
    6.8% 88%,
    6.2% 97%,
    7.2% 97%,
    7.4% 94%,
    8.4% 94%,
    8% 100%,
    9% 100%,
    9.6% 91%,
    12.6% 91%,
    12% 100%,
    13% 100%,
    14% 85%,
    16% 85%,
    16.8% 88%,
    16.6% 91%,
    15.4% 92.5%,
    16.4% 94%,
    16.2% 97%,
    15% 100%,
    17% 100%,
    17.4% 94%,
    18.6% 91%,
    20.6% 91%,
    20.2% 97%,
    21.2% 97%,
    21.6% 91%,
    24.6% 91%,
    24.4% 94%,
    22.4% 94%,
    22.2% 97%,
    24.2% 97%,
    24% 100%,
    25% 100%,
    26% 85%,
    27% 85%,
    26.6% 91%,
    28.6% 91%,
    28.4% 94%,
    26.4% 94%,
    28% 100%,
    27% 100%,
    26.2% 97%,
    26% 100%,
    19% 100%,
    19.4% 94%,
    18.4% 94%,
    18% 100%,
    14% 100%,
    15.2% 97%,
    15.4% 94%,
    14.5% 92.5%,
    15.6% 91%,
    15.8% 88%,
    14.8% 88%,
    14% 100%,
    11% 100%,
    11.4% 94%,
    10.4% 94%,
    10% 100%,
    100% 100%,
    100% 0
  );
}
</style>
