<script lang="ts" setup>
import {inject} from "vue";

const t = inject('translate');
const changeLanguage = inject('changeLang');

interface language {
    title: string;
    flag: string;
    short: string;
}

const languages: language[] = [
    {
        title: 'Lietuviškai',
        flag: '🇱🇹',
        short: 'lt'
    },
    {
        title: 'English',
        flag: '🇬🇧',
        short: 'en'
    }
]
</script>

<template>
    <div class="profile flex flex-col pb-5">
        <img alt="Profile Picture" src="../assets/blank_profile.webp">
        <h2 class="text-2xl font-bold pb-2">Mindaugas Kulinas</h2>
        <p>{{
                // @ts-ignore 18046
                t("jobTitle")
            }}</p>
    </div>

    <div class="social">
        <a class="flex flex-row items-center justify-center mb-8"
           href="https://github.com/Gigisme"
           rel="noopener noreferrer"
           target="_blank">
            <img alt="" src="../assets/github-mark.svg">
            <h2 class="pl-6 font-bold text-xl">Github</h2>
        </a>
        <a class="flex-row flex items-center justify-center mb-4"
           href="https://www.linkedin.com/in/mindaugas-kulinas-778330189/"
           rel="noopener noreferrer"
           target="_blank">
            <img alt="" class="ml-5" src="../assets/LI-In-Bug.png">
            <h2 class="pl-6 font-bold text-xl">LinkedIn</h2>
        </a>
    </div>
    <div class="mt-4">
        <h3 class="text-xl font-bold ml-16">{{
                // @ts-ignore 18046
                t('contacts')
            }}</h3>
        <p> +370 632 43296</p>
        <p>kulinasmindaugas@gmail.com</p>
    </div>
    <div class="flex flex-row gap-5">
        <button v-for="lang in languages" :key="lang.short" @click="// @ts-ignore 18046
        changeLanguage(lang.short)">
            {{ lang.flag }}
        </button>
    </div>
</template>

<style scoped>
.profile img {
    height: 5rem;
    border-radius: 50%;
    display: block;
    margin: 0 auto;

}

.social img {
    width: 3rem;
}
</style>