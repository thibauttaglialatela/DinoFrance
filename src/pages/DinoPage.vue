<script setup>
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
    <section v-if="loading" class="loading">Chargement de la page</section>
    <section v-if="error" class="error">{{ error }}</section>
    <section v-else-if="dinosaur" class="dino-details">
    <h1>{{ dinosaur.name }}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus aspernatur maxime minima possimus
        cupiditate commodi, recusandae officiis id, at vero non doloribus quisquam sed quidem exercitationem quis
        numquam quia?</p>
    </section>

</template>

<style lang="css" scoped></style>