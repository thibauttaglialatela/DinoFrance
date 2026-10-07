<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
    <header class="app-header">
        <h4 class="logo">DinoFrance</h4>

        <nav class="nav-menu" :class="{ 'is-open': isMenuOpen }">
            <RouterLink to="/" @click="isMenuOpen = false">Accueil</RouterLink>
            <RouterLink to="/carte" @click="isMenuOpen = false">Carte interactive</RouterLink>
            <RouterLink to="/gisements" @click="isMenuOpen = false">Gisements & musées</RouterLink>
        </nav>

        <button class="burger-btn" :class="{ 'is-active': isMenuOpen }" type="button" @click="isMenuOpen = !isMenuOpen"
            aria-label="Menu mobile">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: $provence-white;
    border-bottom: 2px solid rgba($provence-ochre, 0.3);
    position: relative;

    .logo {
        font-size: 1.5rem;
        color: $provence-clay;
        margin: 0;
    }
}

.burger-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1.75rem;
    height: 1.2rem;
    padding: 0;

    span {
        display: block;
        height: 0.2rem;
        width: 100%;
        background-color: $provence-clay;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }

    &.is-active {
        span:nth-child(1) {
            transform: translateY(0.5rem) rotate(45deg);
            background-color: $provence-ochre;
        }

        span:nth-child(2) {
            opacity: 0;
        }

        span:nth-child(3) {
            transform: translateY(-0.5rem) rotate(-45deg);
            background-color: $provence-ochre;
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
}

.nav-menu {
    display: none;

    &.is-open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 100vh;
        padding: 1.5rem;
        gap: 1rem;
        background-color: $provence-fossil;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        align-items: center;
        justify-content: space-evenly;
    }

    a {
        color: $provence-sand;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover,
        &.router-link-active {
            color: $provence-ochre;
        }


    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        position: static;
        padding: 0;
        border: none;
        box-shadow: none;
        background-color: transparent;

        a {
            color: $provence-dark;
            font-size: 1rem;
            text-decoration: none;
            font-weight: 500;
        }
    }
}
</style>