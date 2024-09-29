<template>
  <div class="home">
    <div class="paragraph-bg">
      <div :class="'title' + postCls">历年选本</div>
      <div :class="'table-line header' + postCls">
        <div class="name">剧本名</div>
        <div class="source">剧本来源</div>
        <div class="type">类型</div>
        <div class="duration">时长</div>
        <!-- <div class="access">资源</div> -->
      </div>
      <div v-for="(group, year) in scripts" :key="group">
        <div :class="'table-line sub-header' + postCls">
          <div class="name">{{ begin + year }}-{{ begin + year + 1 }}</div>
        </div>
        <div
          v-for="script in group"
          :key="script"
          :class="'table-line cell' + postCls"
        >
          <div class="name">{{ script.name }}</div>
          <div class="source">{{ script.source }}</div>
          <div class="type">{{ script.type }}</div>
          <div class="duration">{{ script.duration }}</div>
          <!-- 暂时不开放剧本资源 -->
          <!-- <div v-if="script.access === ''" class="access">-</div>
          <div v-else class="access">
            <a target="_blank" :href="script.access">查看</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scripts from "~//assets/scripts.js";
export default {
  name: "scripts",
  components: {},
  data() {
    return {
      scripts,
      begin: 2015,
      postCls: "",
    };
  },
  mounted() {
    if (import.meta.client) {
      const isMobile =
        /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile|iPad)/i.test(
          navigator.userAgent
        );
      this.postCls = isMobile ? " mobile" : "";
    }
  },
};
</script>

<style scoped lang="less">
.home {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
  &.mobile {
    font-size: 1.5rem;
  }
}
.paragraph-bg {
  width: 100%;
  border-radius: 1rem;
  padding-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
}
.table-line {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  &.mobile {
    width: 95%;
  }
}
.header {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  background: grey;
  color: white;
  &.mobile {
    font-size: 0.9rem;
  }
}
.sub-header {
  background: lightgray;
  font-size: 1.2rem;
  text-indent: 2rem;
  &.mobile {
    font-size: 0.7rem;
    text-indent: 0.5rem;
  }
}
.cell {
  text-align: center;
  background: white;
  font-size: 1rem;
  border-bottom: 0.1rem solid lightgray;
  &.mobile {
    font-size: 0.5rem;
  }
}
.table-line .name {
  width: 35%;
}
.table-line .source {
  width: 35%;
  border-left: 0.1rem solid lightgray;
}
.table-line .type {
  width: 20%;
  border-left: 0.1rem solid lightgray;
}
.table-line .duration {
  width: 10%;
  border-left: 0.1rem solid lightgray;
}
.table-line .access {
  width: 10%;
  border-left: 0.1rem solid lightgray;
}
</style>
