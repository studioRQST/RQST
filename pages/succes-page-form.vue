<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <h1> Bedankt voor je RQST, we nemen zo spoedig mogelijk contact met je op!</h1>

     <nuxt-link class="custom-link" to="/contact">Ga terug</nuxt-link>
    </div>
  </section>

</template>

<style scoped>
section {
  position: relative;
  top: 50vh;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: var(--teriary-color-yellow);
  margin-bottom: 2rem;
}

.custom-link {
  color: var(--teriary-color-yellow);
  text-decoration: none;
}

</style>