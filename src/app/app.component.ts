import { Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { CallToActionComponent } from './sections/call-to-action/call-to-action.component';
import { EducationComponent } from './sections/education/education.component';
import { WorkExperienceComponent } from './sections/work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, WorkExperienceComponent, EducationComponent, ProjectsComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}

