<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {onMounted} from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set('#green', {xPercent: -50});

  const rotate = gsap.timeline({
    scrollTrigger: {
      trigger: "#wrap",
      pin: true,
      scrub: 0.2,
      start: 'top top',
      end: '+=10000',
    }
  })
      .to('#green', {
        rotation: 360 * 5,
        duration: 1, ease: 'none',
      });
});


</script>

<template>
  <section>
    <div class="flex-container-text">
      <p class="title-uppercase">Verken onze creatieve wereld</p>
      <h2>Ontdek onze <span>Creaties</span></h2>
      <ScrollDown/>
    </div>
  </section>
</template>

<style scoped>

  section {
    background-color: var(--secundair-color-l-purple);
    margin: 2rem;

    border-radius: 15px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: block;
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
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
    h2 {
      font-size: 5rem;
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
  }





</style>