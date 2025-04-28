<template>
  <div class="history">
    <div class="title">告白剧社·大事纪年</div>
    <div class="header">
      <div class="name">事件</div>
      <div class="date">时间</div>
      <div class="statement">备注</div>
    </div>

    <div v-for="events in events" class="line" :key="events.name">
      <div class="name">{{ events.name }}</div>
      <div class="date">{{ events.date }}</div>
      <div class="statement">{{ events.statement }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import events from "~/assets/events";
</script>

<style lang="less" scoped>
.history {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 2vh;
    font-weight: bold;
  }
  .header {
    width: 100%;
    background: rgba(0, 83, 117, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    font-size: 1.5vh;
    font-weight: bold;
    .statement {
      text-align: center;
    }
  }
  .line {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: black;
    font-size: 1.2vh;
    border-bottom: 0.1vh rgba(0, 83, 117, 1) solid;
    // .statement {
    //   text-indent: 2vh;
    // }
  }
  .name {
    width: 30%;
    text-align: center;
  }
  .date {
    width: 18%;
    text-align: center;
    border-left: 0.1vh rgba(0, 83, 117, 1) solid;
    border-right: 0.1vh rgba(0, 83, 117, 1) solid;
  }
  .statement {
    width: 50%;
  }
}
</style>
