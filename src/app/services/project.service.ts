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
            description: 'A website built using .NET 8 and Angular for managing and sharing tasks.'
        },
        {
            id: 1,
            name: 'Advent of Code',
            image: 'assets/aoc.png',
            description: 'Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels.'
        },
        {
            id: 2,
            name: 'Falling sand',
            image: '',
            description: 'sand'
        },
    ];

    constructor() {
    }

    getProjects(): Project[] {
        return this.projects;
    }
}
