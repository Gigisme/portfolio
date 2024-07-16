import {Component, Inject} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";
import {Project} from "../project.model";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-project-dialog',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        MatDialogClose
    ],
    templateUrl: './project-dialog.component.html',
    styleUrl: './project-dialog.component.css'
})
export class ProjectDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }) {
    }
}
