<template>
  <div class="member">
    <div v-if="value === '0'" class="teacherarea">
      <TeacherCard
        v-for="teacher in members[parseInt(value)]"
        :key="(teacher as any).name"
        :teacher="teacher"
      ></TeacherCard>
    </div>
    <div v-else class="studentarea">
      <div
        v-for="members_per_group in members[parseInt(value)]"
        :key="(members_per_group as any).group+value"
        :class="'group'+(members_per_group as any).type"
      >
        <ManagerGroup
          v-if="(members_per_group as any).type === 0"
          :managers="(members_per_group as any).members"
        ></ManagerGroup>
        <MemberGroup
          v-else
          :members_per_group="(members_per_group as any).members"
          :groupname="(members_per_group as any).group"
        ></MemberGroup>
      </div>
    </div>
    <el-select
      class="select"
      v-model="value"
      placeholder="第一届成员"
      style="width: 15vh"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import members from "~/assets/members";
import TeacherCard from "~/components/TeacherCard.vue";
import MemberGroup from "~/components/MemberGroup.vue";
import ManagerGroup from "~/components/ManagerGroup.vue";

const value = ref("1");

const options = [
  {
    value: "0",
    label: "指导老师",
  },
  {
    value: "1",
    label: "第一届成员",
  },
  {
    value: "2",
    label: "第二届成员",
  },
  {
    value: "3",
    label: "第三届成员",
  },
  {
    value: "4",
    label: "第四届成员",
  },
  {
    value: "5",
    label: "第五届成员",
  },
  {
    value: "6",
    label: "第六届成员",
  },
  {
    value: "7",
    label: "第七届成员",
  },
  {
    value: "8",
    label: "第八届成员",
  },
  {
    value: "9",
    label: "第九届成员",
  },
  {
    value: "10",
    label: "第十届成员",
  },
];
</script>

<style lang="less" scoped>
.member {
  width: 95%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .select {
    position: fixed;
    top: 15vh;
    right: 50%;
    transform: translateX(150%);
  }
  .teacherarea {
    width: 100%;
    margin-top: 5vh;
  }
  .studentarea {
    width: 100%;
    .group0 {
      width: 100%;
      height: auto;
    }
    .group1 {
      width: 100%;
      margin: 1vh 0;
    }
    .group2 {
      width: 95%;
      margin: 1vh 0;
      margin-left: 5%;
    }
  }
}
</style>
