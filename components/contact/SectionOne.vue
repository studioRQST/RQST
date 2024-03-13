<template>
    <section>
      <div class="flex-container-text">
        <p class="title-uppercase">Wij staan voor je klaar!</p>
        <h2>Heb je een<span>Request?</span></h2>
        <p>Bij Studio RQST luisteren we naar jouw behoeften en staan we<span>klaar om je te helpen bij het realiseren van je projecten.</span></p>
        <ScrollDownYellow />
      </div>
    </section>
</template>
  
  <style scoped>
      
    section {
      background-color: var(--second-background);
      margin: 2rem 2rem 0 2rem;
      padding: 14rem 3rem 0 3rem;
      border-radius: 15px;
      height: 100vh;
    }

    .title-uppercase{
      color: var(--teriary-color-yellow);
    }
  
    h2 {
      color: var(--secundair-color-l-purple);
      text-transform: uppercase;
    }

    h2 span {
      color: var(--teriary-color-yellow);
      display: block;
    }
  
    p{
      text-align: center;
      color: var(--secundair-color-l-purple);
    }
  
    p span {
      display: block;
      color: var(--secundair-color-l-purple);
    }
  
    .flex-container-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      margin-top: -2rem;
    }
  
  </style>