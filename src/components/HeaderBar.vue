<template>
  <div class="header_bar">
    <img src="/common/goback_logo.webp" alt="" />
    <div class="header_text_box">
      <div class="header_text_cn">告白话剧社</div>
      <div class="header_text_en">GoBack Drama Theater</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const scrollListener = (e: any) => {
  console.log('scroll', window.pageYOffset)
}
import { onMounted } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', scrollListener)
})
</script>

<style lang="less" scoped>
.header_bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: min(100vw, 50vh);
  height: 13vh;
  padding: 2vh;
  z-index: 10;
  img {
    width: 9vh;
    height: 9vh;
    object-fit: contain;
    border-radius: 50%;
  }
  .header_text_box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2vh;
    color: rgba(0, 83, 117, 1);
    font-weight: 900;
    font-style: italic;
    .header_text_cn {
      font-size: 3vh;
    }
    .header_text_en {
      font-size: 2vh;
    }
  }
}
</style>
