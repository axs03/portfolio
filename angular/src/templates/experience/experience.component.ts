import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.boxes.forEach((box: ElementRef) => {
      box.nativeElement.addEventListener('mouseover', () => {
        box.nativeElement.classList.add('expanded');
      });
      box.nativeElement.addEventListener('mouseout', () => {
        box.nativeElement.classList.remove('expanded');
      });
    });
  }
}