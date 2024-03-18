<template>
  <section class="wrapper">
    <img src="/static/img/annemou-impressie.png" alt="">
  </section>

</template>

<style scoped>

  .wrapper {
    background-color: var(--background-dark-purple);
    margin: 2rem;
    border-radius: 15px;
    height: auto;
    overflow: hidden;
  }

  img{
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 30rem) {
      .wrapper {
        margin: 1rem 1rem 0 1rem;
      }
    }

</style>