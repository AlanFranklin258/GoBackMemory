<template>
  <div class="home">
    <div v-for="(group, id) in groups" :key="group.group" class="col">
      <div v-if="group.type === 0" class="col type-0">
        <div :class="'title-1' + postCls">{{ group.group }}</div>
        <div class="row" v-for="row in group.members" :key="row">
          <member-card
            v-for="member in row"
            :key="member"
            :avatar="member.avatar"
            :name="member.mark"
            :word="member.word"
            :duty="member.duty"
            style="width: 19%; margin: auto"
          ></member-card>
        </div>
      </div>
      <div v-if="group.type === 1" class="col type-1">
        <div :class="'title-1' + postCls">{{ group.group }}</div>
        <div class="row" v-for="row in group.members" :key="row">
          <member-card
            v-for="member in row"
            :key="member"
            :avatar="member.avatar"
            :name="member.mark"
            :word="member.word"
            :duty="member.duty"
            style="width: 19%; margin: auto"
          ></member-card>
        </div>
      </div>
      <div v-if="group.type === 2" :class="'col type-2' + postCls">
        <div :class="'title-2' + postCls">
          <div
            v-if="!group.open"
            class="open-btn"
            @click="changeOpen(id)"
          ></div>
          <div v-else class="close-btn" @click="changeOpen(id)"></div>
          {{ group.group }}
        </div>
        <div v-if="group.open" class="group-content">
          <div class="row" v-for="row in group.members" :key="row">
            <member-card
              v-for="member in row"
              :key="member"
              :avatar="member.avatar"
              :name="member.mark"
              :word="member.word"
              :duty="member.duty"
              style="width: 18%; margin: 0 1%"
            ></member-card>
          </div>
          <div
            v-for="(subGroup, subId) in group.subGroups"
            :key="subGroup.group"
            class="col type-3"
          >
            <div :class="'title-3' + postCls">
              <div
                v-if="!subGroup.open"
                class="open-btn"
                @click="changeOpenSub(id, subId)"
              ></div>
              <div
                v-else
                class="close-btn"
                @click="changeOpenSub(id, subId)"
              ></div>
              {{ subGroup.group }}
            </div>
            <div v-if="subGroup.open" class="group-content">
              <div class="sub-row" v-for="row in subGroup.members" :key="row">
                <member-card
                  v-for="member in row"
                  :key="member"
                  :avatar="member.avatar"
                  :name="member.mark"
                  :word="member.word"
                  :duty="member.duty"
                  style="width: 18%; margin: 0 1%"
                ></member-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from "../../assets/members";
import memberCardVue from "../../components/memberCard.vue";

export default {
  components: { memberCardVue },
  data() {
    return {
      members,
      id: "",
      groups: [],
      col: 5,
      postCls: "",
    };
  },
  created() {
    this.id = parseInt(useRoute().params.id);
    this.divider();
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
    divider() {
      for (let i = 0; i < members[this.id].length; i++) {
        let group = {};
        group.type = members[this.id][i].type;
        group.group = members[this.id][i].group;
        group.members = [];
        group.subGroups = [];
        group.open = members[this.id][i].type <= 1 ? true : false;
        let row = [];
        for (let j = 0; j < members[this.id][i].members.length; j++) {
          row.push(members[this.id][i].members[j]);
          if (
            j % this.col === this.col - 1 ||
            j === members[this.id][i].members.length - 1
          ) {
            group.members.push(row);
            row = [];
          }
        }
        this.groups.push(group);
      }
      let cursor = -1;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].type === 2) {
          cursor = i;
        }
        if (this.groups[i].type === 3) {
          this.groups[cursor].subGroups.push(this.groups[i]);
        }
      }
      this.groups = this.groups.filter((e) => e.type !== 3);
    },
    changeOpen(id) {
      if (this.groups[id].type <= 1) return;
      this.groups[id].open = ~this.groups[id].open;
      if (!this.groups[id].open) {
        this.groups[id].subGroups.forEach((sg) => {
          sg.open = false;
        });
      }
    },
    changeOpenSub(id, subId) {
      this.groups[id].subGroups[subId].open =
        ~this.groups[id].subGroups[subId].open;
    },
  },
};
</script>

<style scoped lang="less">
.home {
  width: 95%;
}

.title-1 {
  width: 100%;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  text-indent: 0.5rem;
  border-left: 1rem solid rgba(0, 83, 117, 1);
  &.mobile {
    font-size: 1.2rem;
  }
}

.title-2 {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 0.2rem solid rgba(0, 83, 117, 1);
  &.mobile {
    font-size: 1.2rem;
    .open-btn {
      width: 2rem;
      height: 2rem;
    }
    .close-btn {
      width: 2rem;
      height: 2rem;
    }
  }
  .open-btn {
    background-color: rgba(0, 83, 117, 1);
    width: 3rem;
    height: 3rem;
    clip-path: polygon(
      0 0,
      0 80%,
      50% 100%,
      100% 80%,
      100% 60%,
      50% 80%,
      0 60%,
      0 40%,
      50% 60%,
      100% 40%,
      100% 0
    );
    &:hover {
      cursor: pointer;
    }
  }
  .close-btn {
    background-color: rgba(0, 83, 117, 1);
    width: 3rem;
    height: 3rem;
    clip-path: polygon(
      0 0,
      0 100%,
      50% 80%,
      100% 100%,
      100% 80%,
      50% 60%,
      0 80%,
      0 60%,
      50% 40%,
      100% 60%,
      100% 0
    );
    &:hover {
      cursor: pointer;
    }
  }
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.type-0 {
  width: 100%;
}

.type-1 {
  width: 100%;
}

.type-2 {
  width: 100%;
  // border-radius: 0 0 1rem 1rem;
  // background-color: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  margin-top: 1rem;
  padding-bottom: 1rem;
  &.mobile {
    border-radius: 0 0 1rem 1rem;
  }
}

.type-3 {
  width: 95%;
  margin-left: 5%;
  margin-top: 1rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.row {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.title-3 {
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 0.2rem solid rgba(0, 83, 117, 1);
  &.mobile {
    font-size: 1rem;
    .open-btn {
      width: 1.5rem;
      height: 1.5rem;
    }
    .close-btn {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .open-btn {
    background-color: rgba(0, 83, 117, 1);
    width: 2rem;
    height: 2rem;
    clip-path: polygon(
      0 0,
      0 80%,
      50% 100%,
      100% 80%,
      100% 60%,
      50% 80%,
      0 60%,
      0 40%,
      50% 60%,
      100% 40%,
      100% 0
    );
    &:hover {
      cursor: pointer;
    }
  }
  .close-btn {
    background-color: rgba(0, 83, 117, 1);
    width: 2rem;
    height: 2rem;
    clip-path: polygon(
      0 0,
      0 100%,
      50% 80%,
      100% 100%,
      100% 80%,
      50% 60%,
      0 80%,
      0 60%,
      50% 40%,
      100% 60%,
      100% 0
    );
    &:hover {
      cursor: pointer;
    }
  }
}

.sub-row {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.group-content {
  animation: expand 1s ease-in-out;
}

@keyframes expand {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
