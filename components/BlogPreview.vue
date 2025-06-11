<template>
  <div class="blogpreview">
    <div class="container">
      <div class="info">
        <img :src="img_prefix + bloginfo.avatar" class="avatar" />
        <div class="author">{{ bloginfo.author }}</div>
      </div>
      <img :src="img_prefix + bloginfo.cover" class="cover" />
      <div class="title">{{ bloginfo.title }}</div>
      <div
        v-for="content in bloginfo.contents"
        :key="'blogcontent-' + content"
        class="content"
      >
        {{ content }}
      </div>
      <div class="tag">
        <span v-for="tag in bloginfo.tags" :key="'blogtag-' + tag">{{
          "#" + tag + "  "
        }}</span>
      </div>
      <div class="modified">{{ "编辑于" + bloginfo.modified }}</div>
    </div>
    <div class="exit" :onclick="handleExit"></div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref } from "vue";
const props = defineProps<{
  bloginfo: any;
  handleExit: any;
}>();
const handleExit = () => {
  props.handleExit();
};
</script>

<style lang="less" scoped>
.blogpreview {
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

    .cover {
      width: 100%;
      object-fit: cover;
    }
    align-items: center;
    .title {
      width: 100%;
      text-align: left;
      font-size: 2vh;
      font-weight: bold;
      margin: 1vh 0;
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.5vh;
      margin: 1vh 0;
      color: rgba(255, 255, 255, 1);
      .avatar {
        width: 3vh;
        height: 3vh;
        border-radius: 50%;
        object-fit: cover;
      }
      .author {
        text-indent: 0.5vh;
      }
    }
    .content {
      font-size: 1.5vh;
      width: 100%;
      text-align: justify;
    }
    .tag {
      width: 100%;
      font-size: 1.5vh;
      color: rgba(0, 83, 117, 1);
      text-align: left;
      font-weight: bold;
    }
    .modified {
      width: 100%;
      margin: 1vh 0;
      text-align: left;
      font-size: 1.2vh;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
.container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
