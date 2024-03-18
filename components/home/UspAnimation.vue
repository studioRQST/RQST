<script setup lang="ts">

</script>

<template>
  <section class="container">
    <div class="animation">
      <div class="first bold-weight"><div>We design</div></div>
      <div class="second bold-weight"><div>We create</div></div>
      <div class="third bold-weight"><div>We develop</div></div>
    </div>
  </section>
</template>

<style scoped>


.container {
  display: flex;
  margin: -1.4rem;
  background: transparent;
}

.first, .second, .third {
  color: var(--secundair-color-l-purple);
  letter-spacing: 0.1rem;
  font-size: clamp(1rem, 7vw, 7rem);
  text-transform: uppercase;
}

.animation {
  height: 10rem;
  overflow: hidden;
  margin-left: 1rem;
}

.animation > div > div {
  height: 6rem;
  margin-bottom: 6rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -10.62rem;}
  30% {margin-top: -10.62rem;}
  40% {margin-top: -21.24rem;}
  60% {margin-top: -21.24rem;}
  70% {margin-top: -10.62rem;}
  80% {margin-top: -10.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}


@media screen and (max-width: 80rem) {
  .container {
    margin-top: -2.5rem;
    height: 1rem;
    font-size: 1rem;
  }
}


@media screen and (max-width: 60rem) {


}


@media screen and (max-width: 30rem) {
  .container {
    margin-top: -1rem;
}

  .animation {
    height: 3rem;
  }

  .animation > div > div {
    height: 5rem;
  }
}


</style>