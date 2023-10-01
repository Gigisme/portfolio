<script setup lang="ts">
import {inject} from "vue";

const t = inject('translate');
</script>

<template>
    {{t("about.text")}}
</template>

<style scoped>

</style>
