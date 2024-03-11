<template>
  <section>

    <div class="flex-container-text">
      <p class="title-uppercase">Maak kennis met ons</p>
      <h2>Ontmoet <span>Request</span></h2>
      <p>Ontdek het verhaal achter RQST en maak kennis met ons team van creatieve geesten.</p>
      <div class="arrow-component">
        <ScrollDown/>
      </div>
    </div>

  </section>
</template>

<style scoped>

section {
  background-color: var(--teriary-color-yellow);
  margin: 2rem;
  border-radius: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: var(--second-background);
  text-transform: uppercase;
}

span {
  color: var(--background-dark-purple);
  display: block;
}

p {
  color: var(--second-background);
  max-width: 40rem;
  text-align: center;
}

.flex-container-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

</style>
<script setup lang="ts">
</script>