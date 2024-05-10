<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('nl')">nl</button>

    </div>


  </div>
</template>