import { Component } from '@angular/core';
import { WorkExperienceSummaryComponent } from '../../content/work-experience-summary/work-experience-summary.component';
import { CommonModule } from '@angular/common';

class WorkExperienceSummary {
  jobTitle: string = "";
  company: string = "";
  when: string = "";
  location: string = "";
  description: string = "";
  constructor() {
    this.jobTitle = "";
    this.company = "";
    this.when = "";
    this.location = "";
    this.description = "";
  }
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, WorkExperienceSummaryComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experiences: WorkExperienceSummary[] = new Array<WorkExperienceSummary>();
  async ngOnInit(): Promise<void> {
    const experiencesRes = await fetch("/assets/work-experience-summaries.json");
    this.experiences = await experiencesRes.json();
  }
}
