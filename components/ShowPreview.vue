<template>
  <div class="showpreview">
    <div class="container">
      <div class="title">{{ showinfo.title }}</div>
      <div v-for="content in showinfo.contents" :key="content">
        <div v-if="content.type === 'text'" class="text">
          {{ content.content }}
        </div>
        <div v-else-if="content.type === 'image'">
          <img :src="img_prefix + content.url" class="image" loading="lazy" />
        </div>
        <div v-else-if="content.type === 'video'" class="video">
          <i class="bi bi-play-circle"></i>
          <a :href="content.url" class="video-text">{{ content.caption }}</a>
        </div>
      </div>
      <div v-if="images.length === 0">
        <img :src="img_prefix + showinfo.cover" class="image" />
      </div>
    </div>
    <div class="exit" :onclick="handleExit"></div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref, onMounted } from "vue";
const props = defineProps<{
  showinfo: any;
  handleExit: any;
}>();
const images = ref([]);
const handleExit = () => {
  props.handleExit();
};
onMounted(() => {
  images.value = props.showinfo.contents.filter(
    (content: any) => content.type === "image"
  );
});
</script>

<style lang="less" scoped>
.showpreview {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 1);
  .exit {
    position: absolute;
    top: 2vh;
    left: 2vh;
    width: 5vh;
    height: 5vh;
    background: white;
    clip-path: polygon(
      0 50%,
      40% 0,
      40% 30%,
      100% 30%,
      100% 70%,
      40% 70%,
      40% 100%
    );
    &:hover {
      cursor: pointer;
    }
  }
  .container {
    width: 90%;
    height: 100%;
    margin: auto;
    position: relative;
    overflow-y: scroll;
    /* 隐藏滚动条（兼容多浏览器） */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    color: white;
    padding-top: 10vh;
    .title {
      font-size: 2vh;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
    .text {
      font-size: 1.5vh;
      text-indent: 3vh;
      text-align: justify;
    }
    .image {
      width: 90%;
      object-fit: contain;
      margin: 1vh auto;
    }
    .video {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      &-text {
        text-decoration: underline;
      }
      padding-left: 3vh;
    }
  }
}
.container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
