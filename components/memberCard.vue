<template>
  <div :class="'membercard type-' + member.duty[0]">
    <img
      class="avatar"
      :src="
        img_prefix +
        (member.avatar !== '' ? member.avatar : '/members/default_member.webp')
      "
    />
    <div class="mark">{{ member.mark }}</div>
    <div v-if="filteredDuty && filteredDuty.length > 0" class="duty">
      <div
        v-for="duty in filteredDuty"
        class="badge"
        :style="{
          color: duty_badges[duty].badgeColor,
          background: duty_badges[duty].badgeBgColor,
        }"
      >
        {{ duty_badges[duty].label }}
      </div>
    </div>
    <div v-if="member.word" class="popup">
      <div class="carrot"></div>
      <div class="content">{{ member.word }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { duty_badges } from "~/assets/constants";
import { ref } from "vue";
const props = defineProps<{
  member: any;
}>();

const filteredDuty = ref(props.member.duty.filter((d: number) => d < 10));
</script>

<style scoped lang="less">
.membercard {
  flex-shrink: 0;
  width: 12vh;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0.5vh;
  margin-right: 1vh;
  .avatar {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
  .mark {
    width: 100%;
    position: absolute;
    bottom: 0;
    background: black;
    color: white;
    font-size: 1.2vh;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5vh;
  }
  .popup {
    opacity: 0;
    position: absolute;
    top: 70%;
    left: -5%;
    width: 110%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 99;
    .carrot {
      width: 1vh;
      height: 0.5vh;
      margin-right: 2vh;
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
  .duty {
    position: absolute;
    bottom: 10%;
    left: -2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .badge {
      width: 3vh;
      margin: 0.2vh 0;
      font-size: 1vh;
      text-indent: 0.2vh;
      font-weight: bold;
      clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
    }
  }
}

.membercard:hover {
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
