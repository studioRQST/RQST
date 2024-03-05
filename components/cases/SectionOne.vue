<template>
  <section>
    <div class="flex-container-text">
      <p class="title-uppercase">Verken onze creatieve wereld</p>
      <h2>Ontdek onze <span>Creaties</span></h2>
      <img src="/static/img/ScrollDown.svg" alt="Scroll naar beneden">
    </div>
  </section>
</template>

<style scoped>

  section {
    background-color: var(--secundair-color-l-purple);
    margin: 2rem;
    padding: 3rem;
    border-radius: 15px;
    height: 100vh;
  }

  p{
    color: var(--background-dark-purple);
  }

  h2{
    color: var(--second-background);
    text-transform: uppercase;
  }

  span {
    color: var(--background-dark-purple);
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding-top: 6rem;
  }

</style>