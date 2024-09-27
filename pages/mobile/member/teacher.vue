<template>
    <div class="home">
        <div v-for="teacher in members[0]" :key="teacher" class="teacher-card">
            <img :src="teacher.avatar" class="avatar">
            <div class="right">
                <div class="name">{{teacher.name}}</div>
                <div class="description">{{teacher.description}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'mobile'
})
</script>

<script>

import members from '~/assets/members'

export default {
  data () {
    return {
      members
    }
  }
}
</script>

<style scoped>
.home{
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.teacher-card{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 1rem;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem;
  margin-bottom: 2rem;
}
.avatar{
  width: 30%;
  height: 15vh;
  object-fit: contain;
  border-radius: 0.5rem;
}
.right{
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name{
  width: 100%;
  border-bottom: 0.2rem solid black;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
}
.description{
  width: 100%;
  font-size: 0.7rem;
  text-align: justify;
  text-indent: 2rem;
}
</style>