<script setup lang="ts">
import {ref} from 'vue';

const showNavLinks = ref(false);

const toggleNavLinks = () => {
  showNavLinks.value = !showNavLinks.value;
}
</script>

<template>
  <nav>
    <div class="flex-nav">
      <NuxtLink class="logo-link" href="/home-page">
        <img class="logo" src="/static/img/LogoRqst.svg" alt="Logo Request">
      </NuxtLink>
      <div class="hamburger-menu" @click="toggleNavLinks">
        <svg class="icon" width="35" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <template v-if="showNavLinks">
            <!-- Close button SVG -->
            <svg class="close-button" width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="33.0006" y="4.30435" width="40.5817" height="6.08726" rx="3.04363" transform="rotate(135 33.0006 4.30435)" fill="#F6FFBE"/>
              <rect x="4.30432" y="6.10352e-05" width="40.5817" height="6.08726" rx="3.04363" transform="rotate(45 4.30432 6.10352e-05)" fill="#F6FFBE"/>
            </svg>
          </template>

          <template v-else>
            <!-- Hamburger menu SVG -->
            <rect width="45" height="7" rx="3.5" fill="#F6FFBE"/>
            <rect x="13" y="11" width="32" height="8" rx="4" fill="#F6FFBE"/>
          </template>
        </svg>
      </div>
    </div>
  </nav>

  <div class="list-items-nav">
  <ul class="nav-links" v-if="showNavLinks">
    <p>menu</p>
    <li><NuxtLink class="title-uppercase" href="/over-ons">Over ons</NuxtLink></li>
    <li><NuxtLink class="title-uppercase" href="">Cases</NuxtLink></li>
    <li><NuxtLink class="title-uppercase" href="">Request</NuxtLink></li>


    <div class="icon-social-container">
      <li><a href="https://www.instagram.com/studio.rqst/">
        <img src="/static/img/InstagramIconYellow.svg" alt="Instagram Link">
      </a></li>

      <li><a href="">
        <img src="/static/img/MailIconYellow.svg" alt="Email Link">
        </a></li>
    </div>
  </ul>
  </div>
</template>

<style scoped>

    nav {
      position: relative;
    }

    .flex-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: var(--second-background);
      margin: 0 2rem;
      padding: 1.5rem 3rem;
      border-radius: 0 0 15px 15px;
    }

    .logo-link{
      line-height: 0;
    }

    .logo{
      max-width: 80%;
    }

    .icon {
      margin-top: 1.5rem;
      cursor: pointer;
    }

    .close-button {
      margin-top: 1.5rem;
    }

    .list-items-nav {
      background: var(--second-background);
    }

    p {
      color: var(--secundair-color-l-purple);
      margin: 2rem 0rem 4rem 0rem
    } 

    ul {
      margin-top: -7.5rem;
      margin-left: 5rem;
      padding-top: 10rem;
      list-style-type: none;
      height: 100vh;
    }

    a {
      font-size: 8rem;
      line-height: 10rem;
      color: var( --teriary-color-yellow);
      text-transform: uppercase;
      text-decoration: none;
    }

    a:hover {
      color: var(--secundair-color-l-purple);
      text-decoration: underline;
      transition: ease-in 0.3s;
    }

    a:focus {
      color: var(--primair-color-l-blue);
      outline: none;
      text-decoration: underline;
    }

    .icon-social-container {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }


</style>
