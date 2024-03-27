<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.image-wrapper-1', {
      scrollTrigger: {
        trigger: '.flex-container-images',
        start: 'top 90%',
        end: 'bottom 90%',
        scrub: true,
      },
      y: -100,
      rotation: -360,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.image-wrapper-2', {
      scrollTrigger: {
        trigger: '.flex-container-images',
        start: 'top 90%',
        end: 'bottom 90%',
        scrub: true,
      },
      y: -100,
      rotation: -360,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from('.image-wrapper-3', {
      scrollTrigger: {
        trigger: '.flex-container-images',
        start: 'top 90%',
        end: 'bottom 90%',
        scrub: true,
      },
      y: -100,
      rotation: -360,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });
  },
};
</script>

<template>


  <section>
    <div class="flex-container-h3">
      <h3 class="bold-weight">Cases</h3>
    </div>

    <div class="flex-container-images">
      <NuxtLink to="/project-een" class="image-wrapper-1">
        <img src="/static/img/annemou-mockup-devices.avif" alt="Afbeelding project een" width="100%" height="100%" />
      </NuxtLink>

      <NuxtLink to="/project-twee" class="image-wrapper-2">
        <img src="/static/img/lux-mockup-devices.avif" alt="Afbeelding project twee" width="100%" height="100%" />
      </NuxtLink>

      <NuxtLink to="/project-drie" class="image-wrapper-3">
        <img src="/static/img/tjoektjoek-mockup-devices.avif" alt="Afbeelding project drie" width="100%" height="100%" />
      </NuxtLink>
    </div>

    <div class="flex-container-par">
      <p class="title-uppercase">Ontdek<span> ons werk</span></p>
      <NuxtLink href="/cases">
        <button class="primary-button bold-weight">Bekijk meer cases</button>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>

section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark-purple);
  margin: 2rem 2rem 15rem 2rem;
  border-radius: 15px 15px 0 0;
  height: 100vh;
}

h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  font-size: 20rem;
  color: var(--background-dark-purple);
  -webkit-text-stroke: 5px var(--teriary-color-yellow);
  text-transform: uppercase;
  z-index: 1;
}

p {
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--tertiary-color-yellow);
  text-transform: uppercase;
  margin-bottom: 2rem;
}

span {
  display: block;
}

.flex-container-images {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.image-wrapper-1, .image-wrapper-2, .image-wrapper-3 {
  width: 30rem;
  height: 35rem;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
}

.image-wrapper-1 {
  margin-top: -10rem;
}

.image-wrapper-3 {
  margin-top: 10rem;
}

.image-wrapper-1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-wrapper-2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-wrapper-3 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img:hover {
  transform: scale(1.3);
  transition: transform 0.3s ease;
  opacity: 0.8;
}

.image-wrapper-1:focus,
.image-wrapper-2:focus,
.image-wrapper-3:focus {
  outline: 5px solid var(--primair-color-l-blue);
}


.flex-container-par {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: -15vh;
  left: 5%;
}

.title-uppercase{
  color: var(--teriary-color-yellow);
  margin-bottom: 1rem;
}


/* Media queries voor verschillende schermformaten */

@media screen and (max-width: 80rem) {

  h3 {
    font-size: 16rem;
  }

  .flex-container-par {
    bottom: -20vh;
  }
}

@media screen and (max-width: 60rem) {

  h3 {
    font-size: 11rem;
    -webkit-text-stroke: 4px var(--teriary-color-yellow);
  }

  .flex-container-images {
    gap: 2rem;
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

  section{
    margin: 2rem 2rem 0 2rem;
    height: auto;
    padding-bottom: 11rem;
  }

  h3 {
    font-size: 8rem;
    -webkit-text-stroke: 2px var(--teriary-color-yellow);
  }

  .flex-container-images {
    flex-direction: column;
    margin: 10rem 0 8rem 0;
  }

  .image-wrapper-1, .image-wrapper-2, .image-wrapper-3 {
    width: 100%;
    height: 20rem;
    margin-top: 0.5rem;
  }

  img{
    width: 100%;
    height: auto;
  }

  .flex-container-par {
    bottom: 2vh;
    margin: 0;
    padding: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .title-uppercase span{
    display: inline;
  }
}

@media screen and (max-width: 30rem) {

  section{
    margin: 1rem 1rem 0 1rem;
  }

  h3 {
    position: absolute;
    font-size: 5rem;
    color: var(--teriary-color-yellow);
    -webkit-text-stroke: 0;
    top: 8%;
  }

  .flex-container-images {
    gap: 1rem;
    margin-top: 15rem;
  }
}

</style>
