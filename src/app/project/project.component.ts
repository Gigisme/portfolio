import {Component, OnInit} from '@angular/core';
import {Project} from "../project.model";
import {NgForOf} from "@angular/common";
import {ProjectService} from "../services/project.service";
import {ProjectDialogComponent} from "../project-dialog/project-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SandComponent} from "../sand/sand.component";

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

    constructor(private projectService: ProjectService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
    }

    onClick(project: Project) {
        if (project.id === 2) {
            this.dialog.open(SandComponent, {
                maxWidth: 'none',
            })
            return;
        }
        this.dialog.open(ProjectDialogComponent, {
            data: {project}
        })
    }
}
