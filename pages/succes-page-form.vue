<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex-container">
      <h1> Bedankt voor je <span>RQST</span>, we nemen zo <span>spoedig</span> mogelijk contact met je op!</h1>

     <nuxt-link class="custom-link" to="/contact">Ga terug</nuxt-link>
    </div>
  </section>

</template>

<style scoped>
section {
  position: relative;

}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--second-background);
  height: 90vh;
  margin: 2rem 2rem 2rem 2rem;
  border-radius: 15px;
}

h1 {
  color: var(--secundair-color-l-purple);
  font-size: 3rem;
  text-align: center;
  width: 80%;
  line-height: 3.2rem;
  margin-bottom: 2rem;
}

span {
  color: var(--background-dark-purple);
}


.custom-link {
  color: var(--background-dark-purple);
  text-decoration: none;
  font-weight: bold;
}

</style>
