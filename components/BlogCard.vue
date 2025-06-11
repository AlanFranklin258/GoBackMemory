<template>
  <div class="blogcard">
    <img :src="img_prefix + blog.cover" class="cover" />
    <div class="title">{{ blog.title }}</div>
    <div class="info">
      <img :src="img_prefix + blog.avatar" class="avatar" />
      <div class="author">{{ blog.author }}</div>
      <div class="modified">{{ blog.modified }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { img_prefix } from "~/assets/constants";

defineProps<{
  blog: any;
}>();
</script>

<style lang="less" scoped>
.blogcard {
  border-radius: 1vh;
  margin: 0.5vh;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  &:hover {
    cursor: pointer;
    transform: translateY(-1%);
    box-shadow: 0 0.5vh 0.5vh -0.5vh grey;
  }
  .cover {
    width: 100%;
    object-fit: contain;
  }
  align-items: center;
  .title {
    width: 100%;
    padding: 0 1vh;
    text-align: left;
    font-size: 1.8vh;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2vh;
    padding: 0 1vh;
    padding-bottom: 0.5vh;
    color: rgba(0, 0, 0, 0.5);
    .avatar {
      width: 3vh;
      height: 3vh;
      border-radius: 50%;
      object-fit: cover;
    }
    .author {
      text-indent: 0.5vh;
    }
    .modified {
      width: 100%;
      flex: 1;
      text-align: right;
    }
  }
}
</style>
