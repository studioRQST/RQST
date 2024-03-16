<template>
    <section>
      <div class="flex-container-text">
        <p class="title-uppercase">Wij staan voor je klaar!</p>
        <h2>Heb je een<span>Request?</span></h2>
        <p class="p-intro">Bij Studio RQST luisteren we naar jouw behoeften en staan we<span>klaar om je te helpen bij het realiseren van je projecten.</span></p>
        <div class="scroll-down">
        <ScrollDownYellow />
        </div>
      </div>
    </section>
</template>
  
  <style scoped>
      
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--second-background);
      margin: 2rem 2rem 0 2rem;
      padding: 2rem 3rem 0 3rem;
      border-radius: 15px;
      height: 100vh;
    }

    .title-uppercase{
      color: var(--teriary-color-yellow);
    }
  
    h2 {
      color: var(--secundair-color-l-purple);
      text-transform: uppercase;
    }

    h2 span {
      color: var(--teriary-color-yellow);
      display: block;
    }
  
    p{
      text-align: center;
      color: var(--secundair-color-l-purple);
    }
  
    p span {
      display: block;
      color: var(--secundair-color-l-purple);
    }
  
    .flex-container-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
    }

    .scroll-down {
      position: relative;
      top: -2rem;
    }

    /* Media queries voor verschillende schermformaten */

    /* LAPTOP */
    @media screen and (max-width: 80rem) {
      h2 {
        font-size: 6rem;
      }
    }

    /* TABLET */
    @media screen and (max-width: 60rem) {
      section {
        margin: 2rem 2rem 0 2rem;
      }


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

      .p-intro {
        font-size: 1rem;
        width: 70vw;
      }
    }


  </style>
<script setup lang="ts">
</script>