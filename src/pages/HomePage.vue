<script setup>
import { computed, onMounted, ref } from 'vue'
import ButtonPill from '@/components/ButtonPill.vue'
import DinoCard from '@/components/DinoCard.vue';
import { fetchFrenchDinosaurs } from '@/services/pbdbServices';

const periods = ['Trias', 'Jurassique', 'Crétacé']
const selectedPeriod = ref('Crétacé')
const dinosaurs = ref([])
const loading = ref(true)
const error = ref(null)

const currentPage = ref(1)
const itemsPerPage = 6

const loadDinosaurs = async (frenchPeriod) => {
    try {
        loading.value = true
        error.value = null
        const translatedPeriodList = {
            "Trias": "Triassic",
            "Jurassique": "Jurassic",
            "Crétacé": "Cretaceous"
        }
        const englishPeriod = translatedPeriodList[frenchPeriod]
        dinosaurs.value = await fetchFrenchDinosaurs(englishPeriod)
    } catch (err) {
        error.value = "Impossible de charger les fossiles"
        console.error("Une erreur est survenue : ", err.message)
    } finally {
        loading.value = false
    }
}


const switchPeriod = (periodName) => {
    selectedPeriod.value = periodName
    console.log("Période active :", selectedPeriod.value)
    currentPage.value = 1
    loadDinosaurs(periodName)
}

const paginatedDinosaurs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return dinosaurs.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(dinosaurs.value.length / itemsPerPage)
})

onMounted(() => {
    loadDinosaurs(selectedPeriod.value)
})

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
                :is-active="selectedPeriod === period" @click="switchPeriod(period)" />
        </nav>
    </section>

    <p v-if="loading" class="state-message">Chargement de la liste...</p>
    <p v-if="error" class="state-message error">{{ error }}</p>
    <section class="dino-card-grid">
        <DinoCard v-for="dino in paginatedDinosaurs" :key="dino.id" :dinosaur="dino" />
    </section>

    <nav class="pagination" v-if="totalPages > 1">
        <button :disabled="currentPage === 1" @click="currentPage--" class="page-btn">Précédent</button>
        <span>Page {{ currentPage }} sur {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="page-btn">Suivant</button>
    </nav>
</template>

<style lang="scss" scoped>
@use "sass:color";

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
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;

    @media screen and (min-width: 768px) {
        gap: 1.5rem;
        margin-top: 2rem;
        align-items: center;
        flex-direction: row;
    }
}

.dino-card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2.125rem 1rem 2.5rem 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin: 2.5rem 2rem;
    }

}

.state-message {
    text-align: center;
    font-family: $font-sans;
    color: $provence-muted;
    margin: 3rem 0;

    &.error {
        color: $provence-clay;
    }
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin: 3rem 0;
    font-family: $font-sans;
    color: $provence-dark;

    span {
        font-weight: 600;
        font-size: 0.95rem;
    }

    .page-btn {
        background-color: $provence-clay;
        color: $provence-white;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease, opacity 0.2s ease;

        &:hover:not(:disabled) {
            background-color: color.scale($provence-clay, $lightness: -10%);
        }

        &:disabled {
            background-color: $provence-fossil;
            color: $provence-muted;
            cursor: not-allowed;
            opacity: 0.7;
        }
    }

}
</style>