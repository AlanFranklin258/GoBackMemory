<template>
  <div :class="'managercard type-' + manager.duty[0]">
    <img class="avatar" :src="img_prefix + manager.avatar" />
    <div class="mark">
      <div>{{ manager.mark }}</div>
    </div>
    <div v-if="manager.word" class="popup">
      <div class="carrot"></div>
      <div class="content">{{ manager.word }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
const props = defineProps<{
  manager: any;
}>();
</script>

<style scoped lang="less">
.managercard {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  .avatar {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
  }
  .mark {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 0% 50% 50%;
    color: white;
    background-color: black;
    font-weight: bold;
    text-align: center;
    font-size: 1.2vh;
    padding-bottom: 1vh;
    clip-path: polygon(0 75%, 100% 75%, 100% 95%, 0 95%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .popup {
    opacity: 0;
    position: absolute;
    top: 70%;
    left: -5%;
    width: 110%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 99;
    .carrot {
      width: 1vh;
      height: 0.5vh;
      margin-left: 1vh;
      clip-path: polygon(0 100%, 50% 0, 100% 100%);
      background: white;
    }
    .content {
      font-size: 1vh;
      text-indent: 1vh;
      text-align: justify;
      background: white;
      border-radius: 0.5vh;
      padding: 0.5vh;
    }
  }
}

.managercard:hover {
  cursor: pointer;
  .popup {
    opacity: 1;
  }
}

.type-0 {
  background: linear-gradient(45deg, black 0, black 30%, gold 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 gold;
  }
}
.type-1 {
  background: linear-gradient(45deg, black 0, black 30%, silver 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 dimgray;
  }
}
.type-2 {
  background: linear-gradient(45deg, black 0, black 30%, red 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 red;
  }
}
.type-3 {
  background: linear-gradient(45deg, black 0, black 30%, tan 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 tan;
  }
}
.type-4 {
  background: linear-gradient(45deg, black 0, black 30%, blueviolet 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 blueviolet;
  }
}
.type-5 {
  background: linear-gradient(45deg, black 0, black 30%, hotpink 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 hotpink;
  }
}
.type-6 {
  background: linear-gradient(45deg, black 0, black 30%, skyblue 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 skyblue;
  }
}
.type-7 {
  background: linear-gradient(45deg, black 0, black 30%, steelblue 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 steelblue;
  }
}
.type-8 {
  background: linear-gradient(45deg, black 0, black 30%, seagreen 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 seagreen;
  }
}
.type-9 {
  background: linear-gradient(45deg, black 0, black 30%, darkblue 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 darkblue;
  }
}
.type-10 {
  background: linear-gradient(45deg, black 0, black 30%, gold 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 gold;
  }
}
.type-11 {
  background: linear-gradient(45deg, black 0, black 30%, silver 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 dimgray;
  }
}
.type-12 {
  background: linear-gradient(45deg, black 0, black 30%, peru 100%);
  &:hover {
    box-shadow: 0 0 1.5rem 0 peru;
  }
}
</style>
