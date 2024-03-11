<template>
  <section>
      <div class="flex-container-text">
        <h2>verstuur je<span>Request</span></h2>
        <p>Contacteer ons! Vragen, offertes of meer info nodig? Laat het ons<span>weten via het formulier, e-mail of telefoon. We horen graag van je!</span></p>
      </div>
      <div class="contact-contain">
      <ContactForm />
    </div>
  </section>
</template>

<style scoped>

    section {
      background-color: var(--secundair-color-l-purple);
      margin: 2rem 2rem 0 2rem;
      padding: 15rem 3rem 13rem 3rem;
      border-radius: 15px;
    }
  
    h2 {
      color: var(--background-dark-purple);
      text-transform: uppercase;
    }

    h2 span {
      color: var(--second-background);
      display: block;
    }

    p {
      text-align: center;
      color: var(--background-dark-purple);
      font-size: 1.2rem;
    }
  
    p span {
      display: block;
    }
  
    .flex-container-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      margin-top: -2rem;
    }

    .contact-contain{
      margin-top: 6rem;
    }

</style>