<template>
  <div :class="'managergroup height-' + managers.length">
    <div class="title">社团管理员</div>
    <div v-for="(manager, idx) in managers" :class="'manager-' + idx">
      <ManagerCard :manager="manager"></ManagerCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ManagerCard from "./ManagerCard.vue";
defineProps<{ managers: any }>();
</script>

<style lang="less" scoped>
.managergroup {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .title {
    position: absolute;
    top: 1vh;
    left: 2vh;
    color: rgba(0, 83, 117, 1);
    font-size: 2vh;
    font-weight: bold;
  }
  .manager {
    &-0 {
      width: 15vh;
      height: 15vh;
      margin: 0 auto;
      margin-top: 5vh;
    }
    &-1 {
      position: absolute;
      top: 9vh;
      left: 5%;
      width: 12vh;
      height: 12vh;
    }

    &-2 {
      position: absolute;
      top: 17vh;
      left: 57%;
      width: 12vh;
      height: 12vh;
    }

    &-3 {
      position: absolute;
      top: 6vh;
      left: 69%;
      width: 12vh;
      height: 12vh;
    }

    &-4 {
      position: absolute;
      top: 19vh;
      left: 22%;
      width: 12vh;
      height: 12vh;
    }
  }
}
.height {
  &-1 {
    height: 22vh;
  }
  &-2{
    height: 22vh;
  }
  &-3{
    height: 30vh;
  }
  &-4{
    height: 30vh;
  }
  &-5{
    height: 32vh;
  }
}
</style>
