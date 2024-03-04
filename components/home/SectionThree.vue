<script setup lang="ts">

</script>

<template>
  <section>

    <div class="flex-container-images">
    <img class="img-1" src="/images/img-case-1-example.png">
    <img class="img-2" src="/images/img-case-1-example.png">
    <img class="img-3" src="/images/img-case-1-example.png">
    </div>

    <div class="flex-container-h3">
  <h3>CASES</h3>
    </div>

    <div class="flex-container-par">
  <p>ONTDEK <span>ONS WERK</span></p>
<!--  <button>Bekijk meer cases</button>-->
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 0 2rem 0 2rem;
  padding: 0 0 0 3rem;
}

h3 {
  font-size: 15rem;
  position: absolute;
  top: 310%;
  color: var(--background-dark-purple);
  -webkit-text-stroke: 0.1px var(--teriary-color-yellow); /* For Chrome and Safari */
  text-stroke: 0.1px var(--teriary-color-yellow); /* Standard property */

}

p {
  font-size: 3rem;
  color: var(--teriary-color-yellow);
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
  position: relative;
}

img {
  width: 28%;
}

.flex-container-h3 {
  display: flex;
  justify-content: center;
}

.img-2{
  margin-top: 20rem;
}

.img-3 {
  margin-top: 40rem;
}

.flex-container-par {
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
  position: relative;
  top: -35vh;
}
</style>