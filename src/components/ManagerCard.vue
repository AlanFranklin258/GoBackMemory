<template>
  <div class="manager_card">
    <img :src="manager.avatar !== '' ? manager.avatar : '/members/default_member.webp'" alt="" />
    <div class="name_wrap">
      <div class="manager_name">{{ manager.name }}</div>
    </div>
    <div class="word_wrap" v-if="manager.word">
      <div class="manager_word">{{ manager.word }}</div>
      <div class="carrot_up"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  manager: any
}>()
</script>

<style lang="less" scoped>
.manager_card {
  position: relative;

  &:hover {
    .word_wrap {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  }
  .name_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    border-radius: 50%;
    overflow: hidden;

    .manager_name {
      margin-bottom: 1vh;
      font-size: 1.2vh;
      font-weight: 600;
      color: white;
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
    .manager_word {
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
