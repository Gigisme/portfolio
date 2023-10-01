<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {provide} from "vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";

const {t, locale} = useI18n();
const changeLanguage = (lang: string): void => {
    if (locale.value !== lang) {
        locale.value = lang;
    }
}
provide('translate', t);
provide('changeLang', changeLanguage)
</script>

<template>
    <div class="flex flex-row text-white m-10 gap-5 w-full justify-center">
        <aside
            class="flex flex-col items-center my-container border-2 rounded-xl h-140 sticky top-5 p-5">
            <Profile></Profile>
        </aside>
        <div class="my-container rounded-xl border-2 p-5 w-1/2">
            <Home></Home>
        </div>
    </div>
</template>

<style scoped>
.my-container {
    background-color: #1E1E1E;
    border-color: #252525;
}
</style>
