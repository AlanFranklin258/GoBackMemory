<template>
  <div>
    <div class="title">{{data.title}}</div>
    <div class="album">
      <album :pictures="data.pictures" :programme="data.programme"></album>
    </div>
    <div v-if="data.video.length" class="video">
      <div class="sub-title">视频回放：</div>
      <a v-for="link in data.video" :href="link" target="_blank" :key="link">{{ link }}</a>
    </div>
    <div v-else class="text">暂无视频资源，正在上传到流媒体，敬请期待。</div>
  </div>
</template>

<script setup>
const reloadPage = useReloadPage()
if(reloadPage.value === true){
  reloadPage.value = false
  location.reload()
}
</script>

<script>
import shows from '~/assets/shows'

export default {
  data: () => ({ shows }),
  computed: {
    data() {
      const route = useRoute()
      const idx = parseInt(route.params.idx)
      const idy = parseInt(route.params.idy)
      return shows[idx][idy]
    }
  }
}
</script>

<style scoped>
.title{
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.album {
  width: 95%;
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sub-title{
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.video{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  text-align: left;
}
</style>