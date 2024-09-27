<template>
    <div>
        <NuxtLink
            v-if="type===0"
            :to="`/mobile/detail/show-${idx}-${idy}`"
        >
            <div class="activity-card-container">
                <img :src="cover" class="cover">
                <div class="title">{{title}}</div>
            </div>
        </NuxtLink>
        <NuxtLink
            v-if="type===1"
        ></NuxtLink>
    </div>
</template>

<script>
export default {
  props: {
    title: {type: String, default: ''},
    cover: {type: String, default: ''},
    idx: {type: Number, default: 0},
    idy: {type: Number, default: 0},
    // type: 0 for show, 1 for party
    type: {type: Number, default: 0}
  }
}
</script>

<style scoped>
.activity-card-container {
  border-radius: 0.5rem;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
}
.activity-card-container:hover{
  cursor: pointer;
  transform: translateY(-1%);
  box-shadow: 0 20px 25px -5px grey;
}
.cover{
  width: 100%;
  height: 5rem;
  object-fit: cover;
}
.title{
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
}
</style>