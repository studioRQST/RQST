<script setup lang="ts">

import '~/assets/main.css'

</script>




<!--HTML -->
<template>

  <link rel="stylesheet" href="https://use.typekit.net/eyu4tao.css">

  <section>


    <h1 class="h1-outline"> JUST </h1>
    <h1 class="h1-request"> REQUEST</h1>

    <div class="svg-container">
    <svg width="85" height="8" viewBox="0 0 75 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.636841" y="0.171753" width="73.5255" height="12.2542" rx="6.12712" fill="#45227A"/>
    </svg>

    <svg width="330" height="8" viewBox="0 0 610 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.792572" y="0.171753" width="610.256" height="12.2542" rx="6.12712" fill="#45227A"/>
    </svg>
    </div>

    <h1> IT! </h1>


  </section>


</template>

<!-- CSS -->
<style scoped>
section {
  position: relative;
  z-index: 1;
  background: var(--second-background);
  margin: 2rem 2rem 0 2rem;
  padding: 2rem 0 0 3rem;
  border-radius: 15px 15px 0 0;
}

h1 {
  font-size: 10rem;
  font-weight: 900;
  color: var(--background-dark-purple);
}

.h1-outline {
  -webkit-text-stroke: 0.1px var(--teriary-color-yellow); /* For Chrome and Safari */
  text-stroke: 0.1px var(--teriary-color-yellow); /* Standard property */
  color: transparent;
}

.h1-request {
  color: var(--teriary-color-yellow);
  //-webkit-text-stroke: 0.1px var(--background-dark-purple);
  //text-stroke: 0.1px var(--background-dark-purple);
}

.svg-container {
  position: absolute;
  display: flex;
  gap: 5rem;
  top: 65%;
  left: 13%;
}


</style>


