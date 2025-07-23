<template>
  <div class="echo_preview">
    <div class="close_wrap" @click="closeEchoPreview">
      <div class="close_btn"></div>
    </div>
    <div class="echo_info">
      <img :src="echo?.avatar ?? ''" alt="" />
      <div>{{ echo?.author ?? '' }}</div>
    </div>
    <img :src="echo?.cover ?? ''" alt="" />
    <div class="echo_title">{{ echo?.title ?? '' }}</div>
    <div class="echo_content" v-for="content in echo?.contents ?? []">{{ content ?? '' }}</div>
    <div class="echo_tag">{{ '#' + (echo?.tags ?? []).join(' #') }}</div>
    <div class="echo_modified">{{ '编辑于' + (echo?.modified ?? '') }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  echo: any
}>()
import { defineEmits } from 'vue'
const emit = defineEmits(['closeEchoPreview'])
const closeEchoPreview = () => {
  emit('closeEchoPreview')
}
</script>

<style lang="less" scoped>
.echo_preview {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0;
  width: min(100vw, 50vh);
  height: 100vh;
  padding: 0 2vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9));
  opacity: 0;
  z-index: -1;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.2s ease-in-out;
  color: white;

  &.show {
    opacity: 1;
    z-index: 20;
  }

  .close_wrap {
    flex-shrink: 0;
    position: sticky;
    top: 3vh;
    width: 3vh;
    height: 3vh;
    .close_btn {
      width: 100%;
      height: 100%;
      background-color: gray;
      clip-path: polygon(
        0 0,
        10% 0,
        50% 40%,
        90% 0,
        100% 0,
        100% 10%,
        60% 50%,
        100% 90%,
        100% 100%,
        90% 100%,
        50% 60%,
        10% 100%,
        0 100%,
        0 90%,
        40% 50%,
        0 10%
      );
    }
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  .echo_info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 1vh 0;
    font-size: 1.5vh;
    img {
      width: 3vh;
      height: 3vh;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .echo_title {
    width: 100%;
    margin: 1vh 0;
    font-size: 2vh;
    font-weight: 600;
  }
  .echo_content {
    width: 100%;
    font-size: 1.5vh;
    text-align: justify;
  }
  .echo_tag {
    width: 100%;
    font-size: 1.5vh;
    color: rgba(0, 83, 117, 1);
  }
  .echo_modified {
    width: 100%;
    margin: 1vh 0;
    font-size: 1.5vh;
    color: gray;
  }
}
</style>
