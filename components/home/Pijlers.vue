<template>
  <NuxtMarquee>
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
  </NuxtMarquee>
</template>

<style scoped>

  section {
    display: flex;
    gap: 1rem;
    margin: 2rem 2rem 0rem 0rem;
  }

  p {
    font-size: 3.5rem;
  }

  .container-1, .container-2, .container-3 {
    display: flex;
    justify-content: center;
    border-radius: 15px;
    padding: 2.3rem 3.5rem 2rem 3.5rem;
  }

  .container-1 {
    background: var(--teriary-color-yellow);
    color: var(--background-dark-purple);
    border: solid 4px var(--teriary-color-yellow);
  }

  .container-2 {
    background: var(--secundair-color-l-purple);
    color: var(--background-dark-purple);
    border: solid 4px var(--secundair-color-l-purple);
  }

  .container-3 {
    border: 4px solid var(--teriary-color-yellow);
    color: var(--teriary-color-yellow);
  }


</style>