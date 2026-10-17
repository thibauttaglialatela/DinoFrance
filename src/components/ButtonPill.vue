<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        default: 'sand'
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])
</script>

<template>
    <button type="button" class="btn-pill" :class="[`btn-${variant}`, { active: isActive }]" :aria-pressed="isActive"
        @click="$emit('click', $event)">
        <span>{{ title }}</span>
    </button>
</template>

<style lang="scss" scoped>
@use "sass:color";

.btn-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    border: 1px solid transparent;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    user-select: none;

    span {
        font-size: 0.85rem;
        font-weight: 600;
        line-height: 1;
    }

    &:focus-visible {
        outline: 2px solid $provence-clay;
        outline-offset: 2px;
    }

    &.btn-sand {
        background-color: $provence-sand;
        border-color: $provence-ochre;

        span {
            color: $provence-dark;
        }

        &:hover {
            background-color: color.adjust($provence-sand, $lightness: 5%);
        }
    }

    &.btn-clay {
        background-color: $provence-clay;
        border-color: $provence-clay;

        span {
            color: $provence-white;
        }

        &:hover {
            background-color: color.adjust($provence-clay, $lightness: -5%);
        }
    }

    &.btn-fossil {
        background-color: $provence-fossil;
        border-color: $provence-fossil;

        span {
            color: $provence-white;
        }
    }

    &.active {
        background-color: $provence-fossil;
        border-color: $provence-fossil;

        span {
            color: $provence-white;
        }

        &:hover {
            background-color: color.adjust($provence-fossil, $lightness: 5%);
        }
    }
}
</style>