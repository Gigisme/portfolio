import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Project} from "./project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor() { }

    getProjects(): Observable<Project[]> {
        const projects: Project[] = [
            {
                name: 'Task management website',
                image: 'assets/task-manager.png',
                description: 'A website built using .NET 8 and Angular for managing and sharing tasks.'
            },
            {
                name: 'Advent of Code',
                image: 'assets/aoc.png',
                description: 'Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels.'
            },
        ];
        return of(projects);
    }
}
