<script setup lang="ts">
import {ref} from 'vue';
import LogoNavBar from "~/components/navbar/LogoNavBar.vue";

const showNavLinks = ref(false);

const toggleNavLinks = () => {
  showNavLinks.value = !showNavLinks.value;
}
</script>

<template>
  <nav>
    <div class="flex-nav">
      <LogoNavBar/>
      <div class="hamburger-menu" @click="toggleNavLinks">
        <svg class="icon" width="45" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">

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
    <ul class="nav-links" v-if="showNavLinks">
      <li><a href="#">Over ons</a></li>
      <li><a href="#">Cases</a></li>
      <li><a href="#">Request</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.flex-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--second-background);
  margin: 0 2rem 0 2rem;
  padding: 0 3rem 0 3rem;
  border-radius: 0 0 15px 15px;
}

.icon {
  margin-top: 1.3rem;
  cursor: pointer; /* Add cursor pointer for better UX */
}

.close-button {
  margin-top: 1.3rem;
  z-index: 2;
}

</style>
