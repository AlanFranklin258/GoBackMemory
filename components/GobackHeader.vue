<template>
  <div class="header">
    <img :src="img_prefix + gobackLogo" class="logo" />
    <div class="info">
      <div class="title">告白话剧社</div>
      <div class="subtitle">GoBack Drama Theater</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref } from "vue";

const gobackLogo = ref("/common/goback_logo.webp");
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2vh;
  .logo {
    width: 10vh;
    height: 10vh;
    object-fit: contain;
    border-radius: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2vh;
    color: rgba(0, 83, 117, 1);
    .title {
      font-size: 2.5vh;
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    }
    .subtitle {
      font-size: 2vh;
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    }
  }
}
</style>
