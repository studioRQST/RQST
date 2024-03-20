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

/* Media queries voor verschillende schermformaten */

/* LAPTOP */
@media screen and (max-width: 80rem) {
  h2 {
    font-size: 6rem;
  }

  .arrow-component {
    margin-top: -3rem;
  }
}

/* TABLET */
@media screen and (max-width: 60rem) {
  section {
    margin: 2rem 2rem 0 2rem;
  }


  h2 {
    font-size: 5rem;
  }

  p {
    font-size: 1rem;
  }
}

/* MOBILE L */
@media screen and (max-width: 30rem) {
  section {
    margin: 1rem 1rem 0 1rem;
  }

  h2 {
    font-size: 3rem;
    width: 90vw;
  }

p {
  width: 80vw;
}
}
</style>
<script setup lang="ts">
</script>