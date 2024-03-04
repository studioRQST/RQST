<script setup lang="ts">


</script>

<template>

  <section>
    <div class="flex-container-text">
      <p>Ontdek onze passie</p>
      <h2>WELKOM BIJ <span class="new-line"><span class="span-color">R</span>E<span class="span-color">Q</span>UE<span
          class="span-color">ST</span></span></h2>
      <p>Bij RQST vervullen we niet alleen jouw wensen, maar zetten we ook jouw RQST om in een creatieve realiteit.</p>
    </div>
  </section>

</template>

<style scoped>
section {
  background-color: var(--teriary-color-yellow);
  margin: 2rem 2rem 0 2rem;
  padding: 2rem 0 0 3rem;
  border-radius: 15px 15px 0 0;
}

h2, p {
  color: var(--second-background);
}

h2 {
  text-align: center;
  font-size: 7rem;
}

.span-color {
  color: var(--background-dark-purple);
}

.flex-container-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 8rem;
  padding-bottom: 8rem;

}

.new-line {
  display: block;
}
</style>