import { Component } from '@angular/core';
import { ProjectSummaryComponent } from '../../content/project-summary/project-summary.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectSummaryComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
