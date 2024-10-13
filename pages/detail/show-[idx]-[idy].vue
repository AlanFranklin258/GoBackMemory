<template>
  <div>
    <div :class="'title'+postCls">{{ albumData.title }}</div>
    <div :class="'album'+postCls">
      <album
        :pictures="albumData.pictures"
        :programme="albumData.programme"
      ></album>
    </div>
    <div v-if="albumData.video.length" :class="'video'+postCls">
      <div :class="'sub-title'+postCls">视频回放：</div>
      <a
        v-for="link in albumData.video"
        :href="link"
        target="_blank"
        :key="link"
        >{{ link }}</a
      >
    </div>
    <div v-else class="text">暂无视频资源，正在上传到流媒体，敬请期待。</div>
  </div>
</template>

<script>
import shows from "~/assets/shows";

export default {
  data() {
    return {
      albumData: null,
      postCls: "",
    };
  },
  computed: {
    albumData() {
      const route = useRoute();
      const idx = parseInt(route.params.idx);
      const idy = parseInt(route.params.idy);
      return shows[idx][idy];
    },
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
.title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  &.mobile{
    font-size: 1.5rem;
  }
}
.album {
  width: 95%;
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: floating 5s;
  &.mobile{
    margin-bottom: 2rem;
  }
}
@keyframes floating {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.sub-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  &.mobile{
    font-size: 1.2rem;
  }
}
.video {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  text-align: left;
  &.mobile{
    font-size: 0.8rem;
  }
}
</style>
