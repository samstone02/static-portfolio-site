import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work-experience-summary',
  standalone: true,
  imports: [],
  templateUrl: './work-experience-summary.component.html',
  styleUrl: './work-experience-summary.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkExperienceSummaryComponent {
  @Input('job-title') jobTitle: string = "";
  @Input('company') company: string = "";
  @Input('when') when: string = "";
  @Input('location') location: string = "";
  @Input('description') description: string = "";
}
