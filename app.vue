<template>
  <link rel="stylesheet" href="https://use.typekit.net/eyu4tao.css">
  <div>
    <PageLoader/>
      <NuxtLayout>
        <NuxtLink to="home-page" />
      </NuxtLayout>
    <NuxtPage/>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>


<script setup lang="ts">
</script>
