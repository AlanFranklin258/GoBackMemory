<template>
  <div>
    <div class="title">{{data.title}}</div>
    <div class="album">
      <m-album-vue :pictures="data.pictures" :programme="data.programme"></m-album-vue>
    </div>
    <div v-if="data.video.length" class="video">
      <div class="sub-title">视频回放：</div>
      <a v-for="link in data.video" :href="link" target="_blank" :key="link">{{ link }}</a>
    </div>
    <div v-else class="text">暂无视频资源，正在上传到流媒体，敬请期待。</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'mobile'
})
const reloadPage = useReloadPage()
if(reloadPage.value === true){
  reloadPage.value = false
  location.reload()
}
</script>

<script>
import shows from '~/assets/shows'
import mAlbumVue from '~/components/m-album.vue'

export default {
  data: () => ({ shows }),
  components: { mAlbumVue },
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
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}
.album {
  width: 95%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* transform: rotate(90deg) */
}
.sub-title{
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}
.video{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;
  text-align: left;
}
</style>