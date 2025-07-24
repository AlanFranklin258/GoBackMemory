<template>
  <div class="loading_layer">
    <div class="loading_text">Loading...</div>
    <div class="loading_shadow"></div>
  </div>
</template>

<style lang="less" scoped>
.loading_layer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: calc(min(50vw, 25vh)-50vw);
  width: min(100vw, 50vh);
  height: 100vh;
  background-color: rgba(0, 83, 117);
  overflow: hidden;
  z-index: 999;
  transition: all 1s ease-in-out;

  &.fade {
    opacity: 0;
    z-index: -999;
  }

  .loading_text {
    font-size: 3vh;
    font-weight: 900;
    color: white;
    animation: textani 1s ease-in-out infinite;
  }

  @keyframes textani {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .loading_shadow {
    position: absolute;
    top: -200vh;
    left: -200vw;
    width: 300vw;
    height: 300vh;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 55%
    );
    animation: shadowani 3s ease-in-out infinite;
  }

  @keyframes shadowani {
    0% {
      top: -200vh;
      left: -200vw;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
}
</style>
