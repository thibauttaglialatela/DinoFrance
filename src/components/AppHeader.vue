<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <div class="sticky top-0 z-50">
        <!-- En-tête principal -->
        <header class="bg-white/80 backdrop-blur-md border-b-2 border-provence-ochre shadow-lg h-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

                <!-- Logo & Titre -->
                <RouterLink to="#" class="flex items-center gap-3 group" @click="closeMenu">
                    <div
                        class="w-10 h-10 rounded-full bg-provence-clay/10 flex items-center justify-center border border-provence-clay/20 group-hover:bg-provence-clay transition-colors duration-300">
                        <svg class="w-5 h-5 text-provence-clay group-hover:text-provence-sand transition-colors duration-300"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" viewBox="0 0 24 24">
                            <path
                                d="M3 18c2-1.5 4-2.5 6.5-2.5H12c1 0 2-.5 2.5-1.5L16 10c.5-1 1.5-2 3-2h2c.6 0 1 .4 1 1s-.4 1-1 1h-1c-.5 0-1 .5-1 1v.5c0 .6.4 1 1 1h1c.6 0 1 .4 1 1s-.4 1-1 1h-2.5c-1.2 0-2.3.8-2.8 2L15 17.5c-.4.8-1.2 1.5-2.2 1.5H8.5c-2 0-3.8-1-5.5-1z" />
                            <path d="M10 15.5V20" />
                            <path d="M13 17.5V20" />
                            <path d="M12 11.5c-.8 0-1.5-.5-1.5-1.2" />
                            <circle cx="18.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                    </div>
                    <span class="font-cinzel text-xl font-bold tracking-wide text-provence-clay block leading-tight">
                        DinoFrance
                    </span>
                </RouterLink>

                <!-- Navigation Desktop -->
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                    <RouterLink to="#" class="text-provence-dark hover:text-provence-clay transition-colors">
                        Accueil
                    </RouterLink>
                    <RouterLink to="#" class="text-provence-clay font-semibold border-b-2 border-provence-clay pb-0.5">
                        Carte interactive
                    </RouterLink>
                    <RouterLink to="#" class="text-provence-dark hover:text-provence-clay transition-colors">
                        Gisements & musées
                    </RouterLink>
                </nav>

                <!-- Bouton Burger Mobile -->
                <button @click="isMenuOpen = !isMenuOpen" type="button"
                    class="md:hidden p-2 rounded-md text-provence-dark hover:text-provence-clay hover:bg-provence-card focus:outline-none transition-colors"
                    aria-label="Ouvrir le menu">
                    <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            </div>
        </header>

        <!-- Menu Mobile Plein Écran -->
        <div v-show="isMenuOpen"
            class="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-provence-dark md:hidden z-40 px-6 py-8 overflow-y-auto flex flex-col justify-between border-t border-provence-ochre/30">
            <nav class="flex flex-col space-y-4 text-lg font-medium pt-2">
                <RouterLink to="#" @click="closeMenu"
                    class="px-4 py-3 rounded-lg text-provence-sand hover:bg-provence-clay/30 transition-colors border-b border-provence-sand/10">
                    Accueil
                </RouterLink>
                <RouterLink to="#" @click="closeMenu"
                    class="px-4 py-3 rounded-lg text-provence-ochre font-semibold hover:bg-provence-clay/30 transition-colors border-b border-provence-sand/10">
                    Carte interactive
                </RouterLink>
                <RouterLink to="#" @click="closeMenu"
                    class="px-4 py-3 rounded-lg text-provence-sand hover:bg-provence-clay/30 transition-colors border-b border-provence-sand/10">
                    Gisements & musées
                </RouterLink>
            </nav>

        </div>
    </div>
</template>
