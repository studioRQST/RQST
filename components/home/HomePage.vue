<template>
  <div>
    <HomePijlers />
    <HomeSectionOne ref="sectionOne"/>
    <HomeSectionTwo ref="sectionTwo"/>
    <HomeSectionThree />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sectionOne = ref(null);
const sectionTwo = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(sectionTwo.value.$el, {
    yPercent: -80,
    opacity: 1,
    scrollTrigger: {
      trigger: sectionTwo.value.$el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.to(sectionOne.value.$el, {
    yPercent: 50,
    opacity: 1,
    scrollTrigger: {
      trigger: sectionTwo.value.$el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});
</script>
