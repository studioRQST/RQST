<script setup lang="ts">

</script>

<template>
  <section>
    <div class="container container-1">
  <p>webdesign</p>
    </div>
    <div class="container container-2">
  <p>development</p>
    </div>
    <div class="container container-3">
  <p>branding</p>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;
}

p {
  font-size: 3rem;
}

.container-1, .container-2, .container-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 23%;
  height: 5vw;
}

.container-1 {
  background: var(--teriary-color-yellow);
  color: var(--background-dark-purple);
}

.container-2 {
background: var(--secundair-color-l-purple);
  color: var(--background-dark-purple);
}

.container-3 {
  outline: 3px solid var(--teriary-color-yellow);
  color: var(--teriary-color-yellow);
}


</style>