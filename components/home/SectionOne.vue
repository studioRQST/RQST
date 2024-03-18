<script setup>
  import UspAnimation from "~/components/home/UspAnimation.vue";
</script>

<template>
  <link rel="stylesheet" href="https://use.typekit.net/eyu4tao.css">
  <section>
    <h1 class="h1-outline bold-weight">JUST</h1>
    <h1 class="h1-request bold-weight">REQUEST</h1>
    <div class="flex-container-usp">
      <h1 class="h1-it bold-weight">IT!</h1>
      <UspAnimation/>
    </div>
  </section>
</template>

<style scoped>

section {
  position: relative;
  background: var(--second-background);
  margin: 2rem 2rem 0 2rem;
  padding: clamp(1rem, 5vw, 2rem) clamp(1rem, 5vw, 2rem);
  border-radius: 15px;
}

h1 {
  font-size: clamp(5rem, 15vw, 15rem);
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

/* Media queries voor verschillende schermformaten */

@media screen and (max-width: 80rem) {

  h1 {
    line-height: 1.1;
  }

}

@media screen and (max-width: 60rem) {

  h1 {
    line-height: 1.4;
  }

}

@media screen and (max-width: 30rem) {

  section{
    margin: 1rem 1rem 0 1rem;
  }

  h1 {
    line-height: 1.5;
  }

  .h1-outline {
    -webkit-text-stroke: 2px var(--secundair-color-l-purple);
  }

  .h1-request{
    font-size: 4rem;
  }
}

</style>


