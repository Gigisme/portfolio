<script lang="ts" setup>
import {inject} from "vue";

const t = inject('translate');
</script>

<template>
    {{
        // @ts-ignore 18046
        t("about.text")
    }}
</template>

<style scoped>

</style>
