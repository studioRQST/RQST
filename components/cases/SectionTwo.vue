<template>
  <section>
    <div class="flex-container-text">
        <a class="bold-weight" href="">Project een</a>
        <a class="bold-weight" href="">Project twee</a>
        <a class="bold-weight" href="">Project drie</a>
        <a class="bold-weight" href="">Project vier</a>
    </div>
  </section>
</template>

<style scoped>

  section {
      margin: 2rem;
      padding: 3rem;
      border-radius: 15px;
      height: 100vh;
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 5rem 0rem;
  }

  a{
    color: var(--teriary-color-yellow);
    text-transform: uppercase;
    font-size: 8rem;
    line-height: 8rem;
    text-decoration: none;
  }

</style>