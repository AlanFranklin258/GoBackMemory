<template>
  <div :class="'notice-card-container' + topCls">
    <div :class="'notice-title' + postCls + topCls">
      <div class="notice-title-left">
        {{ titleMap[type] }}
      </div>
      <div :class="'notice-title-right' + postCls">{{ timestamp }}</div>
    </div>
    <div :class="'notice-content' + postCls">
      <div v-for="para in content" class="notice-content-para">{{ para }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timestamp: { type: String, default: "" },
    type: { type: Number, default: 0 },
    content: { type: [], default: [] },
  },
  data() {
    return {
      postCls: "",
      topCls: "",
      titleMap: ["↑↑【置顶】重要消息", "网站板块更新", "日常信息更新"],
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
    this.topCls = this.type === 0 ? " top" : "";
  },
  methods: {
    getStyle(index) {
      return {
        color: this.duties[index].color,
        backgroundImage: this.duties[index].backgroundColor,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.notice-card-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;

  &.top {
    color: rgba(0, 83, 117, 1);
  }
}
.notice-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  &.mobile {
    font-size: 1rem;
  }
}
.notice-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  &-para {
    width: 100%;
    text-align: justify;
  }
  &.mobile {
    font-size: 0.8rem;
  }
}
</style>
