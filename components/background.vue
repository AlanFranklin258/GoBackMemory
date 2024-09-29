<template>
  <div class="bg"></div>
</template>

<style scoped>
.bg {
  background: linear-gradient(
    135deg,
    rgba(0, 83, 117, 0) 0%,
    rgba(0, 83, 117, 0.2) 20%,
    rgba(0, 83, 117, 0.4) 40%,
    rgba(0, 83, 117, 0.6) 60%,
    rgba(0, 83, 117, 0.8) 80%,
    rgba(0, 83, 117, 1) 100%
  );
  background-size: cover;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -99;
}
</style>
