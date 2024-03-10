<template>
  <section>
    <div class="flex-container-text">
      <div class="hover-background">
        <a class="bold-weight" href="">Project een</a>
      </div>
      <div class="hover-background">
        <a class="bold-weight" href="">Project twee</a>
      </div>
        <div class="hover-background">
        <a class="bold-weight" href="">Project drie</a>
        </div>
          <div class="hover-background">
        <a class="bold-weight" href="">Project vier</a>
          </div>
    </div>
  </section>
</template>

<style scoped>

  section {
      margin: 2rem;
      padding: 3rem;
      border-radius: 15px;
      height: 150vh;
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 5rem 0;
  }

  a{
    color: var(--teriary-color-yellow);
    text-transform: uppercase;
    font-size: 8rem;
    line-height: 8rem;
    text-decoration: none;
  }

  .hover-background {
    padding: 2rem 0 0 0;
  }

  .hover-background:hover {
    background-color: var(--secundair-color-l-purple);
    width: 100vw;
    text-align: center;
    transition: ease-in 0.3s;
  }

  .hover-background:hover a {
    color: var(--second-background);
    transition: ease-in 0.3s;
  }

</style>
<script setup lang="ts">
</script>