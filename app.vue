<link rel="icon" href="/public/favicon.ico">

<template>
  <div>
    <link rel="stylesheet" href="https://use.typekit.net/eyu4tao.css">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.4s ease-in-out;
}

.page-enter-from {
  transform: translateX(100%);
}

.page-leave-to {
  transform: translateX(-100%);
}
</style>

