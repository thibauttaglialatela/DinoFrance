<script setup>
defineProps({
    id: {
        type: [String],
        required: true
    }
})
</script>

<template>
    <h1>Un dinosaure dont l'oei est {{ id }}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus aspernatur maxime minima possimus
        cupiditate commodi, recusandae officiis id, at vero non doloribus quisquam sed quidem exercitationem quis
        numquam quia?</p>
</template>

<style lang="css" scoped></style>