<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-provence-sand text-provence-dark flex flex-col font-sans">
    <AppHeader />
    <main class="grow w-full max-w-7xl mx-auto px-4 lg:px-20 py-8">
      <RouterView />
    </main>
    <AppFooter />

  </div>
</template>