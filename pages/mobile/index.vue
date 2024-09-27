<template>
  <div class="home">
    <div class="title">社团简介</div>
    <div class="text">哈尔滨工业大学（深圳）学生艺术团话剧部，暨告白话剧社，于2015年9月成立。自成立以来，话剧部始终朝着先进艺术社团的方向探索前行，始终为丰富校园生活、发展戏剧文化不懈追求和努力着。</div>
    <NuxtLink to="/about/notice#page-anchor">
      <div class="text" style="text-decoration:underline; color:rgba(0,83,117,1)">网站更新信息<i class="bi bi-box-arrow-in-right" style="margin-left:-2rem"></i></div>
    </NuxtLink>
    <div class="text">请尽可能在电脑端浏览本网站，以获得最好的体验。</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'mobile'
})
</script>

<style scoped>
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title{
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin: 0.5rem 0;
}
.text{
  font-size: 1rem;
  text-align: justify;
  text-indent: 2rem;
  margin: 0.5rem 0;
}
</style>
