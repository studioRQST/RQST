<script setup lang="ts">
</script>

<template>
  <section>


    <div class="flex-container">
    <div class="flex-container-text">
      <p class="title-uppercase"> {{ $t("ontdek onze passie") }}</p>
      <h2>WELKOM BIJ<span class="new-line"><span class="span-color">R</span>E<span class="span-color">Q</span>UE<span
          class="span-color">ST</span></span> </h2>



      <p>Bij Studio RQST vervullen we niet alleen jouw wensen,<span> maar zetten we ook jouw RQST om in een creatieve realiteit.</span></p>


    </div>
    <div class="arrow-component">
    <ScrollDown />
    </div>
    </div>
  </section>

</template>

<style scoped>

section {
  background-color: var(--teriary-color-yellow);
  margin: 2rem 2rem 0 2rem;
  border-radius: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2, p {
  color: var(--second-background);
}

p {
  text-align: center;
}

p span {
  display: block;
}

.span-color {
  color: var(--background-dark-purple);
}

.flex-container-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: -2rem;
}

.new-line {
  display: block;
}

.arrow-component {
  margin-top:4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media queries voor verschillende schermformaten */

/* LAPTOP */
@media screen and (max-width: 80rem) {
  h2 {
    font-size: 6rem;
  }
}

@media screen and (max-width: 60rem) {

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
    font-size: 1rem;
    width: 70vw;
  }

  p span {
    display: inline;
  }
}

</style>