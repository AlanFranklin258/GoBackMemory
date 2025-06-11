<template>
  <div class="teachercard">
    <img class="avatar" :src="img_prefix + teacher.avatar" />
    <div class="info">
      <div class="name">{{ teacher.name }}</div>
      <div class="description">{{ teacher.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
defineProps<{
  teacher: any;
}>();
</script>

<style lang="less" scoped>
.teachercard {
  width: 100%;
  margin: 1vh auto;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1vh;
  border-radius: 1vh;
  .avatar {
    width: 12vh;
    height: 16vh;
    object-fit: cover;
    border-radius: 1vh;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1vh;
    .name {
      border-bottom: 0.5vh rgba(0, 83, 117, 1) solid;
      font-size: 2vh;
      font-weight: bold;
      width: 100%;
    }
    .description {
      font-size: 1.2vh;
      text-indent: 2vh;
      text-align: justify;
    }
  }
}
</style>
