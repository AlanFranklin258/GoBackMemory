<template>
  <div>
    <div
      v-for="(shows_per_year, idx) in shows"
      :key="'shows' + get_year(idx)"
      :style="{ margin: '1vh auto', width: '95%' }"
    >
      <ShowGroup
        :shows_per_year="shows_per_year"
        :idx="idx"
        :handle-select-show="handleSelectShow"
      ></ShowGroup>
    </div>
    <ShowPreview
      v-if="showPreview"
      :showinfo="showInfo"
      :handle-exit="handleExit"
    ></ShowPreview>
  </div>
</template>

<script setup lang="ts">
import shows from "~/assets/shows";
import ShowGroup from "~/components/ShowGroup.vue";
import ShowPreview from "~/components/ShowPreview.vue";
import { get_year } from "~/assets/utils";
import { ref } from "vue";

const showPreview = ref(false);
const showInfo = ref<any>(null);
const handleSelectShow = (idx: number, idy: number) => {
  console.log(idx, idy);
  showPreview.value = true;
  showInfo.value = shows[idx][idy];
};
const handleExit = () => {
  showPreview.value = false;
};
</script>

<style lang="less" scoped></style>
