<template>
  <div class="manager_area">
    <div v-if="managers.length > 5" class="managers">
      <ManagerCard class="vice" :manager="managers[5]"></ManagerCard>
      <ManagerCard class="vice" v-if="managers.length > 6" :manager="managers[6]"></ManagerCard>
      <div v-else class="placeholder"></div>
    </div>
    <div v-if="managers.length > 0" class="managers">
      <ManagerCard class="vice" v-if="managers.length > 1" :manager="managers[1]"></ManagerCard>
      <ManagerCard class="master" :manager="managers[0]"></ManagerCard>
      <ManagerCard class="vice" v-if="managers.length > 2" :manager="managers[2]"></ManagerCard>
      <div v-else class="placeholder"></div>
    </div>
    <div v-if="managers.length > 3" class="managers">
      <ManagerCard class="vice" :manager="managers[3]"></ManagerCard>
      <ManagerCard class="vice" v-if="managers.length > 4" :manager="managers[4]"></ManagerCard>
      <div v-else class="placeholder"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ManagerCard from './ManagerCard.vue'
const props = defineProps<{
  managers: any
}>()
</script>

<style lang="less" scoped>
.manager_area {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .managers {
    display: flex;
    flex-direction: row;
    align-items: center;
    .master {
      width: min(30vw, 15vh);
      height: min(30vw, 15vh);
    }
    .vice {
      width: min(25vw, 12vh);
      height: min(25vw, 12vh);
      margin: 0 1vh;
    }
    .placeholder {
      width: min(25vw, 12vh);
      height: min(25vw, 12vh);
    }
  }
}
</style>
