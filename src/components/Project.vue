<script lang="ts" setup>
defineProps<{
    name: string,
    description?: string,
    image?: string,
    link: string,
}>()
</script>

<template>
    <a :href="link"
       target="_blank">
        <h2 class="font-bold text-center">{{ name }}</h2>
        <img :src="image"
             alt="project image"
             class="rounded-lg"/></a>
    <p>{{ description }}</p>
</template>

<style scoped>

</style>