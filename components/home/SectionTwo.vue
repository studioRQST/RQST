<template>
  <section>
    <div class="flex-container-text">
      <p class="title-uppercase">Ontdek onze passie</p>
      <h2>WELKOM BIJ<span class="new-line"><span class="span-color">R</span>E<span class="span-color">Q</span>UE<span
          class="span-color">ST</span></span></h2>
      <p>Bij RQST vervullen we niet alleen jouw wensen,<span>maar zetten we ook jouw RQST om in een creatieve realiteit.</span></p>
    <img src="/static/img/ScrollDown.svg" alt="Scroll naar beneden">
    </div>
  </section>
</template>

<style scoped>

  section {
    background-color: var(--teriary-color-yellow);
    margin: 2rem 2rem 0 2rem;
    padding: 8rem 3rem 0 3rem;
    border-radius: 15px;
    height: 100vh;
  }

  h2, p  {
    color: var(--second-background);
  }

  p{
    text-align: center;
  }

  p span {
    display: block;
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
    margin-top: -2rem;
  }

  .new-line {
    display: block;
  }

</style>