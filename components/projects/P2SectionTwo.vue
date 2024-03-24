<script setup lang="ts">
</script>

<template>
  <section class="wrapper">
    <img src="/static/img/lux-impressie-1.png" alt="Lux Eventos Logo">
    <img src="/static/img/lux-impressie-2.png" alt="Lux Eventos Impressie Website">
    <img src="/static/img/lux-impressie-3.png" alt="Lux Eventos Kleuren">
    <img src="/static/img/lux-impressie-4.png" alt="Lux Eventos Impressie Responsive Website">
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