<template>
  <footer>
    <section class="contact-contain">
      <div class="flex-container">
        <h2>STUUR ONS <span>JE REQUEST</span></h2>
        <p class="contact-text">Samen maken we van jou RQST een realiteit.
          <span>Neem vandaag nog contact met ons op!</span></p>
        <NuxtLink href="/contact">
          <button class="primary-button bold-weight">Stuur je request</button>
        </NuxtLink>
      </div>
      `
    </section>
    <section class="links-contain">
      <ul>
        <div>
          <li><p class="bold-weight">Copyright © 2024 Studio RQST</p></li>
          <li><a class="bold-weight" href="">Algemene voorwaarden</a></li>
        </div>
        <div>
          <li><a href="https://www.instagram.com/studio.rqst/">
            <img src="/static/img/InstagramIcon.svg" alt="Instagram Link">
          </a></li>
          <li><a href="mailto:info@rqst.studio">
            <img src="/static/img/MailIcon.svg" alt="Email Link">
          </a></li>
        </div>
      </ul>
    </section>
  </footer>
</template>

<style scoped>

.contact-contain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 2rem;
  border-radius: 15px;
  background-color: var(--second-background);
}

h2 {
  color: var(--teriary-color-yellow);
}

.contact-text {
  color: var(--teriary-color-yellow);
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
}

span {
  display: block;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
}

.links-contain {
  background-color: var(--secundair-color-l-purple);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin: 2rem;
  margin-top: -5rem;
  border-radius: 20px;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style-type: none;
  align-items: center;
}

div {
  display: flex;
  gap: 1rem;
}


li {
  color: var(--background-dark-purple);
  font-variation-settings: "wdth" 100, "wght" 700;
}

p {
  font-size: 1rem;
}

img:hover {
  background-color: var(--teriary-color-yellow);
  border-radius: 50%;
}


a {
  text-decoration: none;
  color: var(--background-dark-purple);
  font-size: 1rem;
}

a:hover {
  color: var(--second-background);
  text-decoration: underline;
}

a:focus {
  color: var(--second-background);
  text-decoration: underline;
  outline: none;
}


</style>