<template>
  <div class="about">
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick" stretch>
      <el-tab-pane label="发展沿革" name="history"
        ><History></History
      ></el-tab-pane>
      <el-tab-pane label="社团章程" name="constitution"
        ><Constitution></Constitution
      ></el-tab-pane>
      <el-tab-pane label="历年选本" name="script"
        ><Script></Script>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import History from "~/components/History.vue";
import Constitution from "~/components/Constitution.vue";
import Script from "~/components/Script.vue";

const activeName = ref("history");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="less" scoped>
.about {
  width: 95%;
  margin: auto;
  margin-bottom: 2vh;
}
.el-tabs__item {
  font-size: 2vh;
}
</style>
