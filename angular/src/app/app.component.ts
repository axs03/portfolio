import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../templates/home/home.component';
import { ExperienceComponent } from '../templates/experience/experience.component';
import { ContactComponent } from '../templates/contact/contact.component';
import { ProjectsComponent } from '../templates/projects/projects.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, ExperienceComponent, ContactComponent, ProjectsComponent, NgbCollapseModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio Home';
  isMenuCollapsed = true;
}