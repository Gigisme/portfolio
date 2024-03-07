<script lang="ts" setup>
import Project from "./Project.vue";
import portfolio_image from "../assets/portfolio.png"
import task_image from "../assets/task-manager.png"


const projects = [
    {
        name: "Advent of Code 2022",
        description: "Advent of Code is an Advent" +
            " calendar of small programming puzzles" +
            " for a variety of skill sets and skill levels." +
            " Still in progress.",
        image: "https://repository-images.githubusercontent.com/112706767/160be980-3b1a-11eb-9dbe-439a40adfa99",
        link: "https://github.com/Gigisme/advent-of-code-2022",
    },
    {
        name: "Portfolio website",
        description: "This website",
        image: portfolio_image,
        link: "https://github.com/Gigisme/portfolio",
    },
    {
        name: "Task management website",
        description: "A website built using .NET 8 and Angular for managing and sharing tasks.",
        image: task_image,
        link: "https://github.com/Gigisme/task-management",
    }
]
</script>

<template>
    <div class="flex flex-wrap">
        <div v-for="(project) in projects" class="w-1/3 p-2">
            <Project :description="project.description" :image="project.image" :name="project.name" :link="project.link">
            </Project>
        </div>
    </div>
</template>

<style scoped>

</style>