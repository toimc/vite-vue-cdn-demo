<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" name="fade">
      <KeepAlive :include="['Index', 'Home', 'About', '/', '/about/']" :max="20">
        <component :is="Component" :key="route.fullPath" class="p-4 rounded shadow bg-white" />
      </KeepAlive>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to,
.fade-transition-enter-from,
.fade-transition-leave-to {
  opacity: 0;
}
</style>
