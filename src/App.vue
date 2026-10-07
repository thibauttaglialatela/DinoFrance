<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <section class="main-page">
    <AppHeader />

    <main>
      <RouterView />
    </main>

    <AppFooter />

  </section>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-color: $provence-sand;
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
  }
}

  .main-page {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }
</style>