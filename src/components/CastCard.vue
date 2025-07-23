<template>
  <div class="cast_card">
    <img :src="cast.avatar !== '' ? cast.avatar : '/members/default_member.webp'" alt="" />
    <div :class="'name_wrap ' + cast.side">
      <div class="cast_info">{{ cast.name + '  饰  ' + cast.character }}</div>
    </div>
    <div class="word_wrap" v-if="cast.word">
      <div class="cast_word">{{ cast.word }}</div>
      <div class="carrot_up"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  cast: any
}>()
</script>

<style lang="less" scoped>
.cast_card {
  position: relative;
  &:hover {
    .word_wrap {
      opacity: 1;
    }
  }

  img {
    width: 11vh;
    height: 14vh;
    margin: 0.5vh;
    object-fit: cover;
  }
  .name_wrap {
    position: absolute;
    top: 1vh;
    background-color: rgba(0, 0, 0, 0.3);
    border-right: wheat 0.2vh solid;

    .cast_info {
      writing-mode: vertical-lr;
      font-size: 1.2vh;
      color: wheat;
    }

    &.left {
      left: 1vh;
    }

    &.right {
      right: 1vh;
    }
  }

  .word_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 70%;
    left: -10%;
    width: 120%;
    opacity: 0;

    .carrot_up {
      width: 2vh;
      height: 1vh;
      margin-left: 2vh;
      clip-path: polygon(0 0, 50% 100%, 100% 0);
      background-color: white;
    }
    .cast_word {
      box-sizing: border-box;
      width: 100%;
      margin-top: -1px;
      color: black;
      background-color: white;
      border-radius: 1vh;
      font-size: 1.2vh;
      padding: 0.5vh;
      text-align: justify;
    }
  }
}
</style>
