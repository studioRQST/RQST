<script setup lang="ts">

</script>

<template>
  <section>

    <div class="flex-container-images">
    <img class="img-1" src="/images/img-case-1-example.png">
    <img class="img-2" src="/images/img-case-1-example.png">
    <img class="img-3" src="/images/img-case-1-example.png">
    </div>

    <div class="flex-container-h3">
      <h3 class="bold-weight">Cases</h3>
    </div>

    <div class="flex-container-par">
      <p class="title-uppercase">Ontdek<span>Ons werk</span></p>
      <button class="primary-button bold-weight">Bekijk meer cases</button>
    </div>
  </section>
</template>

<style scoped>

section {
  position: relative;
  margin-bottom: 15rem;
}

h3 {
  font-size: 20rem;
  position: absolute;
  top: 50%;
  color: var(--background-dark-purple);
  -webkit-text-stroke: 5px var(--teriary-color-yellow);
  text-transform: uppercase;
}

p {
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--teriary-color-yellow);
  text-transform: uppercase;
  margin-bottom: 2rem;
}

span {
  display: block;
}

.flex-container-images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

img {
  width: 30%;
}

.img-2{
  margin-top: 20rem;
}

.img-3 {
  margin-top: 40rem;
}

.flex-container-h3 {
  display: flex;
  justify-content: center;
}

.flex-container-par {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
  bottom: 0;
}

</style>
