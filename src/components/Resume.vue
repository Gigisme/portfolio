<script lang="ts" setup>

import {inject} from "vue";

const t = inject("translate");
</script>

<template>
    <ul class="timeline">
        <li>
            <div class="scroll">
                <svg height="48" viewBox="0 0 256 256" width="48" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="10" width="10"/>
                    <path d="M200,176V64a23.9,23.9,0,0,0-24-24H40" fill="none" stroke="#c5b358" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="12"/>
                    <line fill="none" stroke="#c5b358" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"
                          x1="104"
                          x2="168"
                          y1="104" y2="104"/>
                    <line fill="none" stroke="#c5b358" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"
                          x1="104"
                          x2="168"
                          y1="136" y2="136"/>
                    <path d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88" fill="none"
                          stroke="#c5b358" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
                </svg>
            </div>
        </li>
        <li class="timeline-item">
            <div class="item-title">
                {{ t("education.uni.title") }}
            </div>
            <div class="timestamp">
                {{ t("education.uni.date") }}
            </div>
            <div class="item-content">
                {{ t("education.uni.content") }}
            </div>
        </li>

        <li class="timeline-item">
            <div class="item-title">
                {{ t("education.school1.title") }}
            </div>
            <div class="timestamp">
                2015 - 2019
            </div>
            <div class="item-content">
                {{ t("education.school1.content") }}
            </div>
        </li>
        <li class="timeline-item">
            <div class="item-title">
                {{ t("education.school2.title") }}
            </div>
            <div class="timestamp">
                2007 - 2015
            </div>
            <div class="item-content">
                {{ t("education.school2.content") }}
            </div>
        </li>
    </ul>
</template>

<style scoped>
@media (max-width: 768px) {
    ul.timeline li::after {
        height: 110px;
        top: 15px;
    }
}

@media (min-width: 768px) {
    ul.timeline li::after {
        height: 90px;
        top: 15px;
    }
}

.item-content {
    color: #B4B4B4;
}

.timestamp {
    color: #c5b358;
}

ul.timeline {
    list-style: none;
    padding: 0;
}

ul.timeline li {
    position: relative;
    margin-bottom: 20px;
    padding-left: 60px;
}

ul.timeline li:first-child {
    position: relative;
    margin-bottom: 20px;
    padding-left: 20px;
}

/* dot */
ul.timeline li::before {
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFD168;
    border-radius: 50%;
    left: 44px;
    top: 5px;
    box-shadow: 0 0 15px #FFD168;
}

/* line */
ul.timeline li::after {
    content: "";
    position: absolute;
    border: 1px solid #383838;
    width: 0;
    left: 48px;
    bottom: 0px;
}

ul.timeline li:last-child::after {
    border: none;
}

ul.timeline li:first-child::before {
    content: none;
}

ul.timeline li:first-child::after {
    content: "";
    position: absolute;
    border: 1px solid #383838;
    width: 0;
    left: 48px;
    top: 55px;
    bottom: 0px;
    height: 28px;
}

.scroll {
    background-color: #202022;
    border: 2px solid #383838;
    width: 50px;
    align-items: center;
    border-radius: 10%;
    padding-left: 0;
    padding-top: 4px;
    margin-left: 3px;
    box-shadow: 0 0 5px #FFD168;
}

</style>