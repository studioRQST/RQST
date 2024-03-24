<script setup lang="ts">
</script>

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
    margin: 2rem 1rem 0rem 0rem;
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

  /* MEDIAQUERY */

  /* Media query voor groot tablet */
  @media screen and (max-width: 80rem) {
        
        p{
            font-size: 3rem;
        }

        .container-1, .container-2, .container-3 {
          padding: 2rem 3rem 1.7rem 3rem;
        }
    }
  
  /* Media query voor tablet */
  @media screen and (max-width: 60rem) {
        
        p{
            font-size: 2.5rem;
        }

        .container-1, .container-2, .container-3 {
          padding: 1.7rem 2.7rem 1.4rem 2.7rem;
        }
    }

  /* Media query voor tablet */
  @media screen and (max-width: 30rem) {

      section {
        margin: 1rem 0.5rem 0 0;
      }
        
      p {
        font-size: 2rem;
      }
    }
    
</style>