<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { routes } from 'vue-router/auto/routes'
console.log('🚀 ~ file: index.vue:4 ~ routes:', routes)
import { onActivated, onDeactivated } from 'vue'

defineOptions({
  name: 'Home'
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})
</script>

<template>
  <main>
    <TheWelcome />
    <input type="text" />
  </main>
</template>
