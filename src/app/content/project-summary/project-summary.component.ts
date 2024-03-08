import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectSummaryComponent {
  @Input('title') title: string = '';
  @Input('company') company: string = '';
  @Input('skills') skills: string[]= [];
  @Input('when') when: string = '';
  @Input('project_link') project_link: string = '';
  @Input('description') description: string = '';
}
