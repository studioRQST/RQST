<script setup lang="ts">

import Pijlers from "~/components/home/Pijlers.vue";
</script>

<template>
  <section>
    <div class="flex-container">
      <h4>STUUR ONS <span>JE REQUEST</span></h4>
      <p>Samen maken we van jou RQST een realiteit. <span>Neem vandaag nog contact met ons op!</span></p>
    </div>

  </section>
</template>

<style scoped>
section {
  margin: 0 2rem 0 2rem;
  padding: 10rem 0 10rem 3rem;
  border-radius: 15px 15px 0 0;
  background-color: var(--second-background);
}

h4, p {
  color: var(--teriary-color-yellow);
}

h4 {
  font-size: 8rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  text-align: center;
}

span {
  display: block;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

</style>