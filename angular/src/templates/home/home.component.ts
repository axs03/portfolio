import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadResume(): void {
      window.open('./files/Aman_Sahu_Resume.pdf', '_blank');
  }
}