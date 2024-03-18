<template>
  <section class="wrapper">
    <img src="/static/img/tjoektjoek-impressie-1.png" alt="TjoekTjoek Brand Identity">
    <img src="/static/img/tjoektjoek-impressie-2.png" alt="TjoekTjoek Typografie">
    <img src="/static/img/tjoektjoek-impressie-3.png" alt="TjoekTjoek Impressie Website">
    <img src="/static/img/tjoektjoek-impressie-4.png" alt="TjoekTjoek Impressie Responsive Website">
    <img src="/static/img/tjoektjoek-impressie-5.png" alt="TjoekTjoek Buttons">
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
    width: 100vw;
    height: auto;
    margin: -1rem;
  }

  @media screen and (max-width: 30rem) {
      .wrapper {
        margin: 1rem 1rem 0 1rem;
      }
    }

</style>