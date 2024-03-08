import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectSummaryComponent } from '../../content/project-summary/project-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectSummaryComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {

}
