import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BioComponent } from './bio/bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, BioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
