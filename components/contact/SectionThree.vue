<script setup lang="ts">

</script>

<template>
  <section>

    <div class="flex-container">
      <div class="flex-wrapper">
        <h1 class="title-uppercase">Onze gegevens</h1>
        <p>Bij Studio RQST zijn we er om je te helpen! Hier zijn onze contactgegevens</p>
      </div>

      <div class="flex-wrapper-2">
        <h1 class="title-uppercase">Contact</h1>
        <p>Mail: info@rqst.studio</p>
        <p>KVK:</p>
        <p>BTW:</p>
      </div>

      <div class="flex-wrapper-3">

        <h1 class="title-uppercase">Adres</h1>
        <p>Postadres:<span>Bazelstraat 16, 3555CS Utrecht</span></p>


      </div>
    </div>


  </section>
</template>

<style scoped>
section {
  margin: 2rem 2rem 0 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

span {
  display: block;
}

.flex-container {
  display: flex;
  flex-direction: row;
  height: 40vh;
}

.flex-wrapper {
  display: flex;
  flex-direction: column;
  outline: 5px solid var(--teriary-color-yellow);
  border-radius: 5px;
  color: var(--teriary-color-yellow);
  justify-content: center;
  padding-left: 6rem;
}

.flex-wrapper-2 {
  display: flex;
  flex-direction: column;
  background-color: var(--teriary-color-yellow);
  outline: 5px solid var(--teriary-color-yellow);
  color: var(--background-dark-purple);
  justify-content: center;
  width: 30vw;
  padding-left: 2rem;
}

.flex-wrapper-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--teriary-color-yellow);
  outline: 5px solid var(--teriary-color-yellow);
  margin-left: 1rem;
  color: var(--background-dark-purple);
  border-radius: 0 5px 5px 0;
  width: 30vw;
  padding-left: 2rem;
}


.flex-wrapper p {
  width: 75%;
}

/* Media queries voor verschillende schermformaten */

@media screen and (max-width: 80rem) {
  .flex-wrapper {
    padding-left: 2rem;
  }

.flex-wrapper-2, .flex-wrapper-3 {
  width: 50vw;
}

p {
  font-size: 1.2rem;
}

}

@media screen and (max-width: 60rem) {
h1 {
  font-size: 2rem;
}

  p {
    font-size: 1rem;
  }

  .flex-wrapper {
    padding-left: 1rem;
  }

  .flex-wrapper-2 {
    padding-left: 1rem;
    width: 53vw;
  }

  .flex-wrapper-3 {
    padding-left: 2rem;
  }
}

@media screen and (max-width: 30rem) {

  section {
    margin: 1rem 1rem 1.5rem 1rem;
    height: 85vh;
  }

 .flex-container {
   flex-direction: column;
 }

 .flex-wrapper {
   outline: 3px solid var(--teriary-color-yellow);
   padding: 3rem 0 3rem 1rem;
 }

  .flex-wrapper-2, .flex-wrapper-3 {
    width: 90vw;
    outline: 3px solid var(--teriary-color-yellow);
    padding: 2rem 0 2rem 1rem;
  }

  .flex-wrapper-3 {
    margin-left: 0;
    border-radius: 0 0 5px 5px;
  }
}
</style>