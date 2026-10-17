<script setup>
import { ref } from 'vue'
import ButtonPill from '@/components/ButtonPill.vue'

const periods = ['Trias', 'Jurassique', 'Crétacé']
const selectedPeriod = ref('Trias')
</script>

<template>
    <section class="hero-section">
        <div class="hero-header">
            <h1>Dinosaures de France</h1>
            <p>Découvrez les espèces ayant foulé le territoire français au Mésozoïque.</p>
        </div>

        <figure class="hero-section-img">
            <picture>
                <source srcset="@/assets/images/adventurous_blondine-museum_1920.jpg" media="(min-width: 768px)" />
                <img src="@/assets/images/icewall42-dinosaur_640.jpg" alt="Squelette de dinosaure exposé au musée" />
            </picture>
        </figure>

        <nav class="hero-section-sort" aria-label="Filtrer par période géologique">
            <ButtonPill v-for="period in periods" :key="period" :title="period" variant="sand"
                :is-active="selectedPeriod === period" @click="selectedPeriod = period" />
        </nav>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
    padding: 2.75rem 1rem 2.12rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 3.5rem 2rem;
    }
}

.hero-header {
    max-width: 60ch;
    margin: 0 auto 1.5rem auto;

    h1 {
        text-align: center;
        color: $provence-clay;
        font-size: 2rem;
        margin-bottom: 0.5rem;

        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
    }

    p {
        text-align: center;
        color: $provence-dark;
        font-size: 1rem;
        line-height: 1.5;

        @media screen and (min-width: 768px) {
            font-size: 1.25rem;
        }
    }
}

.hero-section-img {
    width: 100%;
    height: clamp(20rem, 50vh, 41.25rem);
    margin: 0;

    picture {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        overflow: hidden;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }
}

.hero-section-sort {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;

    @media screen and (min-width: 768px) {
        gap: 1.5rem;
        margin-top: 2rem;
    }
}
</style>