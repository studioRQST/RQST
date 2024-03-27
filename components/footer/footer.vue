<script setup lang="ts">
</script>

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
    </section>

    <section class="links-contain">
      <div class="flex-footer">
        <div class="flex-text">
        <ul>
          <li class="bold-weight">Copyright © 2024 Studio RQST</li>
          <nuxt-link to="terms-conditions">
            <li class="bold-weight">Algemene voorwaarden</li>
          </nuxt-link>
        </ul>
        </div>

          <div class="flex-socials">
            <ul>

              <a href="https://www.instagram.com/studio.rqst/">
            <li>
              <img src="/static/img/InstagramIcon.svg" alt="Instagram Link">
            </li></a>

              <a href="mailto:info@rqst.studio">
            <li>
              <img src="/static/img/MailIcon.svg" alt="Email Link">
            </li></a>
            </ul>
          </div>
      </div>
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
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  margin: 2rem;
  margin-top: -5rem;
  border-radius: 20px;
}

.flex-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-text ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.flex-socials ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

ul {
  list-style-type: none;
}

li {
  color: var(--background-dark-purple);
  font-variation-settings: "wdth" 100, "wght" 700;
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


/* Media queries voor verschillende schermformaten */
/* LAPTOP */
@media screen and (max-width: 80rem) {
  h2 {
    font-size: 6rem;
  }

  .arrow-component {
    margin-top: -3rem;
  }
}

/* TABLET */
@media screen and (max-width: 60rem) {
  section {
    margin: 2rem 2rem 0 2rem;
  }


  h2 {
    font-size: 5rem;
  }

  p {
    font-size: 1rem;
  }
}

/* MOBILE L */
@media screen and (max-width: 30rem) {
  .contact-contain {
    margin: 1rem 1rem 0 1rem;
  }

  .links-contain {
    margin: -2rem 1rem 1rem 1rem;
    padding: 2rem 2.5rem 1.4rem 2.5rem;
  }

  h2 {
    font-size: 3rem;
    width: 90vw;
  }

  p, span {
    display: inline;
    width: 70vw;
  }

  .contact-text {
    font-size: 1rem;
    line-height: 1.7rem;
  }

  .flex-footer {
    display: flex;
    flex-direction: column;
  }

  .flex-text ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .flex-socials ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>