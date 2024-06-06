import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
        MatCardModule,
        MatButton,
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
