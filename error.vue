<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})


const handleError = () => clearError({redirect: '/'})
const handleError2 = () => clearError({redirect: '/about'})
const handleError3 = () => clearError({redirect: '/cases'})
const handleError4 = () => clearError({redirect: '/contact'})
</script>

<template>
  <section>
    <div class="flex-container-text">
      <p class="p-yellow">Oops...</p>
      <h2 class="title-uppercase">Lost in request?</h2>
      <p>Niet gevonden wat je zocht? Geen zorgen, we zullen deze RQST voor je oplossen! Klik op een
        van de onderstaande links om terug te keren naar bekende gronden.</p>
      <div class="flex-container-buttons">

        <button @click="handleError">Home</button>
        <button @click="handleError2">Over ons</button>
        <button @click="handleError3">Cases</button>
        <button @click="handleError4">Request?</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--second-background);
  margin: 0 3rem 0 3rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.p-yellow {
  color: var(--secundair-color-l-purple);
  margin-bottom: 2rem
}

h2, p {
  font-family: "stinger-variable", sans-serif;
  text-align: center;
  color: var(--teriary-color-yellow);
}

h2 {
  font-size: 8rem;
}

p {
  margin: 2rem 0 4rem 0;
  width: 50%;
}

.flex-container-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.flex-container-buttons {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

button {
  width: 7rem;
  padding: 0.2rem 0 0.2rem 0;
  background-color: transparent;
  color: var(--secundair-color-l-purple);
  border: solid 3px var(--secundair-color-l-purple);
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.1rem;


}

</style>