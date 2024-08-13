import {Injectable} from '@angular/core';
import {Project} from "../project.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        {
            id: 0,
            name: 'Task management website',
            image: 'assets/task-manager.png',
            description: 'A website built using .NET 8 and Angular for managing and sharing tasks.',
            repo: 'https://github.com/Gigisme/task-management',
        },
        {
            id: 1,
            name: 'Advent of Code',
            image: 'assets/aoc.png',
            description: 'Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels.',
            repo: 'https://github.com/Gigisme/advent-of-code',
        },
        {
            id: 2,
            name: 'Falling sand',
            image: 'assets/fallingsand.png',
            description: 'This project is a falling sand simulation. It allows users to interact with a grid of particles, drawing and watching as they fall, settle, and interact based on simple physics rules.',
            repo: 'https://github.com/Gigisme/portfolio/tree/master/src/app/sand',
        },
    ];

    constructor() {
    }

    getProjects(): Project[] {
        return this.projects;
    }
}
