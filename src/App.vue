<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />

  </div>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  background-color: $provence-sand;
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
  }

}
</style>