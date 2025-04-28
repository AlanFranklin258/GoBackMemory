<template>
  <div class="index">
    <GobackBanner></GobackBanner>
    <div class="title">首页</div>
    <div class="text">
      哈尔滨工业大学（深圳）学生艺术团话剧部（告白话剧社），于2015年9月成立。自成立以来，话剧部始终朝着先进艺术社团的方向探索前行，始终为丰富校园生活、发展戏剧文化不懈追求和努力着。
    </div>
    <div class="title update">更新信息</div>
    <div v-for="ti in topInforms" :key="ti.contents" class="top inform">
      <div class="title">
        <div>【置顶】重要信息</div>
        <div>{{ ti.date }}</div>
      </div>
      <div v-for="content in ti.contents">
        {{ content }}
      </div>
    </div>
    <div v-for="i in informs" :key="i.contents" class="inform">
      <div class="title">
        <div>日常信息</div>
        <div>{{ i.date }}</div>
      </div>
      <div v-for="content in i.contents">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
import GobackBanner from "~/components/GobackBanner.vue";
import { informs, topInforms } from "~/assets/informs";
export default {
  name: "Index",
  data() {
    return {
      informs,
      topInforms,
    };
  },
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 95%;
    font-size: 2vh;
    font-weight: bold;
    text-align: center;
  }
  .text {
    width: 95%;
    font-size: 1.5vh;
    text-indent: 3vh;
  }
  .update {
    border-top: 0.5vh rgba(0, 83, 117, 1) solid;
    margin-top: 3vh;
  }
  .top {
    color: rgba(0, 83, 117, 1);
  }
  .inform {
    width: 95%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1vh;
    font-size: 1.5vh;
    margin: 0.5vh 0;
    .title {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 1.5vh;
      font-weight: bold;
    }
    .text {
      text-align: justify;
    }
  }
}
</style>
