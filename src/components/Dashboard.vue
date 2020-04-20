<template>
  <div class="dashboard">
    <div class="logo-box">
      <div class="logo-img-box">
        <img class="logo-img" src="../assets/img/ass-grabbing.jpg" />
      </div>
      <div class="logo-text-box">
        <svg viewBox="0 0 600 300">
          <symbol id="logo-title">
            <text dy="1em">GOODBYE MY LOVE.cn</text>
          </symbol>
          <use class="logo-text" xlink:href="#logo-title"></use>
          <use class="logo-text" xlink:href="#logo-title"></use>
          <use class="logo-text" xlink:href="#logo-title"></use>
          <use class="logo-text" xlink:href="#logo-title"></use>
          <use class="logo-text" xlink:href="#logo-title"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.logo-box {
  margin: auto 10px;
  display: flex;
  align-items: center;
}

.logo-img-box {
  width: 150px;
  height: 150px;
}

.logo-text-box {
  width: 100%;
  height: 150px;

  svg {
    margin-top: 25px;
  }
}

.logo-img {
  width: 150px;
  height: 150px;
}

.logo-text {
  font: 2em/1 Arial Rounded MT Bold;
  fill: none;
  stroke-width: 1;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  animation: stroke 6s infinite;
}

.logo-text:nth-child(5n + 1) {
  stroke: #9fa8da;
  animation-delay: -1.5s;
}

.logo-text:nth-child(5n + 2) {
  stroke: #9fa8da;
  animation-delay: -3s;
}

.logo-text:nth-child(5n + 3) {
  stroke: #7986cb;
  animation-delay: -4.5s;
}

.logo-text:nth-child(5n + 4) {
  stroke: #5c6bc0;
  animation-delay: -6s;
}

.logo-text:nth-child(5n + 5) {
  stroke: #3f51b5;
  animation-delay: -7.5s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
