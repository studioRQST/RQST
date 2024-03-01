<script setup lang="ts">

import LogoRqst from "~/components/navbar/LogoRqst.vue";
</script>

<template>
  <div>

    <div class="flex-navbar">
  <LogoRqst/>


    <svg width="45" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="45" height="7" rx="3.5" fill="#F6FFBE"/>
      <rect x="13" y="11" width="32" height="8" rx="4" fill="#F6FFBE"/>
    </svg>

    </div>



  </div>
</template>

<style scoped>

.flex-navbar {
  display: flex;
  flex-direction: row;
}

</style>