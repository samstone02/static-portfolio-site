import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectSummaryComponent } from '../../content/project-summary/project-summary.component';
import { CommonModule } from '@angular/common';

class ProjectSummary {
  title: string = "";
  company: string = "";
  when: string = "";
  skills: string[] = [];
  link: string = "";
  description: string = "";
  constructor() {
    this.title = "";
    this.company = "";
    this.when = "";
    this.skills = [];
    this.link = "";
    this.description = "";
  }
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectSummaryComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  projects: ProjectSummary[] = new Array<ProjectSummary>();
  async ngOnInit(): Promise<void> {
    const projectsRes = await fetch("/assets/project-summaries.json");
    this.projects = await projectsRes.json();
  }
}
