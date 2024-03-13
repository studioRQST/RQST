<script setup>
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const images = document.querySelectorAll('.flex-container-images img');


  images.forEach((image, index) => {
    gsap.from(image, {
      y: '100%',
      opacity: 0.1,
      rotation: 360,
      duration: 1,
      scrollTrigger: {
        trigger: '.flex-container-images ',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
        toggleActions: "play none none none"
      }

    });

  });

});


</script>

<template>
  <section class="section">

    <div class="flex-container-images">
      <img class="img-1" src="/static/img/img-case-1-example.png">
      <img class="img-2" src="/static/img/img-case-1-example.png">
      <img class="img-3" src="/static/img/img-case-1-example.png">
    </div>

    <div class="flex-container-h3">
      <h3 class="bold-weight">Cases</h3>
    </div>

    <div class="flex-container-par">
      <p class="title-uppercase">Ontdek<span>Ons werk</span></p>
      <NuxtLink href="/cases">
        <button class="primary-button bold-weight">Bekijk meer cases</button>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>

section {
  background-color: var(--background-dark-purple);
  position: relative;
  margin: 2rem 2rem 15rem 2rem;
  border-radius: 15px 15px 0 0;

}

h3 {
  font-size: 20rem;
  position: absolute;
  top: 50%;
  color: var(--background-dark-purple);
  -webkit-text-stroke: 5px var(--teriary-color-yellow);
  text-transform: uppercase;
}

p {
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--teriary-color-yellow);
  text-transform: uppercase;
  margin-bottom: 2rem;
}

span {
  display: block;
}

.flex-container-images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

img {
  width: 30%;
}

.img-2 {
  margin-top: 20rem;
}

.img-3 {
  margin-top: 40rem;
}

.flex-container-h3 {
  display: flex;
  justify-content: center;
}

.flex-container-par {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
  bottom: 0;
}

/* Media queries voor verschillende schermformaten */

@media screen and (max-width: 80rem) {

  h3 {
    font-size: 16rem;
  }

  .flex-container-par {
    margin-left: 4rem;
  }
}

@media screen and (max-width: 60rem) {

  h3 {
    font-size: 11rem;
    -webkit-text-stroke: 4px var(--teriary-color-yellow);
  }

  .flex-container-images {
    gap: 1rem;
  }

  .flex-container-par {
    margin-left: 3rem;
  }

  .title-uppercase{
      font-size: 2rem;
      line-height: 2rem;
  }
}

@media screen and (max-width: 40rem) {

  h3 {
    font-size: 8rem;
    -webkit-text-stroke: 2px var(--teriary-color-yellow);
  }

  .flex-container-images {
    flex-direction: column;
    gap: 0.7rem;
  }

  img{
    width: 50%;
  }

  .img-2, .img-3{
    margin: 0;
  }

  .img-1{
    margin-right: 15rem;
  }

  .img-3{
    margin-left: 15rem;
  }

  .flex-container-par {
    margin: 0;
  }
}

@media screen and (max-width: 30rem) {

  h3 {
    font-size: 6rem;
    -webkit-text-stroke: 1px var(--teriary-color-yellow);
  }

  .flex-container-images {
    gap: 0.5rem;
  }
}

</style>
