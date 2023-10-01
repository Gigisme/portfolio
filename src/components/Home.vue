<script lang="ts" setup>
import {ref} from "vue";
import Resume from "./Resume.vue";
import About from "./About.vue";

let selectedComponent = ref('About');

const navClick = (navElement: string): void => {
    selectedComponent.value = navElement;
}
</script>

<template>
    <div class="header flex justify-between">
        <h3>{{ selectedComponent }}</h3>
        <div class="button-row flex justify-between">
            <button :class="{ active: selectedComponent == 'About'}" @click="navClick('About')">About</button>
            <button :class="{ active: selectedComponent == 'Resume'}" @click="navClick('Resume')">Resume</button>
            <button :class="{ active: selectedComponent == 'Portfolio'}" @click="navClick('Portfolio')">Portfolio
            </button>
        </div>
    </div>
    <br class="">
    <About v-if="selectedComponent == 'About'"></About>
    <Resume v-if="selectedComponent == 'Resume'"></Resume>
</template>

<style scoped>
.button-row {
    background-color: #292929;
    padding: 10px;
    margin: -20px -20px 0 0;
    border-radius: 0 8px 0 20px;
}

.button-row button {
    color: #FFFFFF;
    background: none;
    border: none;
    padding: 2px 10px;
    font-weight: bold;
    cursor: pointer;
}

.button-row button.active {
    color: #FFD168;
}
</style>