<script setup lang="ts">

</script>

<template>
<section>
  <InstagramFeed/>
</section>
</template>

<style scoped>
section {
  height: 100vh;
  margin: 1rem 1rem 0 1rem;
  border-radius: 15px 15px 0 0;

}

/* TABLET */
@media screen and (max-width: 60rem) {
  section {
    height: 220vh;
  }
}

@media screen and (max-width: 40rem) {
section {
  height: 250vh;
  width: 100vw;
  margin: 0;

}

  h2 {
    font-size: 1rem;
  }
}
</style>

