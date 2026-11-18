<script setup>
import { ref, watch } from 'vue';
import ButtonPill from './ButtonPill.vue';
import { fetchOneDinosaurPicture } from '@/services/wikipediaService.js';

const props = defineProps({
  dinosaur: {
    type: Object,
    required: true
  }
})

const dinoPicture = ref(null)
const loadingPicture = ref(true)
const errorPicture = ref(null)

watch(
  () => props.dinosaur,
  async (newDino) => {
    if (!newDino?.name) {
      dinoPicture.value = null
      errorPicture.value = null
      loadingPicture.value = false
      return
    }

    loadingPicture.value = true
    errorPicture.value = null

    try {
      dinoPicture.value = await fetchOneDinosaurPicture(newDino.name)
    } catch (err) {
      errorPicture.value = "Image impossible à charger"
      dinoPicture.value = null
      console.error(err.message)
    } finally {
      loadingPicture.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <article class="dino-card">
    <div class="card-media" v-if="dinoPicture?.imageSrc">
      <img :src="dinoPicture.imageSrc" :alt="`Illustration de ${dinosaur.name}`" />
    </div>
    <div class="card-media" v-else>
      <img src="@/assets/images/allosaurus_fossil.jpg" alt="Squelette ou environnement de dinosaure" />
    </div>

    <header class="card-title">
      <h3>{{ dinosaur.name }}</h3>
      <p>{{ dinosaur.scientificName }}</p>
    </header>

    <ButtonPill :title="dinosaur.period" variant="fossil" />

    <section class="card-content">
      <p><strong>Lieu de vie : </strong>{{ dinosaur.habitat }}</p>
      <p><strong>Régime alimentaire : </strong>{{ dinosaur.diet }}</p>
    </section>

    <RouterLink :to="`/dinosaur-info/${dinosaur.id}`" class="link-dino-page">Découvrir</RouterLink>
  </article>
</template>

<style lang="scss" scoped>
@use "sass:color";

.dino-card {
  display: flex;
  flex-direction: column;
  background-color: $provence-white;
  border: 1px solid $provence-fossil;
  border-radius: 1rem;
  padding: 1rem;
  gap: 0.75rem;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media screen and (min-width: 768px) {
    padding: 1.25rem;
    gap: 1rem;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba($provence-dark, 0.08);
    }
  }

  .card-media {
    width: 100%;
    height: 11.25rem;
    border-radius: 0.75rem;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      height: 13.5rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      display: block;
    }
  }

  .card-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: $provence-clay;
      line-height: 1.2;
      text-transform: uppercase;
      overflow-wrap: break-word;
      hyphens: auto;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

    p {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.8rem;
      font-style: italic;
      color: $provence-muted;
      line-height: 1.35;

      @media screen and (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    p {
      color: $provence-dark;
      font-size: 0.8rem;
      line-height: 1.4;

      @media screen and (min-width: 768px) {
        font-size: 0.9rem;
      }

      strong {
        font-weight: 600;
      }
    }
  }

  .link-dino-page {
    display: inline-block;
    text-decoration: none;
    background-color: $provence-clay;
    color: $provence-white;
    padding: 0.75rem 0.625rem;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: auto;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: color.adjust($provence-clay, $lightness: -5%);
    }
  }
}
</style>