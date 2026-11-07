<script setup>
import ButtonPill from '@/components/ButtonPill.vue';
import { fetchOneDinosaur } from '@/services/pbdbServices';
import { onMounted, ref } from 'vue';

const props = defineProps({
    id: {
        type: [String, Number],
        required: true
    }
})
const dinosaur = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        loading.value = true
        error.value = null
        console.log(props.id)

        dinosaur.value = await fetchOneDinosaur(props.id)

        console.log("Données du dinosaure : ", dinosaur.value)
    } catch (err) {
        error.value = "Impossible de charger le dinosaure"
        console.error(err.message)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <section v-if="loading" class="loading">Chargement de la page...</section>
    <section v-else-if="error" class="error">{{ error }}</section>

    <section v-else-if="dinosaur" class="dino-details">
        <section class="hero-section">
            <article class="hero-left">
                <h1>{{ dinosaur.name }}</h1>
                <div class="hero-left-strati-diet">
                    <ButtonPill :title="dinosaur.period" variant="fossil" />
                    <p>{{ dinosaur.diet }}</p>
                </div>
                <p v-if="dinosaur.lifeHabit"><strong>Habitude de vie : </strong>{{ dinosaur.lifeHabit }}</p>
            </article>

            <article class="hero-right" v-if="dinosaur.imageUrl">
                <img :src="dinosaur.imageUrl" alt="Illustration de dinosaure" />
            </article>
        </section>

        <section class="body">
            <article class="main-content">
                <h2>ÉCOLOGIE</h2>

                <div class="ecology-detail" v-if="dinosaur.taxonEnv">
                    <strong>Environnement général :</strong>
                    <p>{{ dinosaur.taxonEnv }}</p>
                </div>

                <div class="ecology-detail" v-if="dinosaur.motility">
                    <strong>Motilité :</strong>
                    <p>{{ dinosaur.motility }}</p>
                </div>

                <div class="ecology-detail" v-if="dinosaur.reproduction">
                    <strong>Mode de reproduction :</strong>
                    <p>{{ dinosaur.reproduction }}</p>
                </div>
            </article>

            <aside class="taxonomy-sidebar">
                <h2>TAXONOMIE</h2>
                <div class="taxonomy">
                    <p>{{ dinosaur.phylum || 'phylum' }}</p>
                    <i class="arrow"></i>
                    <p>{{ dinosaur.class || 'class' }}</p>
                    <i class="arrow"></i>
                    <p>{{ dinosaur.order || 'order' }}</p>
                    <i class="arrow"></i>
                    <p>{{ dinosaur.family || 'family' }}</p>
                    <i class="arrow"></i>
                    <p>{{ dinosaur.genus || 'genus' }}</p>
                </div>
            </aside>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.dino-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem 2rem;
        grid-template-areas:
            "hero-section hero-section"
            "main sidebar";
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 20px;

        @media screen and (min-width: 768px) {
            display: grid;
            grid-area: hero-section;
            grid-template-columns: 2fr 1fr;
            align-items: center;
            gap: 2rem;
        }

        .hero-left {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            @media screen and (min-width: 768px) {
                align-items: center;
            }

            h1 {
                color: $provence-clay;
                font-size: clamp(1.8rem, 5vw, 2.5rem);
                font-weight: bold;
                text-align: center;
                line-height: 1.2;

                @media screen and (min-width: 768px) {
                    text-align: left;
                }
            }

            .hero-left-strati-diet {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                @media screen and (min-width: 768px) {
                    justify-content: flex-start;
                }
            }

            p {
                font-size: 0.9rem;
                text-align: center;

                @media screen and (min-width: 768px) {
                    text-align: left;
                }
            }
        }

        .hero-right {
            width: 100%;

            img {
                display: block;
                width: 100%;
                max-height: 350px;
                object-fit: cover;
                border-radius: 12px;
            }
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media screen and (min-width: 768px) {
            display: contents;
        }

        h2 {
            color: $provence-ochre;
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-align: center;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .main-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            @media screen and (min-width: 768px) {
                grid-area: main;
            }

            h2 {
                @media screen and (min-width: 768px) {
                    text-align: left;
                }
            }

            .ecology-detail {
                background: $provence-card;
                padding: 0.8rem;
                border-radius: 8px;
                max-width: fit-content;
                margin: auto;

                strong {
                    font-size: 0.85rem;
                    display: block;
                    margin-bottom: 0.2rem;
                }

                p {
                    font-size: 0.9rem;
                    color: $provence-dark;
                    overflow-wrap: break-word;
                }
            }
        }
    }

    .taxonomy-sidebar {
        margin-top: 1rem;

        @media screen and (min-width: 768px) {
            grid-area: sidebar;
            margin-top: 0;
        }

        h2 {
            color: $provence-ochre;
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-align: center;
            margin-bottom: 1rem;
            text-transform: uppercase;

            @media screen and (min-width: 768px) {
                text-align: left;
            }
        }
    }

    .taxonomy {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;

        @media screen and (min-width: 768px) {
            flex-wrap: wrap;
        }

        p {
            text-transform: capitalize;
            font-weight: bold;
            font-size: 0.95rem;
        }

        .arrow {
            border: solid $provence-dark;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 4px;
            transform: rotate(45deg);
            margin: 0.2rem 0;

        }
    }
}
</style>