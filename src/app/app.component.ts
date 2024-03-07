import { Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { CallToActionComponent } from './sections/call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}

