import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ProjectComponent} from "./project/project.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ProfileComponent, MatSlideToggle, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
