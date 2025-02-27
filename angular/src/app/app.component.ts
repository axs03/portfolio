import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../templates/home/home.component';
import { ExperienceComponent } from '../templates/experience/experience.component';
import { ContactComponent } from '../templates/contact/contact.component';
import { ProjectsComponent } from '../templates/projects/projects.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, ExperienceComponent, ContactComponent, ProjectsComponent, NgbCollapseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio Home';
  isMenuCollapsed = true;
  activeSection: string = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    const sections = this.document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let activeId = this.activeSection;
      
      entries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });
      
      this.activeSection = activeId;
    }, observerOptions);
      sections.forEach(section => observer.observe(section));
    }
  }
}