<script setup lang="ts">
</script>

<template>
  <section class="wrapper">
    <img src="/static/img/annemou-impressie-1.png" alt="Annemou Logo">
    <img src="/static/img/annemou-impressie-2.png" alt="Annemou Impressie Website">
    <img src="/static/img/annemou-impressie-3.png" alt="Annemou Kleuren">
    <img src="/static/img/annemou-impressie-4.png" alt="Annemou Impressie Website Mobiel">
    <img src="/static/img/annemou-impressie-5.png" alt="Annemou Typografie">
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