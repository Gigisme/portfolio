<script lang="ts" setup>
import Project from "./Project.vue";

const projects = [
    {
        name: "Advent of Code 2022",
        description: "Advent of Code is an Advent" +
            " calendar of small programming puzzles" +
            " for a variety of skill sets and skill levels." +
            " Still in progress.",
        image: "https://repository-images.githubusercontent.com/112706767/160be980-3b1a-11eb-9dbe-439a40adfa99",
    },
]
</script>

<template>
    <div class="flex flex-wrap">
        <div v-for="(project) in projects" class="w-1/3 p-2">
            <Project :description="project.description" :image="project.image" :name="project.name">
            </Project>
        </div>
    </div>
</template>

<style scoped>

</style>