<template>
  <div class="home">
    <div
      v-for="teacher in members[0]"
      :key="teacher"
      :class="'teacher-card' + postCls"
    >
      <img :src="teacher.avatar" class="avatar" />
      <div class="right">
        <div :class="'name' + postCls">{{ teacher.name }}</div>
        <div :class="'description' + postCls">{{ teacher.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import members from "~/assets/members";

export default {
  data() {
    return {
      members,
      postCls: "",
    };
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
};
</script>

<style scoped lang="less">
.home {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.teacher-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  margin-bottom: 2rem;
  &.mobile {
    border-radius: 1rem;
    padding: 1rem;
  }
}
.avatar {
  width: 30%;
  object-fit: cover;
  border-radius: 1rem;
  &.mobile {
    height: 15vh;
  }
}
.right {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name {
  width: 100%;
  margin-top: 10%;
  border-bottom: 0.2rem solid black;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  &.mobile {
    margin: 0;
    font-size: 1.5rem;
  }
}
.description {
  width: 100%;
  margin-top: 5%;
  font-size: 1.5rem;
  text-align: justify;
  text-indent: 2rem;
  &.mobile {
    margin: 0;
    font-size: 0.7rem;
  }
}
</style>
