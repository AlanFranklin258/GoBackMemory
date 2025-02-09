<template>
  <div :class="`member-card-container type-` + duty[0] + postCls">
    <div :class="'popper' + postCls" v-if="word">
      <div :class="'popper-content' + postCls">{{ word }}</div>
      <div class="popper-corner-down"></div>
    </div>
    <div class="member-card">
      <img
        v-if="avatar"
        :src="avatar"
        :class="'member-avatar' + postCls"
        alt=""
      />
      <img
        v-else
        :src="default_avatar"
        :class="'member-avatar' + postCls"
        alt=""
      />
      <div :class="'member-text' + postCls">{{ name }}</div>
      <div v-if="duty_in_show.length" class="duties">
        <div
          v-for="d in duty_in_show"
          :class="'duty' + postCls"
          :key="d"
          :style="getStyle(d)"
        >
          · {{ duties[d].label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import member_duties from "../assets/member_duties";

export default {
  props: {
    avatar: { type: String, default: "" },
    name: { type: String, default: "" },
    word: { type: String, default: "" },
    duty: { type: Array, default: [] },
  },
  data() {
    return {
      duties: member_duties,
      default_avatar: "/GoBack/members/default_member.webp",
      postCls: "",
      duty_in_show: [],
    };
  },
  created() {
    this.duty_in_show = this.duty.filter((e) => e < 10);
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

<style scoped lang="less">
.member-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.5rem;
  padding: 0.5rem;
  // background: linear-gradient(45deg, black 0, black 30%, silver 100%);
  transition: 0.2s;
  &.mobile {
    padding: 0.2rem;
  }
  &.type-0 {
    background: linear-gradient(45deg, black 0, black 30%, gold 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 gold;
    }
  }
  &.type-1 {
    background: linear-gradient(45deg, black 0, black 30%, silver 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 dimgray;
    }
  }
  &.type-2 {
    background: linear-gradient(45deg, black 0, black 30%, red 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 red;
    }
  }
  &.type-3 {
    background: linear-gradient(45deg, black 0, black 30%, tan 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 tan;
    }
  }
  &.type-4 {
    background: linear-gradient(45deg, black 0, black 30%, blueviolet 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 blueviolet;
    }
  }
  &.type-5 {
    background: linear-gradient(45deg, black 0, black 30%, hotpink 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 hotpink;
    }
  }
  &.type-6 {
    background: linear-gradient(45deg, black 0, black 30%, skyblue 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 skyblue;
    }
  }
  &.type-7 {
    background: linear-gradient(45deg, black 0, black 30%, steelblue 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 steelblue;
    }
  }
  &.type-8 {
    background: linear-gradient(45deg, black 0, black 30%, seagreen 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 seagreen;
    }
  }
  &.type-9 {
    background: linear-gradient(45deg, black 0, black 30%, darkblue 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 darkblue;
    }
  }
  &.type-10 {
    background: linear-gradient(45deg, black 0, black 30%, gold 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 gold;
    }
  }
  &.type-11 {
    background: linear-gradient(45deg, black 0, black 30%, silver 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 dimgray;
    }
  }
  &.type-12 {
    background: linear-gradient(45deg, black 0, black 30%, peru 100%);
    &:hover {
      box-shadow: 0 0 1.5rem 0 peru;
    }
  }
}

.member-card-container:hover {
  cursor: pointer;
  // border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
  .popper {
    opacity: 1;
  }
}
.popper {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140%;
  margin: auto;
  position: absolute;
  bottom: 90%;
  left: -10%;
  z-index: 99;
  &.mobile {
    left: -20%;
  }
}

.popper-content {
  padding: 0.3rem;
  // width: max-content;
  height: auto;
  min-height: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  text-indent: 1rem;
  &.mobile {
    padding: 0.1rem;
    width: 22vw;
    border-radius: 0.3rem;
    font-size: 0.5rem;
    text-indent: 0.5rem;
  }
}

.popper-corner-down {
  width: 1rem;
  height: 0.5rem;
  margin-left: 1rem;
  background-color: rgba(255, 255, 255, 1);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}

.member-card {
  // border-radius: 0 0 0.8rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
}

// .member-card:hover {
//   cursor: pointer;
//   box-shadow: 0 10px 25px 0 grey;
//   border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
// }

.member-avatar {
  width: 100%;
  // border-radius: 0.8rem 0.8rem 0 0;
  object-fit: contain;
  &.mobile {
    border-radius: 0.5rem 0.5rem 0 0;
  }
}

.member-text {
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: white;
  &.mobile {
    border-radius: 0 0 0.3rem 0.3rem;
    font-size: 0.5rem;
  }
}

.duties {
  position: absolute;
  bottom: 12%;
  left: -3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
}

.duty {
  width: 3rem;
  margin: 0.1rem 0;
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
  text-align: left;
  text-indent: 0.2rem;
  font-weight: bold;
  font-size: 0.8rem;
  &.mobile {
    width: 2rem;
    font-size: 0.4rem;
  }
}
</style>
