<script setup lang="ts">

</script>

<template>
  <a href="">
    <div class="box">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </a>
</template>

<style scoped>


.box span {
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid var(--background-dark-purple);
  border-bottom: 3px solid var(--background-dark-purple);;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
  border-radius: 2px;
}

.box span:nth-child(2) {
  animation-delay: -0.2s;
}

.box span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: rotate(45deg) translate(10px, 10px);
  }
  100% {
    opacity: 0;
  }
}

</style>