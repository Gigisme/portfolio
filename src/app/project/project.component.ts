import {Component, OnInit} from '@angular/core';
import {Project} from "../project.model";
import {NgForOf} from "@angular/common";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }
}
