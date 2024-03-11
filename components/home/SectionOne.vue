<script setup>


import UspAnimation from "~/components/home/UspAnimation.vue";
</script>

<!--HTML -->
<template>
  <link rel="stylesheet" href="https://use.typekit.net/eyu4tao.css">
  <section>

    <h1 class="h1-outline bold-weight">JUST</h1>
    <h1 class="h1-request bold-weight">REQUEST</h1>

    <div class="svg-container">
      <svg width="797" height="13" viewBox="0 0 797 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="187.793" y="0.171753" width="560" height="12.2542" rx="6.12712" fill="#45227A"/>
        <rect x="0.636841" y="0.171753" width="73.5255" height="12.2542" rx="6.12712" fill="#45227A"/>
      </svg>
    </div>

    <div class="flex-container-usp">
      <h1 class="h1-it bold-weight">IT!</h1>
      <UspAnimation/>
    </div>


  </section>


</template>

<!-- CSS -->
<style scoped>

section {
  position: relative;
  background: var(--second-background);
  margin: 2rem 2rem 0 2rem;
  padding: 2rem 3rem 0 3rem;
  border-radius: 15px;
}

h1 {
  font-size: 15rem;
  color: var(--background-dark-purple);
}

.h1-outline {
  -webkit-text-stroke: 4px var(--secundair-color-l-purple);
  color: transparent;
}

.h1-request {
  color: var(--teriary-color-yellow);
  margin-top: -2rem;
}

.h1-it {
  margin-top: -2rem;
}

.svg-container {
  position: absolute;
  top: 65%;
  left: 20%;
}

.flex-container-usp {
  display: flex;
  flex-direction: row;
}


</style>


