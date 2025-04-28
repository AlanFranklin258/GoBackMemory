<template>
  <div class="script">
    <div class="header">
      <div class="name">剧名</div>
      <div class="from">来源</div>
      <div class="type">类型</div>
      <div class="duration">时长</div>
    </div>

    <div
      v-for="(scripts_per_year, idx) in scripts"
      :key="'scripts' + get_year(idx)"
      :style="{ width: '100%' }"
    >
      <div class="year">{{ get_year(idx) }}</div>
      <div
        v-for="script in scripts_per_year"
        class="line"
        :key="'script.name' + get_year(idx)"
      >
        <div class="name">{{ script.name }}</div>
        <div class="from">{{ script.from }}</div>
        <div class="type">{{ script.type }}</div>
        <div class="duration">{{ script.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import scripts from "~/assets/scripts";
import { get_year } from "~/assets/utils";
</script>

<style lang="less" scoped>
.script {
  width: 95%;
  margin: auto;
  font-size: 1.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    background: rgba(0, 83, 117, 1);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .year {
    width: 100%;
    background: gray;
    color: white;
  }
  .line {
    width: 100%;
    background: white;
    color: black;
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
  }
  .name {
    width: 35%;
  }
  .from {
    width: 35%;
  }
  .type {
    width: 20%;
  }
  .duration {
    width: 10%;
  }
}
</style>
